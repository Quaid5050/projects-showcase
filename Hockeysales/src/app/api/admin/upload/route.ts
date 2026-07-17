import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import cloudinary, { isCloudinaryConfigured } from "@/lib/cloudinary";

export const dynamic = "force-dynamic";

// POST /api/admin/upload — upload a product image to Cloudinary, return its URL
export async function POST(req: NextRequest) {
  const denied = requireAdmin(req);
  if (denied) return denied;

  if (!isCloudinaryConfigured()) {
    return NextResponse.json(
      { error: "Image uploads are not configured. Add Cloudinary keys to the environment." },
      { status: 500 }
    );
  }

  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file || typeof file === "string") {
      return NextResponse.json({ error: "No file provided." }, { status: 400 });
    }

    const blob = file as File;
    if (blob.size > 8 * 1024 * 1024) {
      return NextResponse.json({ error: "Image must be under 8MB." }, { status: 400 });
    }
    if (!blob.type.startsWith("image/")) {
      return NextResponse.json({ error: "Only image files are allowed." }, { status: 400 });
    }

    const bytes = Buffer.from(await blob.arrayBuffer());
    const dataUri = `data:${blob.type};base64,${bytes.toString("base64")}`;

    const result = await cloudinary.uploader.upload(dataUri, {
      folder: "strides-products",
      resource_type: "image",
    });

    return NextResponse.json({ url: result.secure_url });
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    return NextResponse.json({ error: "Upload failed. Please try again." }, { status: 500 });
  }
}
