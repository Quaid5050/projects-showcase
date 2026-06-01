import MenuItem from "@/models/MenuItem";

export interface CartItem {
  menuItemId: string;
  name: string;
  quantity: number;
  price: number;
  selectedOptions?: Record<string, string>;
  notes?: string;
}

export interface ValidatedItem {
  menuItemId: string;
  name: string;
  quantity: number;
  price: number;
  selectedOptions?: Record<string, string>;
  notes?: string;
}

export async function validateCart(items: CartItem[]): Promise<{ items: ValidatedItem[]; subtotal: number }> {
  const validated: ValidatedItem[] = [];
  let subtotal = 0;

  for (const item of items) {
    const menuItem = await MenuItem.findById(item.menuItemId).lean() as any;
    if (!menuItem || !menuItem.isAvailable) {
      throw new Error(`Item "${item.name}" is no longer available`);
    }

    let price = menuItem.price;

    // Add option price modifiers
    if (item.selectedOptions && menuItem.options) {
      for (const [groupKey, optionKey] of Object.entries(item.selectedOptions)) {
        const group = menuItem.options.find((g: any) => g.groupKey === groupKey);
        if (group) {
          const option = group.options?.find((o: any) => o.key === optionKey);
          if (option?.priceModifier) {
            price += option.priceModifier;
          }
        }
      }
    }

    const lineTotal = price * item.quantity;
    subtotal += lineTotal;

    validated.push({
      menuItemId: item.menuItemId,
      name: menuItem.name,
      quantity: item.quantity,
      price,
      selectedOptions: item.selectedOptions,
      notes: item.notes,
    });
  }

  return { items: validated, subtotal };
}
