import { ModeToggle } from "./ModeToggler";
import { Link } from "react-router";
import { role } from "@/constants/role";


const navigationLinks = [
  { href: "/", label: "Home", role: "PUBLIC" },
  { href: "/about", label: "About", role: "PUBLIC" },
  { href: "/admin", label: "Dashboard", role: role.admin },
  { href: "/admin", label: "Dashboard", role: role.superAdmin },
  { href: "/user", label: "Dashboard", role: role.user },
];

export default function Navbar() {

  return (
    <header className="">

      {link.role === "PUBLIC" && (<Link to={link.href}>{link.label}</Link>)}         // Public routes
      {link.role === data?.data?.role && (<Link to={link.href}>{link.label}</Link>)} // Protected routes

      <ModeToggle /> // Dark Mode

    </header>
  );
}
