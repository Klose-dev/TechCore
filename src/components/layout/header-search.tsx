import { useEffect, useMemo, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Search, X, CornerDownLeft, FileText, Compass } from "lucide-react"

import { cn } from "@/lib/utils"
import { footerNav, mainNav } from "@/config/site"

type Entry = { title: string; href: string; group: string }

const STATIC_ENTRIES: Entry[] = [
  { title: "Start a Project", href: "/contact", group: "Action" },
  { title: "Explore Work", href: "/projects", group: "Action" },
  { title: "Our Developers", href: "/developers", group: "Page" },
]

const NAV_ENTRIES: Entry[] = mainNav.flatMap((item) => {
  const entries: Entry[] = []
  if (item.href) entries.push({ title: item.title, href: item.href, group: "Page" })
  for (const sub of item.items ?? []) {
    if (sub.href) entries.push({ title: sub.title, href: sub.href, group: "Page" })
  }
  return entries
})

const ALL_ENTRIES: Entry[] = [
  ...NAV_ENTRIES,
  ...footerNav.flatMap((section) =>
    section.items.map((link) => ({
      title: link.title,
      href: link.href,
      group: section.title,
    })),
  ),
  ...STATIC_ENTRIES,
]

export const HeaderSearch = ({ className }: { className?: string }) => {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [active, setActive] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return ALL_ENTRIES
    return ALL_ENTRIES.filter(
      (entry) =>
        entry.title.toLowerCase().includes(q) ||
        entry.group.toLowerCase().includes(q),
    )
  }, [query])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setOpen((prev) => !prev)
      }
      if (event.key === "/" && !open) {
        const target = event.target as HTMLElement
        if (["INPUT", "TEXTAREA"].includes(target.tagName)) return
        event.preventDefault()
        setOpen(true)
      }
      if (event.key === "Escape") setOpen(false)
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open])

  useEffect(() => {
    if (open) {
      setQuery("")
      setActive(0)
      window.setTimeout(() => inputRef.current?.focus(), 30)
    }
  }, [open])

  useEffect(() => setActive(0), [query])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const go = (href: string) => {
    setOpen(false)
    navigate(href)
  }

  const onInputKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowDown") {
      event.preventDefault()
      setActive((i) => (results.length ? (i + 1) % results.length : 0))
    }
    if (event.key === "ArrowUp") {
      event.preventDefault()
      setActive((i) => (results.length ? (i - 1 + results.length) % results.length : 0))
    }
    if (event.key === "Enter" && results[active]) {
      event.preventDefault()
      go(results[active].href)
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Search the site"
        className={cn(
          "group hidden h-10 items-center gap-2 rounded-full border border-border bg-surface px-2.5 text-sm text-secondary transition-colors hover:border-primary hover:text-primary lg:flex xl:gap-2 xl:px-4",
          className,
        )}
      >
        <Search width={15} height={15} className="shrink-0" />
        <span className="hidden pr-6 xl:inline">Search...</span>
        <kbd className="hidden rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-bold text-secondary xl:inline dark:bg-slate-700">
          ⌘K
        </kbd>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-start justify-center px-4 pt-[12vh]"
          role="dialog"
          aria-modal="true"
          aria-label="Site search"
        >
          <button
            type="button"
            aria-label="Close search"
            onClick={() => setOpen(false)}
            className="absolute inset-0 cursor-default bg-slate-900/50 backdrop-blur-sm"
          />

          <div className="relative w-full max-w-xl overflow-hidden rounded-lg border border-border bg-surface shadow-2xl">
            <div className="flex items-center gap-3 border-b border-border px-4">
              <Search width={18} height={18} className="shrink-0 text-secondary" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onInputKeyDown}
                placeholder="Search pages, projects, and contact..."
                className="h-14 w-full bg-transparent text-base text-foreground outline-none placeholder:text-secondary"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="shrink-0 rounded p-1 text-secondary transition-colors hover:text-foreground"
              >
                <X width={18} height={18} />
              </button>
            </div>

            <div className="max-h-[46vh] overflow-y-auto p-2">
              {results.length === 0 ? (
                <p className="px-4 py-8 text-center text-sm text-secondary">
                  No results for "{query}"
                </p>
              ) : (
                results.map((entry, index) => (
                  <button
                    key={`${entry.group}-${entry.title}-${entry.href}`}
                    type="button"
                    onMouseEnter={() => setActive(index)}
                    onClick={() => go(entry.href)}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left transition-colors",
                      index === active
                        ? "bg-accent-soft"
                        : "hover:bg-muted dark:hover:bg-slate-800",
                    )}
                  >
                    {entry.group === "Action" ? (
                      <Compass width={16} height={16} className="shrink-0 text-primary" />
                    ) : (
                      <FileText width={16} height={16} className="shrink-0 text-secondary" />
                    )}
                    <span className="flex-1 truncate text-sm font-semibold text-foreground">
                      {entry.title}
                    </span>
                    <span className="shrink-0 text-xs uppercase tracking-[0.08em] text-secondary">
                      {entry.group}
                    </span>
                  </button>
                ))
              )}
            </div>

            <div className="flex items-center gap-4 border-t border-border px-4 py-2.5 text-[11px] text-secondary">
              <span className="flex items-center gap-1">
                <kbd className="rounded border border-border bg-muted px-1 py-0.5 dark:bg-slate-800">↑↓</kbd>
                navigate
              </span>
              <span className="flex items-center gap-1">
                <kbd className="rounded border border-border bg-muted px-1 py-0.5 dark:bg-slate-800">
                  <CornerDownLeft width={10} height={10} />
                </kbd>
                open
              </span>
              <span className="flex items-center gap-1">
                <kbd className="rounded border border-border bg-muted px-1 py-0.5 dark:bg-slate-800">esc</kbd>
                close
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
