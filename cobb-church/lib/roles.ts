export type AppRole = 'ADMIN' | 'CHURCH_USER'

export function normalizeRole(role: string | undefined | null): AppRole | null {
  if (!role) return null
  if (role === 'admin' || role === 'ADMIN') return 'ADMIN'
  if (role === 'CHURCH_USER' || role === 'church_user') return 'CHURCH_USER'
  return null
}

export function isAdminRole(role: string | undefined | null) {
  return normalizeRole(role) === 'ADMIN'
}

export function isChurchUserRole(role: string | undefined | null) {
  const r = normalizeRole(role)
  return r === 'CHURCH_USER' || r === 'ADMIN'
}
