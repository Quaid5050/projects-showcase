import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import type { NextAuthOptions } from "next-auth";

export async function requireAdmin(authOptions: NextAuthOptions) {
  const session = await getServerSession(authOptions);
  const user = session?.user as { role?: string } | undefined;
  if (!session || user?.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}
