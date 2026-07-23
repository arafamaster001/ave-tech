// import { ArrowRight } from 'lucide-react';
// import React from 'react'

// const ServiceSection = () => {
//     const services = [
//   {
//     number: '01',
//     title: 'SEO & Content Marketing',
//     description:
//       'Rank higher on Google and build organic traffic that compounds over time. Long-term sustainable growth through content that converts.',
//   },
//   {
//     number: '02',
//     title: 'Paid Advertising',
//     description:
//       'Google Ads, Meta, TikTok, LinkedIn – we maximize ROI across every paid channel with data-driven precision and relentless optimization.',
//   },
//   {
//     number: '03',
//     title: 'Social Media Growth',
//     description:
//       'Build a community that champions your brand. Strategy, content, and community management that turns followers into buyers.',
//   },
//   {
//     number: '04',
//     title: 'Email & Automation',
//     description:
//       'Automated campaigns that nurture leads from first click to loyal customer. Revenue from your list, month after month.',
//   },
//   {
//     number: '05',
//     title: 'Analytics & CRO',
//     description:
//       'Turn your data into decisions. We audit, test, and optimize conversion rates so every visitor is worth more to your bottom line.',
//   },
//   {
//     number: '06',
//     title: 'Growth Strategy',
//     description:
//       'A custom 90-day roadmap built around your market, competition, and revenue goals – then executed with obsessive attention to results.',
//   },
// ];
//   return (
//      <section className="services-section bg-amber-50 py-16 px-6 md:px-12">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex items-center gap-6 mb-12">
//           <span className="services-badge bg-red-600 text-white px-3 py-1 text-xs font-bold tracking-wide">
//             SERVICES
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold text-black">
//             What We Do
//           </h2>
//           <div className="flex-1 h-0.5 bg-black hidden md:block"></div>
//         </div>

//         {/* Grid */}
//         <div className="services-grid">
//           {services.map((service) => (
//             <div key={service.number} className="service-card">
//               {/* Number Background */}
//               <div className="service-number">{service.number}</div>

//               {/* Content */}
//               <div className="relative z-10 flex flex-col h-full">
//                 <h3 className="text-2xl font-bold text-black mb-4">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
//                   {service.description}
//                 </p>

//                 {/* Arrow Icon */}
//                 <button className="service-arrow-btn">
//                   <ArrowRight size={20} strokeWidth={2.5} />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ServiceSection

'use client';

import {
  UserRound,
  MapPinned,
  ClipboardCheck,
  ShieldCheck,
  MessageSquareText,
  FileText,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: UserRound,
    title: 'Local SEO',
    description:
      'Improve your visibility in local search results and attract more nearby customers.',
  },
  {
    icon: MapPinned,
    title: 'Google Business Profile Optimization',
    description:
      'Optimize your profile to rank higher on Google Maps and increase local visibility.',
  },
  {
    icon: ClipboardCheck,
    title: 'Local SEO Audit',
    description:
      'In-depth audit to find opportunities, fix issues, and boost your local search performance.',
  },
  {
    icon: ShieldCheck,
    title: 'Local Citation Building',
    description:
      'Build accurate citations across top directories to improve rankings and trust.',
  },
  {
    icon: MessageSquareText,
    title: 'Reputation Management',
    description:
      'Get more positive reviews and protect your brand reputation online.',
  },
  {
    icon: FileText,
    title: 'Local Landing Pages',
    description:
      'High-converting location pages that rank and turn visitors into customers.',
  },
];

export default function Services() {
  return (
    <section className="bg-[#FAF5F0] w-full py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 mb-12">
          <div className="flex-1">
            <span className="text-xs font-bold tracking-widest text-[#DF4622] uppercase">
              Services
            </span>

            <h2 
            className="font-display text-3xl md:text-4xl font-bold leading-tight mt-2"
                            style={{ fontFamily: "'Playfair Display'" }}

            >
              <span className="text-black">Complete Local </span>
              <span className="text-[#DF4622]">SEO Solutions.</span>
            </h2>
          </div>

          <div className="lg:max-w-sm">
            <p className="text-gray-500 text-sm leading-relaxed">
              End-to-end Local SEO services that help you rank higher, get more
              leads, and outperform your competitors.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-sm  p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="bg-[#FBEAE7] rounded-lg p-3 w-fit mb-4">
                  <Icon size={24} className="text-[#DF4622]" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-black mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Learn More */}
                <div className="inline-flex items-center gap-2 text-[#DF4622] font-semibold text-sm hover:underline cursor-pointer transition-all">
                  Learn More
                  <ArrowRight size={16} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}