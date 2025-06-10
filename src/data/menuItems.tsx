import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

interface MenuItem {
  label: string;
  path: string;
}

export const menuItems: MenuItem[] = [
  { label: "Home", path: "/" },
  { label: "Treatment", path: "/treatment" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact Us", path: "/contact" },
];

export const footerMenuItems = menuItems.filter(
  (item) => item.label !== "Home"
);

export const treatmentMenuItems: MenuItem[] = [
  { label: "Hair Loss", path: "/treatment/hair-loss" },
  { label: "Erectile Dysfunction", path: "/treatment/erectile-dysfunction" },
  { label: "Skincare", path: "/treatment/skincare" },
  { label: "Weight Loss", path: "/treatment/weight-loss" },
  { label: "Scream Cream", path: "/treatment/scream-cream" },
];

const XIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M4 3h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1zm9.5 10.2l4.2-6.2H16l-3.2 4.8L10 7h-1.7l4.3 6.5-4.3 6.5H9l3.3-4.9 3.4 4.9h1.6l-4.3-6.3z" />
  </svg>
);

export const socialLinks = [
  { label: "Facebook", path: "https://www.facebook.com", icon: <Facebook /> },
  { label: "Twitter", path: "https://www.twitter.com", icon: <XIcon /> },
  {
    label: "Instagram",
    path: "https://www.instagram.com",
    icon: <Instagram />,
  },
  { label: "LinkedIn", path: "https://www.linkedin.com", icon: <Linkedin /> },
  { label: "YouTube", path: "https://www.youtube.com", icon: <Youtube /> },
];

export const footerLinks = [
  {
    label: "Terms",
    path: "/terms-of-service",
  },
  {
    label: "Privacy",
    path: "/privacy-policy",
  },
  {
    label: "Cookies",
    path: "/cookie-policy",
  },
];
