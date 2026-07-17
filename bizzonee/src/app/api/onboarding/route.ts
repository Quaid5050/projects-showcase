import { NextResponse } from "next/server";
export const runtime = "nodejs";

const v = (x: unknown): string => { const s = String(x ?? "").trim(); return s || "—"; };
const list = (a: unknown): string => (Array.isArray(a) && a.length ? a.join(", ") : "None");

interface CuField { id: string; name: string; type: string; type_config?: { options?: { id: string; name: string; orderindex: number }[] } }

async function getFields(listId: string, token: string): Promise<CuField[]> {
  const res = await fetch(`https://api.clickup.com/api/v2/list/${listId}/field`, { headers: { Authorization: token } });
  const data = await res.json();
  return (data.fields || []) as CuField[];
}

function findByName(fields: CuField[], partial: string): CuField | undefined {
  return fields.find((f) => f.name.toLowerCase().includes(partial.toLowerCase()));
}

function dropdownIdx(field: CuField, search: string): number | undefined {
  const opts = field.type_config?.options || [];
  const s = search.toLowerCase();
  const match = opts.find((o) => o.name.toLowerCase() === s) ||
                opts.find((o) => s.includes(o.name.toLowerCase()) || o.name.toLowerCase().includes(s));
  return match?.orderindex;
}

async function setField(taskId: string, fieldId: string, value: unknown, token: string): Promise<boolean> {
  try {
    const res = await fetch(`https://api.clickup.com/api/v2/task/${taskId}/field/${fieldId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: token },
      body: JSON.stringify({ value }),
    });
    return res.ok;
  } catch { return false; }
}

export async function POST(req: Request) {
  try {
    const d = await req.json();
    const business = String(d.business || "").trim();
    const name = String(d.name || "").trim();
    const email = String(d.email || "").trim();
    const phone = String(d.phone || "").trim();
    if (!business || !name || !email || !phone) {
      return NextResponse.json({ error: "Please fill in business, name, email and phone." }, { status: 400 });
    }

    const TOKEN = (process.env.CLICKUP_TOKEN || "").trim();
    const LIST = (process.env.CLICKUP_LIST_ID || "").trim();
    if (!TOKEN || !LIST) return NextResponse.json({ error: "Not configured." }, { status: 500 });

    // GoHighLevel webhook
    const GHL_WEBHOOK = "https://services.leadconnectorhq.com/hooks/gSKYbmYEz3uDdVAuThaS/webhook-trigger/a57cd9da-341a-401c-9675-237c53c620be";
    try {
      const nameParts = name.split(" ");
      const ghlRes = await fetch(GHL_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: nameParts[0] || name,
          lastName: nameParts.slice(1).join(" ") || "",
          name, email, phone,
          companyName: business,
          source: "BizzOne Digital Website — Onboarding",
        }),
      });
      const ghlBody = await ghlRes.text().catch(() => "");
      console.log(`GHL: ${ghlRes.status} ${ghlBody}`);
    } catch (e) {
      console.error("GHL error:", e);
    }

    const prio = String(d.priority || "").toLowerCase();
    const priority = prio.startsWith("urgent") ? 1 : prio.startsWith("high") ? 2 : prio.startsWith("low") ? 4 : 3;
    const due = d.launch ? Date.parse(String(d.launch)) : NaN;

    const desc =
`## 📋 Contact & Project
**Business:** ${v(business)}
**Contact:** ${v(name)} | ${v(email)} | ${v(phone)}
**Business Address:** ${v(d.address)}
**Current Website:** ${v(d.site)}
**Social:** ${v(d.social)}
**Package:** ${v(d.pkg)}
**Priority:** ${v(d.priority)}
**Timeline:** ${v(d.launch)}
**Goal:** ${v(d.goal)}
**Audience:** ${v(d.audience)}
**Difference:** ${v(d.usp)}

## 🎨 Brand & Design
**Logo:** ${v(d.logo)}
**Brand Colours:** ${v(d.brandColorsDetail)}
**Design Style:** ${v(d.style)}
**Inspiration:** ${v(d.inspo)}

## 📝 Content
**Pages:** ${list(d.pages)}
**Headline:** ${v(d.headline)}
**About:** ${v(d.about)}
**Services/Products:** ${v(d.services)}
**Pricing:** ${v(d.pricingDetail)}
**Contact Info:** ${v(d.contactInfo)}

## 🔧 Technical
**Domain:** ${v(d.domain)}
**Hosting:** ${v(d.hosting)}
**Features:** ${list(d.features)}
**Tools:** ${v(d.tools)}
**Existing Login:** ${v(d.existingLogin)}
**Business Email Access:** ${v(d.bizEmail)}
**Notes:** ${v(d.notes)}

---
*Submitted via BizzOne Digital website onboarding form*`;

    // Step 1: Create task (description only)
    const body: Record<string, unknown> = {
      name: `${business} — ${name} | Website Onboarding`,
      markdown_description: desc, priority,
      status: process.env.CLICKUP_STATUS || "not started",
      tags: ["website", "onboarding"],
    };
    if (!Number.isNaN(due)) body.due_date = due;

    const res = await fetch(`https://api.clickup.com/api/v2/list/${LIST}/task`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: TOKEN },
      body: JSON.stringify(body),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.id) {
      console.error("ClickUp create error:", res.status, JSON.stringify(data));
      return NextResponse.json({ error: data.err || "ClickUp error" }, { status: 502 });
    }

    const taskId = data.id;
    console.log(`Task created: ${taskId}`);

    // Step 2: Fetch custom fields & update each one individually
    const cuFields = await getFields(LIST, TOKEN);
    const results: string[] = [];

    const trySet = async (partial: string, val: unknown) => {
      const field = findByName(cuFields, partial);
      if (!field || val === undefined || val === null || val === "" || val === "—") return;

      let finalVal: unknown = val;

      if (field.type === "drop_down") {
        const idx = dropdownIdx(field, String(val));
        if (idx === undefined) { results.push(`✗ ${field.name}: no matching option for "${val}"`); return; }
        finalVal = idx;
      } else if (field.type === "date") {
        const ms = Date.parse(String(val));
        if (Number.isNaN(ms)) return;
        finalVal = ms;
      } else if (field.type === "email") {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(val))) return;
        finalVal = String(val);
      } else if (field.type === "url") {
        const s = String(val);
        if (!/^https?:\/\//i.test(s)) return;
        finalVal = s;
      } else if (field.type === "location") {
        return; // skip location fields
      } else {
        finalVal = String(val);
      }

      const ok = await setField(taskId, field.id, finalVal, TOKEN);
      results.push(ok ? `✓ ${field.name}` : `✗ ${field.name}: API rejected`);
    };

    // Map form data → ClickUp fields (using partial name match)
    await trySet("Business Name", d.business);
    await trySet("Main Contact", d.name);
    await trySet("Email Address", d.email);
    await trySet("Phone Number", d.phone);
    await trySet("About Us", d.about);
    await trySet("special features", list(d.features));
    await trySet("special offers or pac", d.pkg);
    await trySet("third-party tools", d.tools);
    await trySet("Anything else", d.notes);
    await trySet("Business email access", d.bizEmail);
    await trySet("Contact Page", d.contactInfo);
    await trySet("have a logo", d.logo);
    await trySet("have brand colo", d.hasBrandColors);
    await trySet("have domain", d.domain);
    await trySet("have hosting", d.hosting);
    await trySet("have pricing", d.pricingDetail);
    await trySet("Existing website login", d.existingLogin);
    await trySet("Expected timeline", d.launch); // tries both date and text
    await trySet("Home Page", d.headline);
    await trySet("If yes, please provide", d.brandColorsDetail);
    await trySet("design style", d.style);
    await trySet("inspiration", d.inspo);
    await trySet("Which pages", list(d.pages));

    console.log("Field updates:", results.join(" | "));
    return NextResponse.json({ ok: true, url: data.url });
  } catch (err) {
    console.error("Onboarding error:", err);
    return NextResponse.json({ error: "Failed to submit." }, { status: 500 });
  }
}