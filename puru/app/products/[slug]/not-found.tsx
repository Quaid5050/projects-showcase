import Link from 'next/link';

export default function ProductNotFound() {
  return (
    <div className="min-h-screen bg-surface-soft flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="font-sora font-bold text-3xl sm:text-4xl text-ink mb-4">Product Not Found</h1>
        <p className="text-steel-grey text-base mb-8">
          The product category you requested is not available. Browse the catalog or contact our team.
        </p>
        <Link href="/products" className="btn-primary">
          Back to Products
        </Link>
      </div>
    </div>
  );
}
