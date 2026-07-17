import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industries We Serve | YUVAAN INTERNATIONAL',
  description: 'Connecting businesses across manufacturing, industrial machinery, construction, wholesale, agriculture, and more through international trade.',
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
