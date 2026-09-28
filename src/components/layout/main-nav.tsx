import { useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLocation, Link } from "react-router-dom"

const CLOSE_DELAY = 140
const EASE = [0.22, 1, 0.36, 1] as const

interface MainNavProps {
  items?: MainNavItem[]
}

export default function MainNav({ items }: MainNavProps) {
  const location = useLocation()
  const [openTitle, setOpenTitle] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = undefined
    }
  }

  const handleEnter = (title: string) => {
    cancelClose()
    setOpenTitle(title)
  }

  const handleLeave = () => {
    cancelClose()
    closeTimer.current = setTimeout(() => setOpenTitle(null), CLOSE_DELAY)
  }

  return (
    <>
      <nav className="hidden lg:block" aria-label="Main">
        <ul className="flex items-center gap-0.5">
          {items?.map((item) => {
            const children = item.items ?? []
            const hasChildren = children.length > 0
            const isActive = location.pathname === item.href
            const isOpen = openTitle === item.title

            return (
              <li
                key={item.title}
                className="relative"
                onPointerEnter={() => handleEnter(item.title)}
                onPointerLeave={handleLeave}
                onFocus={() => handleEnter(item.title)}
                onBlur={handleLeave}
              >
                <Link
                  to={item.href ?? "/"}
                  aria-haspopup={hasChildren}
                  aria-expanded={hasChildren ? isOpen : undefined}
                  className={cn(
                    "relative inline-flex h-10 items-center gap-1 rounded-md px-3 text-sm font-bold text-foreground transition-colors hover:text-primary focus:text-primary focus:outline-none dark:text-white",
                    isActive && "text-primary",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="main-nav-active"
                      className="absolute inset-0 rounded-md bg-primary/10 dark:bg-primary/20"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{item.title}</span>
                  {hasChildren && (
                    <ChevronDown
                      width={14}
                      height={14}
                      className={cn(
                        "relative transition-transform duration-200",
                        isOpen && "rotate-180",
                      )}
                    />
                  )}
                </Link>

                <AnimatePresence>
                  {hasChildren && isOpen && (
                    <motion.div
                      key={`${item.title}-dropdown`}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.16, ease: EASE }}
                      className="absolute left-0 top-full z-50 pt-2"
                    >
                      <ul className="min-w-[230px] rounded-lg border border-border bg-surface p-2 shadow-lg shadow-slate-500/20 dark:bg-slate-900">
                        {children.map((sub) => {
                          const isSubActive =
                            `${location.pathname}${location.hash}` === sub.href
                          return (
                            <li key={sub.title}>
                              <Link
                                to={sub.href ?? "/"}
                                onClick={() => setOpenTitle(null)}
                                className={cn(
                                  "block rounded-md px-3 py-2 text-sm text-foreground transition-colors hover:bg-muted hover:text-primary dark:text-gray-200",
                                  isSubActive && "font-semibold text-primary",
                                )}
                              >
                                {sub.title}
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}
