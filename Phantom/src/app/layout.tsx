import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { AppProviders } from "@/components/providers/AppProviders";

/** Strips attrs some browser extensions inject on inputs/buttons before React hydrates (avoids mismatch warnings). */
const STRIP_EXTENSION_HYDRATION_ATTRS = `
(function(){
  var A='fdprocessedid';
  var root=typeof document!=='undefined'?document.documentElement:null;
  if(!root)return;
  function strip(n){
    if(!n||n.nodeType!==1)return;
    try{
      if(n.hasAttribute(A))n.removeAttribute(A);
      if(n.querySelectorAll)n.querySelectorAll('['+A+']').forEach(function(e){e.removeAttribute(A);});
    }catch(e){}
  }
  function run(){strip(root);}
  run();
  document.addEventListener('DOMContentLoaded',run);
  if(typeof MutationObserver!=='undefined'){
    new MutationObserver(function(recs){
      for(var i=0;i<recs.length;i++){
        var r=recs[i];
        if(r.type==='attributes'&&r.attributeName===A&&r.target&&r.target.nodeType===1)
          r.target.removeAttribute(A);
        if(r.type==='childList'&&r.addedNodes)
          r.addedNodes.forEach(function(n){strip(n);});
      }
    }).observe(root,{subtree:true,childList:true,attributes:true,attributeFilter:[A]});
  }
})();`;

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title:
    "PAC Phantom Auto Center | Mechanical, Customization & Mobile Detailing",
  description:
    "Premium mechanical service, safety certification, detailing, vinyl wraps, PPF, ceramic coating, lighting, dashcams, CarPlay installs, and mobile detailing.",
  openGraph: {
    title:
      "PAC Phantom Auto Center | Mechanical, Customization & Mobile Detailing",
    description:
      "Premium mechanical service, safety certification, detailing, vinyl wraps, PPF, ceramic coating, lighting, dashcams, CarPlay installs, and mobile detailing.",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} ${syne.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-void font-sans text-accent">
        <Script
          id="strip-extension-hydration-attrs"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: STRIP_EXTENSION_HYDRATION_ATTRS }}
        />
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
