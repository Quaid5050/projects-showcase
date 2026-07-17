import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Agency AI Operations & Client Communication Panel',
  description: 'AI-powered agency management panel for clients, projects, tasks, and client communication',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full antialiased bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
