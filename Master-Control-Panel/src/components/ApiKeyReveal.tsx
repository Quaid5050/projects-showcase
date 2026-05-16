'use client';

import { useState } from 'react';
import Button from './Button';
import { useToast } from './Toast';

export default function ApiKeyReveal({
  apiKey,
  restaurantName,
}: {
  apiKey: string;
  restaurantName?: string;
}) {
  const [copied, setCopied] = useState(false);
  const toast = useToast();

  async function copy() {
    try {
      await navigator.clipboard.writeText(apiKey);
      setCopied(true);
      toast.success('Copied to clipboard');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('Could not copy', 'Please copy the key manually.');
    }
  }

  return (
    <div className="rounded-xl border-2 border-amber-300 bg-amber-50 p-5">
      <div className="flex items-start gap-3">
        <div
          aria-hidden
          className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber-400 text-white text-sm font-bold"
        >
          !
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-semibold text-amber-900">
            Copy this integration API key now
          </h3>
          <p className="mt-1 text-sm text-amber-800">
            This is the only time the full key will be shown.
            {restaurantName ? ` Use it to connect ${restaurantName}'s ` : ' Use it to connect the '}
            website / point-of-sale to the integration endpoint. The server only stores a hash,
            so it cannot be retrieved later. If you lose it, you'll have to rotate the key.
          </p>

          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-stretch">
            <code className="flex-1 select-all break-all rounded-lg border border-amber-300 bg-white px-3 py-2 font-mono text-sm text-slate-800">
              {apiKey}
            </code>
            <Button
              type="button"
              variant="primary"
              onClick={copy}
              className="sm:w-32"
            >
              {copied ? 'Copied' : 'Copy'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
