export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "TechCore Studio",
  description:
    "TechCore Studio is a small team in Cameroon that designs and builds web apps, desktop apps, mobile apps, AI tools, and data systems.",
};

export const mainNav = [
  {
    title: "Home",
    href: "/",
    items: [],
  },
  {
    title: "About",
    href: "/about",
    items: [],
  },
  {
    title: "Services",
    href: "/services",
    items: [],
  },
  {
    title: "Projects",
    href: "/projects",
    items: [],
  },
  {
    title: "Developers",
    href: "/developers",
    items: [],
  },
  {
    title: "Contact",
    href: "/contact",
    items: [],
  },
] satisfies MainNavItem[];

export const footerNav = [
  {
    title: "Navigation",
    items: [
      {
        title: "Home",
        href: "/",
        external: false,
      },
      {
        title: "About",
        href: "/about",
        external: false,
      },
      {
        title: "Services",
        href: "/services",
        external: false,
      },
      {
        title: "Projects",
        href: "/projects",
        external: false,
      },
      {
        title: "Developers",
        href: "/developers",
        external: false,
      },
    ],
  },
  {
    title: "Community",
    items: [
      {
        title: "Contact",
        href: "/contact",
        external: false,
      },
      {
        title: "GitHub",
        href: "#",
        external: false,
      },
      {
        title: "LinkedIn",
        href: "#",
        external: false,
      },
      {
        title: "WhatsApp",
        href: "#",
        external: false,
      },
    ],
  },
] satisfies FooterItem[];

export const footerNav2 = [
  {
    title: "Community",
    items: [
      {
        title: "GitHub",
        href: "#",
        external: false,
      },
      {
        title: "WhatsApp",
        href: "#",
        external: false,
      },
      {
        title: "LinkedIn",
        href: "#",
        external: false,
      },
      {
        title: "Instagram",
        href: "#",
        external: false,
      },
      {
        title: "X / Twitter",
        href: "#",
        external: false,
      },
    ],
  },
] satisfies FooterItem[];

export const footerNav3 = [
  {
    title: "Company",
    items: [
      {
        title: "About Company",
        href: "/about",
        external: false,
      },
      {
        title: "What We Build",
        href: "/services",
        external: false,
      },
      {
        title: "Projects",
        href: "/projects",
        external: false,
      },
      {
        title: "Developers",
        href: "/developers",
        external: false,
      },
      {
        title: "Contact",
        href: "/contact",
        external: false,
      },
    ],
  },
] satisfies FooterItem[];
