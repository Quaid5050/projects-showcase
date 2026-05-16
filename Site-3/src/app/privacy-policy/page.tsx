import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Merchant Orders",
  description: "Privacy Policy for Merchant Orders.",
}

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
        <p className="text-slate-500 mb-8">Last Updated: [Date]</p>
        
        <div className="prose prose-slate max-w-none">
          <p className="mb-4 text-slate-700">
            At Merchant Orders, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our platform.
          </p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Information We Collect</h2>
          <p className="mb-4 text-slate-700">
            We collect information that you provide directly to us, such as when you create an account, request a demo, or contact customer support. This may include your name, email address, phone number, and restaurant details.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="mb-4 text-slate-700">
            We use the information we collect to operate and improve our platform, communicate with you, process your requests, and personalize your experience.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Data Security</h2>
          <p className="mb-4 text-slate-700">
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>
          
          <p className="mt-12 text-sm text-slate-500">
            [This is a placeholder for the full privacy policy. Please consult with a legal professional to draft a comprehensive privacy policy suitable for your business operations.]
          </p>
        </div>
      </div>
    </section>
  )
}
