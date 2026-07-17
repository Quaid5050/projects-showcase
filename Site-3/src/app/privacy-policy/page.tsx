import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Merchant Orders™",
  description: "Privacy Policy for Merchant Orders™.",
}

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-32 pb-24 bg-[#020509] min-h-screen">
      <div className="divider-glow fixed top-20 left-0 right-0 z-40 pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Privacy Policy</h1>
        <p className="text-slate-500 mb-10 text-sm">Last Updated: [Date]</p>

        <div className="space-y-8 text-slate-400">
          <p className="leading-relaxed">
            At Merchant Orders, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our platform.
          </p>

          <div>
            <h2 className="text-xl font-black text-white mb-3">1. Information We Collect</h2>
            <p className="leading-relaxed">
              We collect information that you provide directly to us, such as when you create an account, request a demo, or contact customer support. This may include your name, email address, phone number, and restaurant details.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-white mb-3">2. How We Use Your Information</h2>
            <p className="leading-relaxed">
              We use the information we collect to operate and improve our platform, communicate with you, process your requests, and personalize your experience.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-white mb-3">3. Data Security</h2>
            <p className="leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </div>

          <p className="text-sm text-slate-600 pt-8 border-t border-white/5">
            [This is a placeholder for the full privacy policy. Please consult with a legal professional to draft a comprehensive privacy policy suitable for your business operations.]
          </p>
        </div>
      </div>
    </section>
  )
}
