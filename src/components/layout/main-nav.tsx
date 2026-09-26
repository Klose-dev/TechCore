import * as React from "react"
import { cn } from "@/lib/utils"
import { useLocation, NavLink, Link } from "react-router-dom"


import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
interface MainNavProps {
  items?: MainNavItem[]
}

export default function MainNav({ items }: MainNavProps) {
  const location = useLocation()
  
  return (
    <>
      <NavigationMenu className="hidden lg:block">
        <NavigationMenuList>
          {items &&
            items.map(item => {
              const isActive = location.pathname === item.href
              return (
                <NavigationMenuItem key={item.title}>
                  {item?.items && item.items.length > 0 ? (
                    <NavigationMenuTrigger className={isActive ? "text-primary" : ""}>{item.title}</NavigationMenuTrigger>
                  ) : (
                    item.href && (
                        <Link
                          to={item.href}
                          className={cn(
                            navigationMenuTriggerStyle(),
                            isActive && "text-primary"
                          )}
                        >
                          {item.title}
                        </Link>
                    )
                  )}
                  {item?.items && item.items.length > 0 ? (
                    <NavigationMenuContent>
                      <ul className="flex w-[220px] flex-col p-4">
                        {item?.items.map(subItem => (
                          <ListItem key={subItem.title} href={subItem.href} title={subItem.title}></ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  ) : null}
                </NavigationMenuItem>
              )
            })}
          <NavigationMenuIndicator />
        </NavigationMenuList>
      </NavigationMenu>
    </>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, href, ...props }, ref) => {

    return (
      <li>
        <NavLink
          to={href || ''}
          ref={ref}
          className={({ isActive }) => cn(
            "block select-none space-y-1 px-3 py-1.5 leading-none no-underline outline-none transition-colors hover:text-primary focus:text-primary text-foreground dark:text-gray-200",
            isActive && "text-primary font-semibold",
          )}
          {...props}
        >
          <div className="text-sm leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground dark:text-gray-400">{children}</p>
        </NavLink>
      </li>
    )
  }
)
ListItem.displayName = "ListItem"
