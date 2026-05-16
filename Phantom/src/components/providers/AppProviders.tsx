"use client";

import { BookingModalProvider } from "@/contexts/BookingModalContext";
import { BookingModal } from "@/components/booking/BookingModal";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <BookingModalProvider>
      {children}
      <BookingModal />
    </BookingModalProvider>
  );
}
