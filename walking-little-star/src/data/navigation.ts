export interface NavItem {
  label: string;
  path: string;
}

export const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Programs & Services", path: "/services" },
  { label: "Book a Visit", path: "/booking" },
  { label: "Contact", path: "/contact" },
];
