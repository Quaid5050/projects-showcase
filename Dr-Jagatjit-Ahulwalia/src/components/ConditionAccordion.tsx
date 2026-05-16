import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useId, useState } from 'react'
import type { ConditionCategory } from '../data/conditions'

export function ConditionAccordion({ categories }: { categories: ConditionCategory[] }) {
  const baseId = useId()
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <div className="space-y-3">
      {categories.map((cat) => {
        const Icon = cat.icon
        const isOpen = openId === cat.id
        const panelId = `${baseId}-${cat.id}-panel`
        const buttonId = `${baseId}-${cat.id}-button`

        return (
          <motion.div
            key={cat.id}
            id={cat.id}
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="scroll-mt-32 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] shadow-glass backdrop-blur-md transition hover:border-primary/25"
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-center gap-4 px-5 py-4 text-left transition hover:bg-white/[0.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : cat.id)}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/25">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <span className="flex-1 font-serif text-lg font-semibold text-cream">{cat.title}</span>
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
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                  className="border-t border-white/10"
                >
                  <div className="px-5 pb-5 pt-3">
                    {cat.description ? (
                      <p className="mb-4 text-sm leading-relaxed text-coral/90">{cat.description}</p>
                    ) : null}
                    <ul className="flex flex-wrap gap-2" aria-label={`${cat.title} wellness themes`}>
                      {cat.items.map((item) => (
                        <li key={item}>
                          <span className="inline-block rounded-full border border-white/10 bg-base-950/70 px-3 py-1.5 text-xs font-medium text-muted">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </div>
  )
}
