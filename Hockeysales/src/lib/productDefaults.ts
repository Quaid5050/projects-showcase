// Default product inventory. Used as a fallback on the public page when the
// database is empty, and as the seed data for the admin panel.

export interface StickItem {
  curve: string;
  flex: string;
  hand: string;
}

export interface Stick {
  model: string;
  brand: string;
  isNew?: boolean;
  items: StickItem[];
}

export interface Skate {
  name: string;
  price: string;
  desc: string;
  status: string;
  image: string;
  sizes: string[];
}

export interface StickPricing {
  seniorPrice: string;
  juniorPrice: string;
  warranty: string;
}

export const defaultStickPricing: StickPricing = {
  seniorPrice: "$220",
  juniorPrice: "$200",
  warranty: "No Warranty",
};

export const shadowSizes = ["4.5 Fit 3", "5.0 Fit 2", "5.5 Fit 2", "6.0 Fit 2", "6.5 Fit 2", "7.0 Fit 2", "7.5 Fit 2", "8.0 Fit 2", "8.5 Fit 2", "9.0 Fit 2", "9.5 Fit 2"];

export const defaultSticks: Stick[] = [
  { model: "Tracer", brand: "Bauer", items: [
    { curve: "P92", flex: "70, 87, 102", hand: "LH" }, { curve: "P28", flex: "70, 87, 102", hand: "LH" }, { curve: "P88", flex: "70, 77, 87", hand: "LH" },
    { curve: "P28", flex: "77, 87", hand: "RH" }, { curve: "P88", flex: "87", hand: "RH" },
    { curve: "P92", flex: "40, 50, 55, 65", hand: "LH" }, { curve: "P92", flex: "40, 50, 65", hand: "RH" },
  ]},
  { model: "Twitch", brand: "Bauer", items: [
    { curve: "P92", flex: "70, 77, 87", hand: "LH" }, { curve: "P28", flex: "70, 77, 87", hand: "LH" }, { curve: "P92", flex: "70, 77, 87", hand: "RH" }, { curve: "P28", flex: "87", hand: "RH" },
    { curve: "P92", flex: "30, 40, 50, 55", hand: "LH" }, { curve: "P28", flex: "30, 40, 50, 55", hand: "LH" }, { curve: "P92", flex: "30, 50", hand: "RH" }, { curve: "P28", flex: "30, 50, 55", hand: "RH" },
  ]},
  { model: "FT8 Pro", brand: "CCM", items: [
    { curve: "P29", flex: "70", hand: "LH" }, { curve: "P28", flex: "70, 75", hand: "LH" }, { curve: "P29", flex: "75", hand: "RH" }, { curve: "P28", flex: "75, 87, 95", hand: "RH" },
    { curve: "P29", flex: "55, 65", hand: "LH" }, { curve: "P29", flex: "55, 65", hand: "RH" }, { curve: "P28", flex: "55, 65", hand: "RH" },
    { curve: "P29", flex: "30, 40, 50", hand: "LH" }, { curve: "P28", flex: "30, 40, 50", hand: "LH" }, { curve: "P29", flex: "30, 40, 50", hand: "RH" }, { curve: "P28", flex: "30, 40, 50", hand: "RH" },
  ]},
  { model: "FT9 Pro", brand: "CCM", isNew: true, items: [
    { curve: "P29", flex: "70, 75, 85", hand: "LH" }, { curve: "P28", flex: "70, 75, 85", hand: "LH" }, { curve: "P29", flex: "70, 75, 85", hand: "RH" }, { curve: "P28", flex: "70, 75, 85", hand: "RH" },
    { curve: "P29", flex: "55, 65", hand: "LH" }, { curve: "P28", flex: "55, 65", hand: "LH" }, { curve: "P29", flex: "55, 65", hand: "RH" }, { curve: "P28", flex: "55, 65", hand: "RH" },
  ]},
  { model: "Trigger 10 Pro", brand: "CCM", items: [
    { curve: "P29", flex: "70, 75, 85", hand: "LH" }, { curve: "P28", flex: "70, 75, 85, 95", hand: "LH" }, { curve: "P92", flex: "70, 75", hand: "RH" }, { curve: "P28", flex: "70, 75, 85, 95", hand: "RH" },
    { curve: "P29", flex: "30, 40, 50, 55, 65", hand: "LH" }, { curve: "P28", flex: "30, 55, 65", hand: "LH" }, { curve: "P29", flex: "30, 40, 50, 55", hand: "RH" }, { curve: "P28", flex: "50, 55", hand: "RH" },
  ]},
  { model: "Vizion", brand: "CCM", items: [
    { curve: "P29", flex: "70, 75, 85", hand: "LH" }, { curve: "P28", flex: "70, 75", hand: "LH" }, { curve: "P29", flex: "70, 75, 85", hand: "RH" }, { curve: "P28", flex: "70, 75, 85", hand: "RH" },
    { curve: "P29", flex: "40, 50, 55, 65", hand: "LH" }, { curve: "P28", flex: "40", hand: "LH" },
  ]},
  { model: "FlyLite", brand: "Bauer", items: [
    { curve: "P92", flex: "70, 102", hand: "LH" }, { curve: "P28", flex: "87, 102", hand: "LH" }, { curve: "P29", flex: "70, 87", hand: "RH" }, { curve: "P28", flex: "87", hand: "RH" },
    { curve: "P92", flex: "30, 40", hand: "LH" }, { curve: "P28", flex: "28, 40", hand: "LH" }, { curve: "P92", flex: "30", hand: "RH" },
  ]},
  { model: "Proto 2", brand: "Bauer", items: [
    { curve: "P92", flex: "70, 77, 87", hand: "LH" }, { curve: "P28", flex: "70, 77, 87", hand: "LH" }, { curve: "P92", flex: "70, 77, 87", hand: "RH" }, { curve: "P28", flex: "70, 77, 87", hand: "RH" },
    { curve: "P28", flex: "40, 50, 55, 65", hand: "LH" }, { curve: "P92", flex: "40, 50, 55, 65", hand: "LH" }, { curve: "P92", flex: "40, 50, 55", hand: "RH" }, { curve: "P28", flex: "30, 40, 50, 55, 65", hand: "RH" },
  ]},
  { model: "Pulse", brand: "Bauer", items: [
    { curve: "P92", flex: "70, 77, 87, 102", hand: "LH" }, { curve: "P28", flex: "70, 77, 87, 102", hand: "LH" }, { curve: "P92", flex: "70, 77, 87, 102", hand: "RH" }, { curve: "P28", flex: "70, 77, 87, 102", hand: "RH" },
    { curve: "P92", flex: "30, 40, 50, 55, 65", hand: "LH" }, { curve: "P28", flex: "30, 50, 55, 65", hand: "LH" }, { curve: "P92", flex: "50, 55, 65", hand: "RH" }, { curve: "P28", flex: "50, 55, 65", hand: "RH" },
  ]},
  { model: "XF Ghost", brand: "Bauer", items: [
    { curve: "P29", flex: "70, 75, 85", hand: "LH" }, { curve: "P28", flex: "70, 75, 85", hand: "LH" }, { curve: "P88", flex: "70", hand: "LH" },
    { curve: "P29", flex: "55, 65", hand: "LH" }, { curve: "P28", flex: "55, 65", hand: "LH" }, { curve: "P29", flex: "55, 65", hand: "RH" }, { curve: "P28", flex: "55", hand: "RH" },
  ]},
  { model: "Hyper 2", brand: "Bauer", items: [
    { curve: "P92", flex: "65", hand: "LH" }, { curve: "P28", flex: "65, 87", hand: "LH" }, { curve: "P28", flex: "55, 65, 87", hand: "RH" },
  ]},
  { model: "Trigger 9 Pro", brand: "CCM", items: [
    { curve: "P28", flex: "75, 85", hand: "LH" }, { curve: "P28", flex: "85", hand: "RH" },
  ]},
  { model: "FT7 Pro", brand: "CCM", items: [
    { curve: "P29", flex: "70, 75", hand: "LH" }, { curve: "P28", flex: "75", hand: "LH" }, { curve: "P29", flex: "70, 75, 85", hand: "RH" }, { curve: "P28", flex: "75, 85", hand: "RH" },
    { curve: "P29", flex: "65", hand: "LH" }, { curve: "P29", flex: "65", hand: "RH" },
  ]},
  { model: "Proto R", brand: "Bauer", items: [
    { curve: "P92", flex: "70, 77, 87", hand: "LH" }, { curve: "P28", flex: "77, 87", hand: "LH" }, { curve: "P28", flex: "87", hand: "RH" },
    { curve: "P92", flex: "50, 65", hand: "LH" }, { curve: "P28", flex: "40", hand: "LH" },
  ]},
];

export const defaultSkates: Skate[] = [
  { name: "Bauer Vapor FlyLite Skates", price: "Coming in July", desc: "Next-generation Vapor fit with FlyLite technology for explosive speed and agility.", status: "Coming Soon", image: "/bauer-vapor-flylite.png", sizes: [] },
  { name: "Bauer Supreme Skates", price: "$650", desc: "Available in most sizes. Reach out for details.", status: "In Stock", image: "/bauer-supreme-skate.jpg", sizes: shadowSizes },
];
