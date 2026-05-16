import type { ServiceIconKey } from "./service-icons";

export type ServiceGroup = {
  id: string;
  title: string;
  description: string;
  iconKey: ServiceIconKey;
  items: string[];
};

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    id: "home-repair",
    title: "Home Repair Services",
    description:
      "Reliable fixes for everyday wear—ideal when you need a local handyman for drywall repair, doors, and general home repair services.",
    iconKey: "hammer",
    items: [
      "Drywall repair",
      "Wall patching",
      "Door repairs",
      "Lock repairs",
      "Hardware replacement",
      "General home fixes",
    ],
  },
  {
    id: "installation",
    title: "Installation Services",
    description:
      "Clean installs for TVs, fixtures, and furniture—including IKEA furniture assembly and office furniture assembly.",
    iconKey: "tv",
    items: [
      "TV mounting",
      "Wall installations",
      "Shelf installation",
      "Curtain rod installation",
      "Light fixture installation",
      "Furniture assembly",
      "IKEA furniture assembly",
      "Office furniture assembly",
    ],
  },
  {
    id: "painting",
    title: "Painting Services",
    description:
      "Interior and exterior painting services with careful prep—perfect for touch-ups and small painting jobs across Toronto.",
    iconKey: "paint",
    items: [
      "Interior painting",
      "Exterior painting",
      "Touch-ups",
      "Wall preparation",
      "Small painting jobs",
    ],
  },
  {
    id: "maintenance",
    title: "Property Maintenance",
    description:
      "Ongoing property maintenance services for landlords, businesses, and busy homeowners who need dependable upkeep.",
    iconKey: "building",
    items: [
      "Landlord maintenance",
      "Business maintenance",
      "Monthly property upkeep",
      "Small repairs",
      "Preventive maintenance",
    ],
  },
];

export const FOOTER_SERVICE_LINKS = SERVICE_GROUPS.map((g) => ({
  href: `/services#${g.id}`,
  label: g.title.replace(" Services", ""),
}));
