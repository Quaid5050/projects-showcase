export type Category = "mobiles" | "laptops" | "accessories" | "tablets";
export type Condition = "New" | "Used";
export type AccessoryType = "Earbuds" | "Chargers" | "Cases" | "Smartwatches";
export type LaptopType = "Business" | "Gaming" | "Student";

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: Category;
  condition: Condition;
  image: string;
  gallery?: string[];
  description: string;
  specs: string[];
  featured?: boolean;
  subType?: AccessoryType | LaptopType;
}
