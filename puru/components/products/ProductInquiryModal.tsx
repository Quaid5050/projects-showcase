'use client';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import InquiryForm from '@/components/forms/InquiryForm';

interface ProductInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productTitle: string;
}

export default function ProductInquiryModal({ isOpen, onClose, productTitle }: ProductInquiryModalProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) {
      document.addEventListener('keydown', handler);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm"
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-50 flex items-end justify-center p-0 pb-[env(safe-area-inset-bottom)] sm:items-center sm:p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={onClose}
          >
            <div
              className="relative max-h-[calc(100dvh-0.75rem)] w-full max-w-2xl overflow-y-auto overscroll-contain rounded-t-3xl border border-surface-border bg-white pb-[env(safe-area-inset-bottom)] shadow-card sm:max-h-[90dvh] sm:rounded-3xl sm:pb-0"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 z-10 flex items-start justify-between gap-3 border-b border-surface-border bg-white/95 p-4 backdrop-blur sm:p-6">
                <div className="min-w-0">
                  <span className="text-xs font-inter text-accent tracking-widest uppercase font-semibold">Product Inquiry</span>
                  <h2 id="modal-title" className="font-sora font-bold text-lg sm:text-xl text-ink mt-1 pr-2">
                    {productTitle || 'Submit Trade Inquiry'}
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-surface-border bg-surface-soft text-steel-grey transition-all hover:bg-surface-muted hover:text-ink"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-4 sm:p-6">
                <InquiryForm
                  source="product-modal"
                  prefilledProduct={productTitle}
                  onSuccess={onClose}
                  compact
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
