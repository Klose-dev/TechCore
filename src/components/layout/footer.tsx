import { Link } from "react-router-dom"
import SiteLogo from "./site-logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faXTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { footerNav } from "@/config/site";
import { QRCodeComponent } from "../qrcode";

const WHATSAPP_URL = "https://wa.me/237671313884";
const WHATSAPP_DISPLAY = "WhatsApp +237 671 313 884";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link to="/" className="shrink-0">
              <SiteLogo
                width={123}
                height={39}
                lightClasses="dark:hidden"
                darkClasses="hidden dark:block"
              />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-secondary">
              A developer community focused on learning, collaboration,
              innovation, and building real-world technology solutions.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href="#"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded bg-black text-white transition-colors hover:bg-foreground"
              >
                <FontAwesomeIcon icon={faGithub} width={15} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded bg-[#25D366] text-white transition-colors hover:bg-foreground"
              >
                <FontAwesomeIcon icon={faWhatsapp} width={15} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded bg-[#0A66C2] text-white transition-colors hover:bg-foreground"
              >
                <FontAwesomeIcon icon={faFacebook} width={15} />
              </a>
              <a
                href="#"
                aria-label="X"
                className="flex h-10 w-10 items-center justify-center rounded bg-black text-white transition-colors hover:bg-foreground"
              >
                <FontAwesomeIcon icon={faXTwitter} width={15} />
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            {footerNav?.map((item) => (
              <div key={item.title}>
                <h2 className="mb-4 text-sm">{item.title}</h2>
                <NavigationMenu orientation="vertical">
                  <NavigationMenuList className="flex-col items-start space-y-2">
                    {item.items.map((link) => (
                      <NavigationMenuItem key={link.title} className="text-sm">
                        <Link
                          to={link.href}
                          target={link?.external ? "_blank" : undefined}
                          rel={link?.external ? "noreferrer" : undefined}
                          className="block text-secondary transition-colors hover:text-primary"
                        >
                          {link.title}
                        </Link>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            ))}

            <div>
              <h2 className="mb-4 text-sm">Company</h2>
              <ul className="space-y-2 text-sm">
                <li className="text-secondary">
                  <span>Email: </span>
                  <a
                    href="mailto:hello@techcore.dev"
                    className="text-secondary transition-colors hover:text-primary"
                  >
                    hello@techcore.dev
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container">
          <div className="flex flex-col gap-8 py-10 md:flex-row md:items-end md:justify-between">
            <div className="max-w-md">
              <p className="text-sm font-bold uppercase tracking-[0.08em] text-primary">
                Connect with us
              </p>
              <p className="mt-2 text-sm leading-relaxed text-secondary">
                Scan to start a conversation on WhatsApp, or reach the studio
                directly.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm font-bold text-primary transition-colors hover:text-primary/80"
              >
                {WHATSAPP_DISPLAY}
              </a>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Open TECHCORE WhatsApp"
              className="group flex shrink-0 items-center gap-5 self-start rounded-lg border border-border bg-surface p-4 transition-colors hover:border-primary md:self-auto"
            >
              <div>
                <p className="text-sm font-bold text-foreground">Scan to chat</p>
                <p className="text-xs text-secondary">WhatsApp · Community</p>
              </div>
              <QRCodeComponent
                value={WHATSAPP_URL}
                size={84}
                className="rounded bg-white p-1"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container py-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
            <span className="text-xs text-secondary">
              © {new Date().getFullYear()} TECHCORE Developers. All rights
              reserved.
            </span>
            <span className="text-xs text-secondary">Yaoundé, Cameroon</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
