import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products & Trade Categories | YUVAAN INTERNATIONAL',
  description: 'Explore industrial machinery, manufacturing supplies, wholesale products, and custom sourcing categories through YUVAAN INTERNATIONAL.',
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
