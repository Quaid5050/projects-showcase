'use client';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { Eye, EyeOff, CheckCircle } from 'lucide-react';
import AdminShell from '@/components/admin/AdminShell';

export default function SettingsPage() {
  const { data: session } = useSession();
  const [showPassword, setShowPassword] = useState(false);
  const [saved] = useState(false);

  const fc = 'w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-teal-500 transition-colors';

  return (
    <AdminShell title="Settings" username={session?.user?.name || 'admin'}>
      <div className="max-w-2xl space-y-6">
        {/* Database connection info */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h3 className="font-semibold text-white text-lg mb-1">MongoDB Connection</h3>
          <p className="text-gray-500 text-sm mb-5">Database: <code className="text-teal-400">yuvaan-international</code></p>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-400 text-xs font-medium uppercase tracking-wider mb-1.5">Compass Connection String</label>
              <div className="flex items-center gap-2">
                <input readOnly value="mongodb://localhost:27017" className={fc} />
              </div>
              <p className="text-gray-600 text-xs mt-1">Use this to connect MongoDB Compass to the local database.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-800 rounded-xl text-center">
                <p className="text-gray-400 text-xs mb-1">Host</p>
                <p className="text-white font-mono text-sm">localhost</p>
              </div>
              <div className="p-4 bg-gray-800 rounded-xl text-center">
                <p className="text-gray-400 text-xs mb-1">Port</p>
                <p className="text-white font-mono text-sm">27017</p>
              </div>
            </div>
            <div className="p-4 bg-teal-500/10 border border-teal-500/20 rounded-xl">
              <p className="text-teal-400 text-sm font-medium mb-2">Collections in yuvaan-international:</p>
              <div className="grid grid-cols-3 gap-2">
                {['admins', 'inquiries', 'sitecontent', 'leadsignups', 'productcategories', 'industries', 'partnershiptypes'].map(c => (
                  <span key={c} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-lg font-mono">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Admin credentials */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h3 className="font-semibold text-white text-lg mb-1">Admin Account</h3>
          <p className="text-gray-500 text-sm mb-5">Your current admin login information</p>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-400 text-xs font-medium uppercase tracking-wider mb-1.5">Username</label>
              <input readOnly value={session?.user?.name || 'admin'} className={fc} />
            </div>
            <div>
              <label className="block text-gray-400 text-xs font-medium uppercase tracking-wider mb-1.5">Email</label>
              <input readOnly value={session?.user?.email || 'admin@yuvaaninterntional.com'} className={fc} />
            </div>
            <div>
              <label className="block text-gray-400 text-xs font-medium uppercase tracking-wider mb-1.5">Default Password (change after first login)</label>
              <div className="relative">
                <input readOnly type={showPassword ? 'text' : 'password'} value="Yuvaan@Admin2024" className={fc} />
                <button onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact info */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h3 className="font-semibold text-white text-lg mb-1">Business Contact</h3>
          <p className="text-gray-500 text-sm mb-5">Edit these in Site Content → Navbar/Footer sections</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-800 rounded-xl">
              <span className="text-gray-400 text-sm">Phone</span>
              <span className="text-white text-sm font-medium">(778) 828-3610</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-800 rounded-xl">
              <span className="text-gray-400 text-sm">Email</span>
              <span className="text-white text-sm font-medium">pacifictrade2010@gmail.com</span>
            </div>
          </div>
        </div>

        {saved && (
          <div className="flex items-center gap-2 p-3 bg-teal-500/10 border border-teal-500/20 rounded-xl">
            <CheckCircle className="w-4 h-4 text-teal-400" />
            <span className="text-teal-400 text-sm">Settings saved successfully</span>
          </div>
        )}
      </div>
    </AdminShell>
  );
}
