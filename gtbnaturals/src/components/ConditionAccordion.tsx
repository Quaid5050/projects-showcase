import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useEffect, useId, useState } from 'react'
import type { ConditionCategory } from '../data/conditions'

/** First paint: enough to scan themes without a wall of text; full list one tap away. */
const ITEM_PREVIEW_COUNT = 12

type Props = {
  categories: ConditionCategory[]
  /** When set (e.g. URL hash), opens matching category if it exists in `categories`. */
  anchorId?: string
}

export function ConditionAccordion({ categories, anchorId }: Props) {
  const baseId = useId()
  const [openId, setOpenId] = useState<string | null>(null)
  const [listsExpanded, setListsExpanded] = useState<Record<string, boolean>>({})

  useEffect(() => {
    if (!anchorId) return
    if (!categories.some((c) => c.id === anchorId)) return
    setOpenId(anchorId)
    setListsExpanded((prev) => ({ ...prev, [anchorId]: true }))
  }, [anchorId, categories])

  return (
    <div className="space-y-3">
      {categories.map((cat) => {
        const Icon = cat.icon
        const isOpen = openId === cat.id
        const panelId = `${baseId}-${cat.id}-panel`
        const buttonId = `${baseId}-${cat.id}-button`
        const listExpanded = listsExpanded[cat.id] ?? false
        const total = cat.items.length
        const visibleItems = listExpanded ? cat.items : cat.items.slice(0, ITEM_PREVIEW_COUNT)
        const hiddenCount = Math.max(0, total - ITEM_PREVIEW_COUNT)

        return (
          <motion.div
            key={cat.id}
            id={cat.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="scroll-mt-28 surface-card surface-card-interactive overflow-hidden sm:scroll-mt-32"
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-center gap-3 px-4 py-4 text-left transition hover:bg-peach/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-orange sm:gap-4 sm:px-5"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : cat.id)}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange/88 to-orange/68 text-white shadow-sm ring-1 ring-orange/45 sm:h-11 sm:w-11">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-serif text-base font-semibold text-cream sm:text-lg">{cat.title}</span>
                  <span className="mt-0.5 block text-xs text-muted">
                    {total} {total === 1 ? 'theme' : 'themes'}
                  </span>
                </span>
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
                  className="border-t border-[hsl(36_20%_88%_/0.55)]"
                >
                  <div className="px-4 pb-5 pt-3 sm:px-5">
                    {cat.description ? (
                      <p className="mb-4 text-sm leading-relaxed text-coral/90">{cat.description}</p>
                    ) : null}
                    <ul
                      className="grid list-none gap-x-6 gap-y-2.5 sm:grid-cols-2"
                      aria-label={`${cat.title} wellness themes`}
                    >
                      {visibleItems.map((item) => (
                        <li
                          key={item}
                          className="relative pl-4 text-sm leading-snug text-cream/90 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-orange/60"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    {hiddenCount > 0 && !listExpanded ? (
                      <div className="mt-4 border-t border-[hsl(36_20%_88%_/0.45)] pt-4">
                        <button
                          type="button"
                          className="text-sm font-semibold text-orange transition hover:text-amber focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
                          onClick={() => setListsExpanded((s) => ({ ...s, [cat.id]: true }))}
                        >
                          Show {hiddenCount} more theme{hiddenCount === 1 ? '' : 's'}
                        </button>
                      </div>
                    ) : null}
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
