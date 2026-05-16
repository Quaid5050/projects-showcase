import { prisma } from '@/lib/prisma'

export function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80) || 'church'
}

export async function uniqueChurchSlug(baseName: string, excludeChurchId?: string) {
  const base = slugify(baseName)
  let slug = base
  let n = 0
  for (;;) {
    const existing = await prisma.church.findUnique({ where: { slug } })
    if (!existing || existing.id === excludeChurchId) return slug
    n += 1
    slug = `${base}-${n}`
  }
}
