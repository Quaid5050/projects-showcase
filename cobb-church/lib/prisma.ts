import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

function getPrismaClient(): PrismaClient {
  const existing = globalForPrisma.prisma
  // In dev, a cached singleton may be from before `prisma generate` added new models (e.g. CrisisAlert).
  if (
    existing &&
    (typeof (existing as unknown as { crisisAlert?: { findMany?: unknown } }).crisisAlert?.findMany !== 'function' ||
      typeof (existing as unknown as { resourceResponse?: { findMany?: unknown } }).resourceResponse?.findMany !==
        'function')
  ) {
    existing.$disconnect().catch(() => {})
    globalForPrisma.prisma = undefined
  }
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient()
  }
  return globalForPrisma.prisma
}

export const prisma = getPrismaClient()
