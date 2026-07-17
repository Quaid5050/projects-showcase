"use client";

const WHATSAPP_NUMBER = "12894121562"; // Replace with your WhatsApp number (no +, no spaces)
const WHATSAPP_MESSAGE = "Hi BizzOne Digital! I'm interested in your services.";

export default function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] shadow-[0_4px_24px_rgba(37,211,102,0.5)] transition-all hover:-translate-y-1 hover:shadow-[0_6px_32px_rgba(37,211,102,0.65)]"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.129 6.742 3.047 9.379L1.054 31.25l6.107-1.96A15.91 15.91 0 0016.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.32 22.609c-.39 1.098-1.935 2.012-3.166 2.278-.844.18-1.946.324-5.66-1.216-4.75-1.97-7.806-6.79-8.04-7.105-.226-.316-1.892-2.52-1.892-4.808s1.197-3.412 1.622-3.878c.424-.466.926-.582 1.234-.582.308 0 .616.004.884.016.284.012.664-.108 1.04.792.39.932 1.324 3.228 1.44 3.462.116.234.194.508.038.816-.15.316-.23.508-.46.784-.226.276-.478.616-.68.824-.228.234-.464.49-.2.96.266.466 1.18 1.946 2.534 3.154 1.74 1.548 3.206 2.028 3.66 2.254.458.226.724.19.99-.116.272-.308 1.148-1.338 1.454-1.796.308-.466.616-.384 1.04-.232.424.158 2.716 1.28 3.18 1.514.458.234.77.35.886.542.116.194.116 1.11-.274 2.208z"/>
      </svg>
    </a>
  );
}