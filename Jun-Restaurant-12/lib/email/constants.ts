export const RESTAURANT_DISPLAY_NAME = "Chan's Garden";

export const RESTAURANT_ADDRESS_LINES = [
  "Chan's Garden",
  "441 E Columbia St",
  "New Westminster, BC V3L 3X4",
];

export const DEFAULT_PICKUP_PREPARE_MINUTES = 20;

export function formatPickupPrepareWindow(minutes: number): string {
  if (minutes < 60) return `${minutes} minutes`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m > 0 ? `${h}h ${m}min` : `${h} hour${h > 1 ? "s" : ""}`;
}
