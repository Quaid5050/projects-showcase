import { getServerSession } from "next-auth";
import type { NextAuthOptions } from "next-auth";

export async function getSession(authOptions: NextAuthOptions) {
  return getServerSession(authOptions);
}
