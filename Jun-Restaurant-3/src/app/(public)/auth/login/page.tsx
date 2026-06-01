import { redirect } from 'next/navigation'

// The public login page was removed. Admin login lives at /admin-login.
export default function LoginPage() {
  redirect('/admin-login')
}
