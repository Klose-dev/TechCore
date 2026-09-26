import { cn } from "@/lib/utils"

interface MarqueeProps {
  items: { src: string; alt: string }[]
  direction?: "left" | "right"
  className?: string
  itemClassName?: string
}

export function Marquee({ items, direction = "left", className, itemClassName }: MarqueeProps) {
  const keyframes = direction === "left"
    ? `@keyframes scroll-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }`
    : `@keyframes scroll-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }`

  const animationName = direction === "left" ? "scroll-left" : "scroll-right"

  return (
    <>
      <style>{keyframes}</style>
      <div className={cn("relative overflow-hidden", className)}>
        <div
          className="flex gap-4"
          style={{ animation: `${animationName} 32s linear infinite`, width: "max-content" }}
        >
          {items.map((item, i) => (
            <div
              key={`first-${i}`}
              className={cn(
                "flex h-20 w-28 shrink-0 items-center justify-center rounded-xl border border-border bg-white p-5 shadow-sm dark:bg-slate-800",
                itemClassName
              )}
            >
              <img src={item.src} alt={item.alt} className="h-12 w-12 object-contain" />
            </div>
          ))}
          {items.map((item, i) => (
            <div
              key={`second-${i}`}
              className={cn(
                "flex h-20 w-28 shrink-0 items-center justify-center rounded-xl border border-border bg-white p-5 shadow-sm dark:bg-slate-800",
                itemClassName
              )}
            >
              <img src={item.src} alt={item.alt} className="h-12 w-12 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
