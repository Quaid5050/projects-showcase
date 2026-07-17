import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Strides Hockey Sales | Elite Hockey Equipment",
  description:
    "Your trusted source for professional-grade hockey equipment. Shop hockey sticks, skates, and elite gear from CCM and Knapper.",
  icons: {
    icon: "/mainlogo1.png",
    shortcut: "/mainlogo1.png",
    apple: "/mainlogo1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface-bright text-on-surface overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}