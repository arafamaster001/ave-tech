"use client";

export default function CTASection() {
  return (
    <section
      className="relative w-full overflow-hidden py-14 md:py-16"
      style={{ backgroundColor: "#111110" }}
    >
      {/* Decorative ring, half-clipped on the left edge */}
      <div
        className="pointer-events-none absolute left-0 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ border: "26px solid #D74321", opacity: 0.18 }}
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-6 lg:px-8 ">
        <div>
          <p
            className="text-xs font-bold uppercase tracking-wider"
            style={{ color: "#D74321" }}
          >
            Free SEO Audit
          </p>

          <h2
            className="mt-2 text-2xl md:text-3xl font-bold tracking-tight text-white"
            style={{ fontFamily: "'Playfair Display'" }}
          >
            Ready to{" "}
            <span className="italic" style={{ color: "#D74321" }}>
              Grow Your Business
            </span>
            ?
          </h2>

          <p className="mt-3 max-w-xl text-sm text-gray-400">
            Get a free Local SEO audit and discover opportunities to rank higher
            and get more leads.
          </p>
        </div>

        <div className="flex flex-shrink-0 flex-col items-start gap-2">
          <a
            href="#audit"
            className="inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#D74321" }}
          >
            Get My Free SEO Audit
            <span aria-hidden="true">→</span>
          </a>
          <p className="flex items-center gap-1.5 text-xs text-gray-400">
            <span
              className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-gray-500 text-[9px]"
              aria-hidden="true"
            >
              ✓
            </span>
            No obligation. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}
