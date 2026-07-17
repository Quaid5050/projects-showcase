import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partnership Opportunities | YUVAAN INTERNATIONAL',
  description: 'YUVAAN INTERNATIONAL works with importers, exporters, manufacturers, suppliers, distributors, and project partners seeking global trade opportunities.',
};

export default function PartnershipLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
