export const dynamic = "force-dynamic";

export async function POST() {
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: {
      "Set-Cookie":
        "admin_session=; HttpOnly; Path=/; Max-Age=0; SameSite=Strict",
      "Content-Type": "application/json",
    },
  });
}
