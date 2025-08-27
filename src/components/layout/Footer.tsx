import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Container from "../Container";
import { Link } from "react-router";
import Logo from "@/assets/icons/Logo";

export default function Footer() {
  const socialLinks = [
    { icon: <FaInstagram className="size-5" />, href: "#", label: "Instagram" },
    { icon: <FaFacebook className="size-5" />, href: "#", label: "Facebook" },
    { icon: <FaTwitter className="size-5" />, href: "#", label: "Twitter" },
    { icon: <FaLinkedin className="size-5" />, href: "#", label: "LinkedIn" },
  ];

  const sections = [
    {
      title: "Product",
      links: [
        { name: "Overview", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Marketplace", href: "#" },
        { name: "Features", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Team", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Careers", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Help", href: "#" },
        { name: "Sales", href: "#" },
        { name: "Advertise", href: "#" },
        { name: "Privacy", href: "#" },
      ],
    },
  ];

  const legalLinks = [
    { name: "Terms and Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ];

  return (
    <footer className="bg-secondary dark:bg-primary border-t">
      <Container>
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left text-white my-16">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-2 lg:justify-start">
              <>
                <Link to={"/"} className="flex-center flex-col justify-center text-2xl text-white gap-2 font-semibold py-2">
                  <Logo size={20} />
                  MoveXa
                </Link>
              </>
            </div>
            <p className="text-white max-w-[70%] text-sm">
              description
            </p>
            <ul className="text-white flex items-center space-x-6">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="text-white hover:text-primary font-medium">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="text-white space-y-3 text-sm">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-primary font-medium"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <div className="text-white flex flex-col justify-between gap-4 border-t py-5 text-xs font-medium md:flex-row md:items-center md:text-left">
        <Container>
        <p className="order-2 lg:order-1">copyright</p>
        <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
          {legalLinks.map((link, idx) => (
            <li key={idx} className="hover:text-primary">
              <a href={link.href}> {link.name}</a>
            </li>
          ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}
