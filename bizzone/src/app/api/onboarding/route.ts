import { NextRequest, NextResponse } from "next/server";

/**
 * Server-side handler that creates a ClickUp task from the onboarding form.
 * The ClickUp token stays on the server (never exposed to the browser).
 *
 * Required environment variables (set in .env.local):
 *   CLICKUP_TOKEN    = pk_xxxxxxxx  (your ClickUp Personal API token)
 *   CLICKUP_LIST_ID  = 901327224920 (the list to create tasks in)
 */
export async function POST(req: NextRequest) {
  const token = process.env.CLICKUP_TOKEN;
  const listId = process.env.CLICKUP_LIST_ID;

  if (!token || !listId) {
    return NextResponse.json(
      { error: "Onboarding is not configured yet. Please set CLICKUP_TOKEN and CLICKUP_LIST_ID." },
      { status: 500 }
    );
  }

  let body: {
    name?: string;
    markdown_description?: string;
    priority?: string;
    launchDate?: string;
    tags?: string[];
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, markdown_description, priority, launchDate, tags } = body;
  if (!name) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  // ClickUp expects integer priority (1=Urgent … 4=Low) and a Unix ms due date
  const priorityMap: Record<string, number> = { urgent: 1, high: 2, normal: 3, low: 4 };
  const due = launchDate ? Date.parse(launchDate) : NaN;

  try {
    const res = await fetch(`https://api.clickup.com/api/v2/list/${listId}/task`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: token },
      body: JSON.stringify({
        name,
        markdown_description: markdown_description ?? "",
        priority: priorityMap[priority ?? "normal"] ?? 3,
        ...(Number.isNaN(due) ? {} : { due_date: due }),
        tags: Array.isArray(tags) ? tags : [],
      }),
    });

    const data = await res.json();
    if (!res.ok || !data?.id) {
      return NextResponse.json(
        { error: data?.err || "ClickUp rejected the request. Check your token and list ID." },
        { status: 502 }
      );
    }

    return NextResponse.json({ id: data.id, url: data.url });
  } catch {
    return NextResponse.json({ error: "Could not reach ClickUp. Please try again." }, { status: 502 });
  }
}