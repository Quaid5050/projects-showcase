'use client';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

interface Props { children: React.ReactNode; title: string; subtitle?: string; }

export default function DashboardShell({ children, title, subtitle }: Props) {
  return (
    <div className="flex h-screen" style={{ background: '#0d0d12' }}>
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 ml-60">
        <Topbar title={title} subtitle={subtitle} />
        <main className="flex-1 overflow-y-auto p-6" style={{ background: '#0d0d12' }}>
          {children}
        </main>
      </div>
    </div>
  );
}
