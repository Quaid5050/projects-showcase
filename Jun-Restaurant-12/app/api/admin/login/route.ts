import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();

  const validUsername = process.env.ADMIN_USERNAME || "admin";
  const validPassword = process.env.ADMIN_PASSWORD || "chansgarden2024";

  if (username === validUsername && password === validPassword) {
    const response = Response.json({ success: true });
    // Set a simple session cookie
    const headers = new Headers(response.headers);
    headers.set(
      "Set-Cookie",
      `admin_session=authenticated; HttpOnly; Path=/; Max-Age=86400; SameSite=Strict`
    );
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers,
    });
  }

  return Response.json({ error: "Invalid credentials" }, { status: 401 });
}
