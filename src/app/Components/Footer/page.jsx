"use client";

const services = [
  "Local SEO",
  "GBP Optimization",
  "Local SEO Audit",
  "Citation Building",
  "Reputation Management",
  "Local Landing Pages",
];

const locations = [
  "Alberta",
  "Ontario",
  "British Columbia",
  "Manitoba",
  "Saskatchewan",
  "All Cities",
];

const company = ["About Us", "Case Studies", "Blog", "Careers", "Contact Us"];

export default function Footer() {
  return (
    <footer className="w-full" style={{ backgroundColor: "#111110" }}>
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-md text-sm font-bold text-white"
                style={{ backgroundColor: "#D74321" }}
              >
                A
              </div>
              <span className="text-lg font-bold text-white">AVETAC</span>
            </div>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
              We help local businesses rank higher on Google Maps and Search
              to get more leads and grow consistently.
            </p>

            <div className="mt-5 flex items-center gap-3">
              {["Facebook", "LinkedIn", "Instagram", "YouTube"].map(
                (label) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-300 transition-colors hover:border-gray-500 hover:text-white"
                  >
                    <span className="text-xs">{label[0]}</span>
                  </a>
                )
              )}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white">Services</h4>
            <ul className="mt-4 space-y-3">
              {services.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-sm font-semibold text-white">Locations</h4>
            <ul className="mt-4 space-y-3">
              {locations.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-3">
              {company.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white">Contact Us</h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+16477060726" className="hover:text-white">
                  +1 (647) 706-0726
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a
                  href="mailto:hello@avetac.com"
                  className="hover:text-white"
                >
                  hello@avetac.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>Toronto, Ontario, Canada</span>
              </li>
            </ul>

            <a
              href="#audit"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold"
              style={{ color: "#D74321" }}
            >
              Get Free SEO Audit →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-gray-500 sm:px-6 md:flex-row lg:px-8">
          <p>© 2025 Avetac. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms &amp; Conditions
            </a>
            <a href="#" className="hover:text-white">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}