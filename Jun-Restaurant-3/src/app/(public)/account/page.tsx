import { redirect } from 'next/navigation'

// Account page removed — redirect to home
export default function AccountPage() {
  redirect('/')
}
