import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Merchant Orders",
  description: "Terms of Service for Merchant Orders.",
}

export default function TermsPage() {
  return (
    <section className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>
        <p className="text-slate-500 mb-8">Last Updated: [Date]</p>
        
        <div className="prose prose-slate max-w-none">
          <p className="mb-4 text-slate-700">
            Please read these Terms of Service carefully before using the Merchant Orders platform operated by Merchant Orders.
          </p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4 text-slate-700">
            By accessing or using our platform, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the platform.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Description of Service</h2>
          <p className="mb-4 text-slate-700">
            Merchant Orders provides a digital ordering, loyalty, and analytics platform for restaurants. We reserve the right to modify or discontinue the service at any time.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. User Accounts</h2>
          <p className="mb-4 text-slate-700">
            You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
          </p>
          
          <p className="mt-12 text-sm text-slate-500">
            [This is a placeholder for the full terms of service. Please consult with a legal professional to draft a comprehensive terms of service document suitable for your business operations.]
          </p>
        </div>
      </div>
    </section>
  )
}
