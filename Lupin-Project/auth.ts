import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import { prisma } from "@/lib/prisma"

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  pages: { signIn: "/handyman/login" },
  providers: [
    Credentials({
      id: "handyman",
      name: "Handyman",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null
        const h = await prisma.handyman.findUnique({ where: { email: credentials.email as string } })
        if (!h) return null
        const valid = await bcrypt.compare(credentials.password as string, h.password)
        if (!valid) return null
        return { id: h.id, name: h.name, email: h.email, role: "handyman", status: h.status }
      },
    }),
    Credentials({
      id: "admin",
      name: "Admin",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null
        
        // Check database first
        const admin = await prisma.admin.findUnique({ where: { email: credentials.email as string } })
        if (admin) {
          const valid = await bcrypt.compare(credentials.password as string, admin.password)
          if (valid) return { id: admin.id, name: admin.name, email: admin.email, role: "admin" }
        }
        
        // Fallback to env
        if (credentials.email === process.env.ADMIN_EMAIL && credentials.password === process.env.ADMIN_PASSWORD) {
          return { id: "admin", name: "Admin", email: process.env.ADMIN_EMAIL!, role: "admin" }
        }
        
        return null
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) { token.role = (user as any).role; token.status = (user as any).status; token.id = user.id }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).role = token.role
        ;(session.user as any).status = token.status
        ;(session.user as any).id = token.id
      }
      return session
    },
  },
})
