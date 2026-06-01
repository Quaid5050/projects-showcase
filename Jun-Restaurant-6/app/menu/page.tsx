import { Suspense } from "react";
import MenuContent from "./MenuContent";

export default function MenuPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="text-gray-400">Loading menu...</div></div>}>
      <MenuContent />
    </Suspense>
  );
}
