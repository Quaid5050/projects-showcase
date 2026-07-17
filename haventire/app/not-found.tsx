import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1a1a1a] relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#e01e25]" />
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#e01e25]" />
      <div className="text-center px-4 relative z-10">
        <div className="text-[8rem] md:text-[10rem] font-black text-[#e01e25] leading-none mb-4 opacity-20">
          404
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-4 -mt-8">Page Not Found</h1>
        <div className="w-14 h-1 bg-[#e01e25] mx-auto mb-6" />
        <p className="text-gray-400 text-lg mb-10 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on the road.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-red inline-flex items-center gap-2 justify-center">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <Link href="/services" className="btn-outline-red inline-block text-center">
            View Services
          </Link>
        </div>
      </div>
    </div>
  );
}
