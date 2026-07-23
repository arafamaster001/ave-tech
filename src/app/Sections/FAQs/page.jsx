"use client";

import { useState } from "react";

const leftFaqs = [
  {
    question: "How long does it take to see results?",
    answer:
      "Most clients start seeing improvements in local rankings within 60-90 days, with significant results by month 4-6.",
  },
  {
    question: "What is Local SEO?",
    answer:
      "Local SEO is the process of optimizing your online presence so your business shows up in local search results, Google Maps, and the local pack when nearby customers search for your services.",
  },
  {
    question: "Will Local SEO work for my business?",
    answer:
      "Yes. Local SEO works for almost any business that serves customers in a specific city or region, from home services to healthcare, retail, and professional services.",
  },
];

const rightFaqs = [
  {
    question: "Do you work with small businesses?",
    answer:
      "Absolutely. We work with businesses of all sizes, from single-location startups to multi-location franchises, and tailor our strategy to your budget and goals.",
  },
  {
    question: "How much does Local SEO cost?",
    answer:
      "Pricing depends on your industry, competition, and goals. Most of our plans start affordably and scale as your business grows. Contact us for a custom quote.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes, our services are month-to-month with no long-term contracts. You can cancel anytime with 30 days notice.",
  },
];

function FAQAccordionItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-md border border-gray-200 bg-white">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between px-5 py-4 text-left cursor-pointer"
      >
        <span className="text-sm md:text-base font-semibold text-neutral-900">
          {item.question}
        </span>
        <span
          className={`text-gray-600 text-lg font-light transition-transform duration-300 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        >
          +
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-4 text-sm leading-relaxed text-gray-500">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section
      className="w-full py-16 md:py-20"
      style={{ backgroundColor: "#F5EEE7" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p
              className="text-xs md:text-sm font-bold uppercase tracking-wider"
              style={{ color: "#D74321" }}
            >
              FAQ
            </p>
            <h2
              className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-neutral-900"
              style={{ fontFamily: "'Playfair Display'" }}
            >
              Common <span style={{ color: "#D74321" }}>Questions</span>
            </h2>
          </div>

          <p className="text-sm text-gray-500">
            Still have questions?{" "}
            <a
              href="#contact"
              className="font-medium hover:underline"
              style={{ color: "#D74321" }}
            >
              Contact us →
            </a>
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            {leftFaqs.map((item) => (
              <FAQAccordionItem key={item.question} item={item} />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {rightFaqs.map((item) => (
              <FAQAccordionItem key={item.question} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
