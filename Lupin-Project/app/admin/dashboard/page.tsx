import { redirect } from "next/navigation"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { AdminDashboardClient } from "@/components/admin/dashboard-client"

export default async function AdminDashboardPage() {
  const session = await auth()
  if ((session?.user as any)?.role !== "admin") redirect("/admin/login")

  const [handymen, jobs] = await Promise.all([
    prisma.handyman.findMany({
      select: { id: true, name: true, email: true, phone: true, city: true, postalCode: true, skills: true, status: true, feePercent: true, availability: true, createdAt: true },
      orderBy: { createdAt: "desc" },
    }),
    prisma.job.findMany({
      include: { handyman: { select: { id: true, name: true, city: true } } },
      orderBy: { createdAt: "desc" },
    }),
  ])

  return <AdminDashboardClient handymen={handymen} jobs={jobs} />
}
