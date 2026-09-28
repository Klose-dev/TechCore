import { useState } from "react"
import { Link } from "react-router-dom"
import { useScroll, useMotionValueEvent } from "framer-motion"
import SiteLogo from "./site-logo";
import MainNav from "./main-nav"
import { DarkModeSwitch } from "../dark-mode-switch"
import { HeaderSearch } from "./header-search"
import { mainNav } from "../../config/site"
import { cn } from "../../lib/utils"
import { MobileNav } from "./mobile-nav"

const STICKY_THRESHOLD = 10

const Header = () => {
  const [stuck, setStuck] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setStuck(latest > STICKY_THRESHOLD)
  })

  return (
    <>
      <header className="fixed top-0 z-20 w-full">
        <div
          className={cn(
            "flex items-center px-4 py-5 text-foreground transition-[background-color,box-shadow,padding] duration-300 ease-out lg:py-12 xl:px-20 dark:text-white",
            stuck && "bg-white py-3 shadow-sm dark:bg-slate-900 lg:py-3",
          )}
        >
          <Link to="/" className="mr-12 shrink-0">
            <SiteLogo
              width={123}
              height={39}
              lightClasses="w-4/5 dark:hidden lg:w-auto"
              darkClasses="hidden w-4/5 dark:block lg:w-auto"
            />
          </Link>

          <div className="relative flex w-full items-center justify-end lg:justify-start lg:bg-transparent">
            <MainNav items={mainNav} />
            <DarkModeSwitch className="lg:ml-auto" />
            <HeaderSearch className="lg:ml-3" />
            <MobileNav mainNavItems={mainNav} />

            <div className="hidden min-[1400px]:ml-3 min-[1400px]:inline-block">
              <Link
                to="/contact"
                className="inline-block whitespace-nowrap rounded-lg bg-primary px-5 py-3 text-center font-bold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
