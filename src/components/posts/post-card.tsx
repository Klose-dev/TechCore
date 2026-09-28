import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import {
  Code2,
  GitBranch,
  Smartphone,
  Sparkles,
  Package,
  BarChart3,
  Palette,
  Compass,
  type LucideIcon,
} from "lucide-react"
import MagicCard from "@/components/ui/magic-card"
import {
  CARD_HOVER,
  CARD_HOVER_SPRING,
  revealViewport,
  useRevealVariants,
  useStaggerContainer,
  useStaggerItem,
} from "@/components/ui/motion"
import { getDateDay, getDateMonth } from "@/lib/utils"

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  Engineering: Code2,
  Process: GitBranch,
  Mobile: Smartphone,
  AI: Sparkles,
  Product: Package,
  Data: BarChart3,
  Design: Palette,
  "Open Source": Compass,
}

const FALLBACK_ICON = Compass

type Props = {
  post: Post
  index?: number
}

const PostCard = ({ post, index = 0 }: Props) => {
  const featuredMedia = post.featuredmedia
  const featuredImageSizes = featuredMedia?.["media_details"]
  const categories = post?.categories

  const variants = useRevealVariants()
  const textContainer = useStaggerContainer()
  const textItem = useStaggerItem()

  return (
    <MagicCard className="h-full">
      <motion.article
        className="h-full overflow-hidden rounded-lg bg-surface"
        itemType="https://schema.org/Article"
        variants={variants}
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
        custom={index}
        whileHover={{ ...CARD_HOVER, transition: CARD_HOVER_SPRING }}
      >
        <figure className="relative overflow-hidden">
          <Link to="/single-post" className="group block" aria-label={post.title.rendered}>
            {featuredMedia && featuredImageSizes && (
              <img
                src={featuredImageSizes.source_url}
                alt={featuredMedia.alt_text}
                width={featuredImageSizes.width}
                height={featuredImageSizes.height}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
              />
            )}
            {post.modified && (
              <div className="pointer-events-none absolute left-4 top-4 rounded bg-white px-4 py-3 text-center font-medium leading-none text-foreground shadow-sm">
                <span className="block text-md">{getDateDay(post.modified)}</span>
                <span className="text-[0.625rem] uppercase tracking-wider">
                  {getDateMonth(post.modified)}
                </span>
              </div>
            )}
          </Link>
        </figure>

        <motion.div
          className="p-8"
          variants={textContainer}
          initial="hidden"
          whileInView="show"
        >
          {categories && categories.length > 0 && (
            <motion.ul
              variants={textItem}
              className="mb-4 flex flex-wrap items-center gap-2"
            >
              {categories.map((category) => {
                const Icon = CATEGORY_ICONS[category.name] ?? FALLBACK_ICON
                return (
                  <li
                    key={category.id}
                    className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-semibold text-primary"
                  >
                    <Icon width={13} height={13} aria-hidden="true" />
                    {category.name}
                  </li>
                )
              })}
            </motion.ul>
          )}

          <motion.h2
            variants={textItem}
            className="mb-3 text-lg font-bold leading-snug"
          >
            <Link
              className="transition-colors hover:text-primary"
              to="/single-post"
              dangerouslySetInnerHTML={{ __html: post?.title?.rendered }}
            />
          </motion.h2>

          {post?.excerpt?.rendered && (
            <motion.p
              variants={textItem}
              className="line-clamp-3 text-sm leading-relaxed text-secondary"
              dangerouslySetInnerHTML={{ __html: post?.excerpt?.rendered }}
            />
          )}

          <motion.p variants={textItem} className="mt-5">
            <Link
              to="/single-post"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-primary"
            >
              Read article
              <motion.span
                aria-hidden="true"
                className="inline-block"
                variants={{
                  rest: { x: 0 },
                  hover: { x: 4 },
                }}
                transition={{ type: "spring", stiffness: 400, damping: 24 }}
              >
                &rarr;
              </motion.span>
            </Link>
          </motion.p>
        </motion.div>
      </motion.article>
    </MagicCard>
  )
}

export default PostCard
