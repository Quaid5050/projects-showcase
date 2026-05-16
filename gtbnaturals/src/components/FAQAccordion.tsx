import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useId, useState } from 'react'

export type FaqEntry = { id: string; question: string; answer: string }

export function FAQAccordion({ items }: { items: FaqEntry[] }) {
  const base = useId()
  const [open, setOpen] = useState<string | null>(null)

  function toggle(id: string) {
    setOpen((prev) => (prev === id ? null : id))
  }

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = open === item.id
        const panelId = `${base}-${item.id}-panel`
        const btnId = `${base}-${item.id}-btn`
        return (
          <div
            key={item.id}
            className="surface-card surface-card-interactive overflow-hidden"
          >
            <h3>
              <button
                id={btnId}
                type="button"
                className="flex w-full items-center gap-4 px-5 py-4 text-left text-cream transition hover:bg-[hsl(36_33%_97%)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
              >
                <span className="flex-1 font-medium">{item.question}</span>
                <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.28 }}>
                  <ChevronDown className="h-5 w-5 shrink-0 text-muted" aria-hidden />
                </motion.span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="border-t border-[hsl(36_20%_88%_/0.55)]"
                >
                  <div className="px-5 py-4 text-sm leading-relaxed text-muted">{item.answer}</div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
