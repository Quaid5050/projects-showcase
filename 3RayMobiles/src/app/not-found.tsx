import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-radial-glow opacity-50" />
        <p className="relative text-8xl font-black gradient-text">404</p>
      </div>
      <h1 className="text-3xl font-bold mb-3">Page not found</h1>
      <p className="text-muted-foreground mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-gradient-primary border-0 hover:opacity-90 glow-blue h-11 px-6 text-sm font-semibold text-primary-foreground transition-opacity"
        >
          Go home
        </Link>
        <Link
          href="/products"
          className="inline-flex items-center justify-center rounded-md border border-border/60 bg-background hover:bg-surface h-11 px-6 text-sm font-semibold transition-colors"
        >
          Browse products
        </Link>
      </div>
    </div>
  );
}
