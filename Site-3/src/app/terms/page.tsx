import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Merchant Orders™",
  description: "Terms of Service for Merchant Orders™.",
}

export default function TermsPage() {
  return (
    <section className="pt-32 pb-24 bg-[#020509] min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Terms of Service</h1>
        <p className="text-slate-500 mb-10 text-sm">Last Updated: [Date]</p>

        <div className="space-y-8 text-slate-400">
          <p className="leading-relaxed">
            Please read these Terms of Service carefully before using the Merchant Orders platform operated by Merchant Orders.
          </p>

          <div>
            <h2 className="text-xl font-black text-white mb-3">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing or using our platform, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the platform.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-white mb-3">2. Description of Service</h2>
            <p className="leading-relaxed">
              Merchant Orders provides a digital ordering, loyalty, and analytics platform for restaurants. We reserve the right to modify or discontinue the service at any time.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-white mb-3">3. User Accounts</h2>
            <p className="leading-relaxed">
              You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
            </p>
          </div>

          <p className="text-sm text-slate-600 pt-8 border-t border-white/5">
            [This is a placeholder for the full terms of service. Please consult with a legal professional to draft a comprehensive terms of service document suitable for your business operations.]
          </p>
        </div>
      </div>
    </section>
  )
}
