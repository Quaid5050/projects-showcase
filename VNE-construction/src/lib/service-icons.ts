import { Building2, Hammer, PaintBucket, Tv } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const SERVICE_ICONS = {
  hammer: Hammer,
  tv: Tv,
  paint: PaintBucket,
  building: Building2,
} as const satisfies Record<string, LucideIcon>;

export type ServiceIconKey = keyof typeof SERVICE_ICONS;
