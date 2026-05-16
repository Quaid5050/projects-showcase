import { prisma } from '@/lib/prisma'
import { requireAdmin } from '@/lib/auth-helpers'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Plus, Edit, Mail, Shield } from 'lucide-react'
import DeleteButton from '@/components/admin/DeleteButton'

export default async function UsersPage() {
  await requireAdmin()
  const users = await prisma.user.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Users</h1>
          <p className="text-gray-600 mt-1">Manage admin users and permissions</p>
        </div>
        <Link href="/admin/users/new">
          <Button className="bg-gold hover:bg-gold-light text-navy-dark">
            <Plus className="h-4 w-4 mr-2" />
            Add User
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <Card key={user.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={user.image || undefined} />
                  <AvatarFallback className="bg-navy-dark text-gold">
                    {user.name?.charAt(0) || user.email.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-lg">{user.name || 'No Name'}</CardTitle>
                  <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                    <Mail className="h-3 w-3" />
                    <span className="truncate">{user.email}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-4 w-4 text-gray-500" />
                <Badge variant={user.role === 'ADMIN' || user.role === 'admin' ? 'default' : 'secondary'}>
                  {user.role === 'admin' ? 'ADMIN' : user.role}
                </Badge>
              </div>

              <div className="text-xs text-gray-500 mb-4">
                Created: {new Date(user.createdAt).toLocaleDateString()}
              </div>

              <div className="flex gap-2">
                <Link href={`/admin/users/${user.id}`} className="flex-1">
                  <Button variant="outline" size="sm" className="w-full">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                </Link>
                <DeleteButton 
                  id={user.id} 
                  name={user.email}
                  endpoint="users"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {users.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <p className="text-gray-500 mb-4">No users yet</p>
            <Link href="/admin/users/new">
              <Button className="bg-gold hover:bg-gold-light text-navy-dark">
                <Plus className="h-4 w-4 mr-2" />
                Add First User
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
