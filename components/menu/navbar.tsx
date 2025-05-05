// Bibliotecas
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import {
  Logo,
  WhatsappIcon,
  FacebookIcon,
  InstagramIcon,
} from "@/components/icons";

export const Navbar = () => {

  return (
    <HeroUINavbar className="py-2 px-8 z-50 bg-blue-950" maxWidth="2xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
        <ul className="hidden lg:flex gap-4  justify-start ">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary text-white data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
            <WhatsappIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
            <FacebookIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <InstagramIcon className="text-default-500" />
          </Link>
        </NavbarItem>

      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle className="text-white" />
      </NavbarContent>

      <NavbarMenu className="bg-blue-950 p-4 rounded-b-lg shadow-lg">
        <div className="mx-4 mt-2 h-screen flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="text-white"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-blue-800 flex items-center justify-around">
          <Link isExternal href={siteConfig.links.github} aria-label="WhatsApp">
            <WhatsappIcon className="hover:text-emerald-400 transition-colors" />
          </Link>
          <Link isExternal href={siteConfig.links.github} aria-label="Facebook">
            <FacebookIcon className="hover:text-emerald-400 transition-colors" />
          </Link>
          <Link isExternal href={siteConfig.links.github} aria-label="Instagram">
            <InstagramIcon className="hover:text-emerald-400 transition-colors" />
          </Link>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
