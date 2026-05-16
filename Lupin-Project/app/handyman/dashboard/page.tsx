import { redirect } from "next/navigation"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { HandymanDashboardClient } from "@/components/handyman/dashboard-client"

export default async function HandymanDashboardPage() {
  const session = await auth()
  const user = session?.user as any
  if (!user || user.role !== "handyman") redirect("/handyman/login")

  const [profile, jobs] = await Promise.all([
    prisma.handyman.findUnique({
      where: { id: user.id },
      select: { id: true, name: true, email: true, phone: true, city: true, postalCode: true, skills: true, bio: true, yearsExperience: true, availability: true, status: true, feePercent: true, createdAt: true },
    }),
    prisma.job.findMany({ where: { handymanId: user.id }, orderBy: { createdAt: "desc" } }),
  ])

  if (!profile) redirect("/handyman/login")
  return <HandymanDashboardClient profile={profile} jobs={jobs} />
}
