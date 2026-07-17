import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1 min-h-screen bg-[#f5f5f5]">
        <div className="bg-[#111111] text-white py-8">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <h1 className="text-2xl md:text-3xl font-bold">Contact Us</h1>
            <p className="text-gray-400 text-sm mt-1">
              We&apos;d love to hear from you
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Info Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7">
              <h2 className="text-xl font-bold text-[#111111] mb-6">
                Chan&apos;s Garden
              </h2>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#d60000] rounded-xl flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#111111] text-sm">
                      Address
                    </p>
                    <p className="text-gray-500 text-sm mt-0.5">
                      441 E Columbia St
                      <br />
                      New Westminster, BC V3L 3X4, Canada
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#d60000] rounded-xl flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#111111] text-sm">
                      Phone
                    </p>
                    <a
                      href="tel:+16045211871"
                      className="text-[#d60000] text-sm mt-0.5 hover:underline block"
                    >
                      +1 604-521-1871
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#d60000] rounded-xl flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#111111] text-sm">
                      Hours
                    </p>
                    <div className="text-gray-500 text-sm mt-0.5 space-y-0.5">
                      <p>Monday – Sunday</p>
                      <p>11:30 am – 9:30 pm</p>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="tel:+16045211871"
                className="mt-7 flex items-center justify-center gap-2 w-full bg-[#d60000] hover:bg-[#b00000] text-white font-semibold py-3 rounded-lg transition-colors text-sm"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Now
              </a>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.7!2d-122.90!3d49.205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485da3b3b3b3b3b%3A0x0!2s441+E+Columbia+St%2C+New+Westminster%2C+BC+V3L+3X4!5e0!3m2!1sen!2sca!4v1620000000000!5m2!1sen!2sca"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Chan's Garden Location"
                className="block"
              />
              <div className="p-4">
                <a
                  href="https://maps.google.com/?q=441+E+Columbia+St,+New+Westminster,+BC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm text-[#d60000] font-medium hover:underline"
                >
                  Open in Google Maps
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
