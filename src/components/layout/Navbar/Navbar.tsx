import Logo from "@/components/layout/Navbar/logo"
import UserMenu from "@/components/layout/Navbar/user-menu"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ModeToggle } from "../ModeToggler"
import { NavLink } from "react-router"
import { useGetUserQuery } from "@/redux/features/auth/authApi"
import { AlignJustify } from "lucide-react"

// Navigation links array to be used in both desktop and mobile menus
// const navigationLinks = [
//   { href: "/", label: "Home", role: "PUBLIC" },
//   { href: "/about", label: "About", role: "PUBLIC" },
//   { href: "/admin", label: "Dashboard", role: role.admin },
//   { href: "/admin", label: "Dashboard", role: role.superAdmin },
//   { href: "/user", label: "Dashboard", role: role.user },
// ];

const navigationLinks = [
  { href: "#", label: "Home" },
  { href: "#", label: "Features" },
  { href: "#", label: "Pricing" },
]

export default function Component() {
  const { data: userData, isLoading } = useGetUserQuery(undefined);

  return (
    <header className="border-b px-4 bg-primary md:px-6">
      <div className="flex h-16 items-center justify-between gap-4">

        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>

              <AlignJustify size={22} className="text-card md:hidden" />
            </PopoverTrigger>
            <PopoverContent align="start" className="w-36 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index} className="w-full">
                      <NavigationMenuLink href={link.href} className="py-1.5">
                        {link.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
          {/* Logo */}
          <a href="#">
            <Logo />
          </a>
        </div>

        {/* Center: Main nav */}
        <div>
          <NavigationMenu className="max-md:hidden">
            <NavigationMenuList className="gap-2">
              {navigationLinks.map((link, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    href={link.href}
                    className="text-card hover:text-primary py-1.5 font-medium"
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {isLoading ? ("Loading..") :
            (!userData?.email ?
              <NavLink to={'/login'}><Button className="cursor-pointer">Login</Button></NavLink> :
              // User menu
              < UserMenu user={userData} />)
          }
          {/* Mode Toggler */}
          <ModeToggle />

        </div>

      </div>
    </header>
  )
}
