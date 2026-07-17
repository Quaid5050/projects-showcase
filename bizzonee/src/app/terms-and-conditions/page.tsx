import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import LegalPage from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "BizzOne Digital's Terms & Conditions governing all services provided to clients.",
};

const SECTIONS = [
  {
    heading: "1. Introduction",
    body: [
      `These Terms & Conditions ("Terms") govern all services provided by BizzOne Digital ("we", "us", "our") to the client ("you", "your").`,
      "By engaging our services, approving a proposal, or making a payment, you agree to be bound by these Terms.",
    ],
  },
  {
    heading: "2. Scope of Services",
    body: ["Services are provided based on the agreed proposal, estimate, or written communication.", "Our services may include:"],
    list: [
      "Digital advertising (Meta, Google, TikTok, etc.)",
      "Lead generation and marketing campaigns",
      "Sales support and consultation",
      "CRM setup and automation",
      "Content creation and creative services",
      "Ongoing optimization and reporting",
    ],
    footer: ["Any services outside the agreed scope may require additional approval, timelines, and costs."],
  },
  {
    heading: "3. Term & Cancellation",
    body: [
      "Services are provided on a month-to-month basis unless otherwise agreed.",
      "Either party may terminate services with 30 days' written notice.",
      "All work scheduled or in progress during the notice period will be completed and billed accordingly.",
    ],
  },
  {
    heading: "4. Payment Terms",
    body: [
      "The first payment is required to initiate services. Ongoing services are billed on a recurring monthly basis.",
      "All fees are exclusive of applicable taxes (13%).",
      "Failure to make payments on time may result in suspension or termination of services.",
    ],
  },
  {
    heading: "5. Third-Party Costs",
    body: [
      "Any third-party expenses (including but not limited to advertising spend, domains, hosting, software, plugins, content production, talent, or locations) must be pre-approved and will be billed separately or paid directly by the client.",
    ],
  },
  {
    heading: "6. Sales, Marketing & Performance Disclaimer",
    body: ["BizzOne Digital provides marketing, advertising, and sales support services; however:"],
    list: [
      "We do not guarantee specific results, revenue, or conversions",
      "Performance depends on multiple factors including market conditions, competition, pricing, and client responsiveness",
      "Sales outcomes are influenced by both our systems and the client's internal processes",
    ],
  },
  {
    heading: "7. Advertising & Platform Responsibility",
    body: [
      "All campaigns are managed in accordance with platform policies (e.g., Meta, Google, TikTok).",
      "BizzOne Digital is not responsible for:",
    ],
    list: ["Account suspensions or bans", "Rejected ads due to policy violations", "Issues arising from client-provided content or instructions"],
    footer: ["The client is responsible for ensuring their business complies with applicable platform policies and regulations."],
  },
  {
    heading: "8. Client Responsibilities",
    body: ["The client agrees to:"],
    list: [
      "Provide accurate and complete information",
      "Respond to requests, approvals, and feedback in a timely manner",
      "Maintain internal readiness for sales and operations",
      "Provide necessary access to accounts and systems",
    ],
    footer: ["Delays or failure to meet these responsibilities may impact performance and delivery timelines."],
  },
  {
    heading: "9. Communication & Approvals",
    body: [
      "All approvals, feedback, and decisions must be provided through official communication channels (email, CRM, or designated platforms).",
      "Verbal or informal communication is not considered binding unless documented.",
      "If feedback or approval is not provided within a reasonable timeframe, BizzOne Digital reserves the right to proceed to maintain project timelines.",
    ],
  },
  {
    heading: "10. Data, Access & Systems",
    body: [
      "The client is responsible for granting and managing access to required platforms and accounts.",
      "While BizzOne Digital maintains structured processes for handling systems and data:",
    ],
    list: [
      "We do not assume ownership of client accounts",
      "We are not responsible for issues caused by third-party access, external changes, or client-side actions",
    ],
  },
  {
    heading: "11. Project Timelines & Delivery",
    body: ["We aim to deliver services within agreed timelines; however, timelines may be affected by:"],
    list: ["Delays in client feedback or approvals", "Changes in scope", "Third-party dependencies"],
    footer: ["We will make reasonable efforts to maintain consistency and performance."],
  },
  {
    heading: "12. Rescheduling (Filming & Production)",
    body: ["A minimum of 48 hours' notice is required to reschedule any filming or production activities.", "The client is responsible for:"],
    list: ["Securing permits and permissions", "Ensuring a safe and accessible environment"],
    footer: ["Additional costs may apply for last-minute changes or cancellations."],
  },
  {
    heading: "13. Complaints & Issue Resolution",
    body: ["Any concerns or issues must be reported promptly through official communication channels.", "BizzOne Digital maintains an internal process to:"],
    list: ["Review complaints", "Identify root causes", "Implement corrective actions"],
    footer: ["Our goal is continuous improvement and consistent service quality."],
  },
  {
    heading: "14. Limitation of Liability",
    body: ["BizzOne Digital is not liable for:"],
    list: ["Indirect, incidental, or consequential damages", "Performance fluctuations due to external factors", "Platform-related issues beyond our control"],
    footer: ["Our total liability is limited to the amount paid for services during the relevant billing period."],
  },
  {
    heading: "15. Modifications",
    body: [
      "We reserve the right to update these Terms & Conditions at any time. Updated terms will be posted on this page.",
      "Continued use of our services constitutes acceptance of any updates.",
    ],
  },
  {
    heading: "16. Acceptance",
    body: ["By approving a proposal, engaging services, or making payment, you acknowledge and agree to these Terms & Conditions."],
  },
];

export default function TermsAndConditions() {
  return (
    <>
      <Navbar />
      <main className="relative pt-20">
        <LegalPage
          title="Terms & Conditions"
          intro="BizzOne Digital - Terms And Conditions"
          sections={SECTIONS}
        />
      </main>
      <Footer />
    </>
  );
}
