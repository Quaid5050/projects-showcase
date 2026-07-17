import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import LegalPage from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "BizzOne Digital's Privacy Policy — how we collect, use, store and protect your information.",
};

const SECTIONS = [
  {
    heading: "1. Introduction",
    body: [
      `BizzOne Digital ("we", "us", "our") is committed to protecting your privacy and handling your information in a secure, responsible, and structured manner.`,
      "This Privacy Policy explains how we collect, use, store, and protect your information when you interact with our website, services, and communication channels.",
    ],
  },
  {
    heading: "2. Information We Collect",
    body: ["We may collect the following types of information:"],
    subsections: [
      {
        heading: "a. Personal Information",
        list: ["Name, email address, phone number", "Business name and related contact details"],
      },
      {
        heading: "b. Business & Service Information",
        list: [
          "Information related to your business, services, and marketing needs",
          "Access credentials or permissions required to manage accounts or systems on your behalf",
        ],
      },
      {
        heading: "c. Marketing & Performance Data",
        list: ["Campaign data, ad performance metrics, and lead information", "Website usage and interaction data"],
      },
      {
        heading: "d. Communication Data",
        list: ["Emails, messages, calls, and feedback", "Approvals, instructions, and service-related communication"],
      },
    ],
  },
  {
    heading: "3. How We Use Your Information",
    body: ["We use your information to:"],
    list: [
      "Deliver and manage marketing, sales support, and related services",
      "Set up and maintain internal systems and processes for service delivery",
      "Run, optimize, and monitor campaigns and performance",
      "Communicate updates, reports, and recommendations",
      "Improve our services and internal operations",
      "Ensure security and prevent misuse",
    ],
  },
  {
    heading: "4. Consent",
    body: [
      "By providing your information, engaging our services, or using our website, you consent to the collection and use of your information as outlined in this Privacy Policy.",
      "You may withdraw your consent at any time, subject to legal or contractual obligations.",
    ],
  },
  {
    heading: "5. Sharing of Information",
    body: ["We do not sell or rent your personal information.", "We may share information only when necessary with:"],
    list: [
      "Third-party platforms and service providers used to deliver services",
      "Internal team members or contractors involved in your project",
    ],
    footer: ["All sharing is limited to what is necessary to perform the agreed services."],
  },
  {
    heading: "6. Use of Third-Party Platforms",
    body: [
      "Our services may involve the use of third-party platforms and systems.",
      "These platforms operate under their own terms and privacy policies. BizzOne Digital is not responsible for the practices, policies, or actions of third-party providers.",
    ],
  },
  {
    heading: "7. Data Security",
    body: ["We implement internal systems and processes to help protect your information, including:"],
    list: [
      "Controlled access to data and systems",
      "Structured handling of credentials and permissions",
      "Internal measures to reduce unauthorized use",
    ],
    footer: ["While we take reasonable precautions, no method of transmission or storage is completely secure."],
  },
  {
    heading: "8. Data Access & Responsibility",
    body: ["Clients are responsible for:"],
    list: [
      "Providing accurate and up-to-date information",
      "Managing access to their accounts",
      "Notifying us of any unauthorized access or security concerns",
    ],
    footer: ["We are not responsible for issues caused by external access, third parties, or client-side actions."],
  },
  {
    heading: "9. Data Retention",
    body: ["We retain information only for as long as necessary to:"],
    list: ["Provide services", "Meet legal and business requirements", "Resolve disputes and enforce agreements"],
  },
  {
    heading: "10. Cookies & Tracking Technologies",
    body: ["Our website may use cookies and similar technologies to:"],
    list: ["Improve user experience", "Analyze website performance", "Support marketing and advertising efforts"],
    footer: ["You may disable cookies through your browser settings."],
  },
  {
    heading: "11. Your Rights",
    body: ["You may request to:"],
    list: ["Access your personal information", "Correct inaccurate information", "Withdraw consent where applicable"],
    footer: ["Requests can be made by contacting us directly."],
  },
  {
    heading: "12. Updates to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page.",
      "Continued use of our services constitutes acceptance of the updated policy.",
    ],
  },
  {
    heading: "13. Contact Information",
    body: ["For questions regarding this Privacy Policy, please contact:"],
    list: ["BizzOne Digital", "info@bizzonedigital.com"],
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="relative pt-20">
        <LegalPage
          title="Privacy Policy"
          intro="BizzOne Digital – Privacy Policy"
          sections={SECTIONS}
        />
      </main>
      <Footer />
    </>
  );
}
