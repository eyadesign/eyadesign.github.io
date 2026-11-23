// All editable copy lives in /content and is managed through the CMS at /admin.
import settings from "../../content/settings.json";
import home from "../../content/home.json";
import work from "../../content/work.json";

export { home, work };

export const site = settings;
export const statement = home.statement;
export const services = home.services.items;
export const experience = home.experience.items;
export const confidential = home.nda.items;
export const alsoUnderNda = home.nda.also;

export const navLinks = [
  { label: "About Me", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/work/" },
  { label: "Contact", href: "/#contact" },
];

export const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Works", href: "/work/" },
  { label: "Contact", href: "/#contact" },
];

/** Contact-form inbox (Supabase). The publishable key is safe to ship to browsers. */
export const inbox = {
  url: "https://otciwugogxxbfczhggan.supabase.co",
  key: "sb_publishable_ES7tEC4lr8eVS6dkoDyvIA_PHxuXJ7b",
};
