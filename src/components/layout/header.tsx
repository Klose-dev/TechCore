import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import SiteLogo from "./site-logo";
import MainNav from "./main-nav"
import { DarkModeSwitch } from "../dark-mode-switch"
import { HeaderSearch } from "./header-search"
import { mainNav } from "../../config/site"
import { cn } from "../../lib/utils"
import { MobileNav } from "./mobile-nav"

const Header = () => {
  const [stickyClass, setStickyClass] = useState("")

  useEffect(() => {
    window.addEventListener("scroll", stickyHeader)

    return () => {
      window.removeEventListener("scroll", stickyHeader)
    }
  }, [])

  const stickyHeader = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY
      windowHeight > 10 ? setStickyClass("bg-white dark:bg-slate-900 lg:py-3 py-3") : setStickyClass("")
    }
  }

  return (
    <>
      <header className="fixed top-0 z-20 w-full">
        <div className={cn("flex items-center px-4 py-5 transition-all lg:py-12 xl:px-20 text-foreground dark:text-white", stickyClass)}>
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
            <DarkModeSwitch />
            <HeaderSearch className="lg:ml-3" />
            <MobileNav mainNavItems={mainNav} />

            <div className="hidden lg:ml-auto lg:inline-block">
              <Link
                to="/contact"
                className="inline-block rounded-lg bg-primary px-5 py-3 text-center font-bold text-white transition-colors hover:bg-primary/90"
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
