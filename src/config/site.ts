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
    items: [
      { title: "Overview", href: "/#overview", items: [] },
      { title: "What We Build", href: "/#services", items: [] },
      { title: "How We Work", href: "/#process", items: [] },
      { title: "Results", href: "/#results", items: [] },
      { title: "The Team", href: "/#studio", items: [] },
      { title: "Our Work", href: "/#work", items: [] },
      { title: "Start a Project", href: "/#contact", items: [] },
    ],
  },
  {
    title: "About",
    href: "/about",
    items: [
      { title: "About TECHCORE", href: "/about#about", items: [] },
      { title: "Manifesto", href: "/about#manifesto", items: [] },
      { title: "Core Values", href: "/about#values", items: [] },
      { title: "How We Work", href: "/about#process", items: [] },
      { title: "The Team", href: "/about#team", items: [] },
      { title: "Start a Project", href: "/about#contact", items: [] },
    ],
  },
  {
    title: "Services",
    href: "/services",
    items: [
      { title: "What We Build", href: "/services#about", items: [] },
      { title: "Our Services", href: "/services#services", items: [] },
      { title: "How We Work", href: "/services#process", items: [] },
      { title: "Start a Project", href: "/services#contact", items: [] },
    ],
  },
  {
    title: "Projects",
    href: "/projects",
    items: [
      { title: "About Our Work", href: "/projects#about", items: [] },
      { title: "Project List", href: "/projects#projects", items: [] },
    ],
  },
  {
    title: "Developers",
    href: "/developers",
    items: [
      { title: "About The Team", href: "/developers#about", items: [] },
      { title: "The Team", href: "/developers#team", items: [] },
      { title: "What We Value", href: "/developers#values", items: [] },
      { title: "FAQ", href: "/developers#faq", items: [] },
    ],
  },
  {
    title: "Blog",
    href: "/blog",
    items: [
      { title: "Blog", href: "/blog#about", items: [] },
      { title: "Posts", href: "/blog#posts", items: [] },
    ],
  },
  {
    title: "Contact",
    href: "/contact",
    items: [
      { title: "Get In Touch", href: "/contact#about", items: [] },
      { title: "Send A Message", href: "/contact#form", items: [] },
    ],
  },
  {
    title: "More",
    items: [
      { title: "Consulting", href: "/home-consulting", items: [] },
      { title: "Studio", href: "/home-seo-agency", items: [] },
    ],
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
      {
        title: "Blog",
        href: "/blog",
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
