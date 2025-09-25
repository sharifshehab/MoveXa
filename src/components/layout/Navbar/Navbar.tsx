import UserMenu from "@/components/layout/Navbar/user-menu"
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
import { Link, NavLink } from "react-router"
import { useGetUserQuery } from "@/redux/features/auth/authApi"
import { AlignJustify } from "lucide-react"
import Logo from "@/assets/icons/Logo"
import Container from "@/components/Container"
import { Skeleton } from "@/components/ui/skeleton"


// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { href: "/", label: "Home", role: "PUBLIC" },
  { href: "/about", label: "About", role: "PUBLIC" },
  { href: "/track-parcel", label: "Track Parcel", role: "PUBLIC" },
  { href: "/contact", label: "Contact", role: "PUBLIC" },
];

export default function Component() {
  const { data: userData, isLoading } = useGetUserQuery(undefined);

  return (
    <header className="border-b px-4 bg-primary md:px-6">
      <Container>
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
            <>
              <Link to={"/"} className="flex-center justify-center text-2xl text-white gap-2 font-semibold">
                <Logo size={10} />
                MoveXa
              </Link>
            </>
          </div>

          {/* Center: Main nav */}
          <div>
            <NavigationMenu className="max-md:hidden">
              <NavigationMenuList className="gap-2">
                {navigationLinks.map((link, index) => (

                  <NavigationMenuItem key={index}>

                    <NavigationMenuLink className="hover:bg-transparent rounded-none">
                      <NavLink to={link.href} className={({ isActive }) => isActive ? 'active-menu' : 'hover:opacity-80 text-card'}>{link.label} </NavLink>
                    </NavigationMenuLink>

                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {isLoading ? (<Skeleton className="h-9 w-9 rounded-full mx-auto bg-gray-200"></Skeleton>) :
              (!userData?.email ?
                <NavLink to={'/login'} className="cursor-pointer text-card">Login</NavLink> :
                // User menu
                < UserMenu user={userData} />)
            }
            {/* Mode Toggler */}
            <ModeToggle />

          </div>

        </div>
      </Container>
    </header>
  )
}
