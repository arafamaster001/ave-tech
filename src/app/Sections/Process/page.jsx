// 'use client'

// export default function OurProcess() {
//   const steps = [
//     {
//       number: '01',
//       title: 'Analyze',
//       description: 'We audit your business, competitors, and current local search performance.',
//     },
//     {
//       number: '02',
//       title: 'Strategize',
//       description: 'We create a custom Local SEO strategy tailored to your goals.',
//     },
//     {
//       number: '03',
//       title: 'Optimize',
//       description: 'We optimize your Google Business Profile, website, citations, and more.',
//     },
//     {
//       number: '04',
//       title: 'Rank & Grow',
//       description: 'You rank higher, get more leads, and grow your business.',
//     },
//   ]

//   return (
//     <section className="w-full bg-[#F5EEE7] py-16 md:py-20">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* Header Row */}
//         <div className="mb-12 flex flex-col items-start justify-between gap-8 md:mb-16 md:flex-row md:items-start">
//           {/* Left Side */}
//           <div className="flex-1">
//             <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#D74321]">
//               Our Process
//             </p>

//             <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
//               <span className="text-black">A Proven Process That </span>
//               <span className="text-[#D74321]">Delivers Results</span>
//             </h2>
//           </div>

//           {/* Right Side */}
//           <div className="flex shrink-0 items-center">
//             <button className="border-2 border-black px-6 py-3 font-medium text-black transition-colors duration-200 hover:bg-black hover:text-white">
//               See Our Process
//             </button>
//           </div>
//         </div>

//         {/* Timeline */}
//         <div className="relative">
//           {/* Connecting Line */}
//           <div className="absolute left-0 right-0 top-6 hidden h-1 bg-gray-300 md:block" />

//           {/* Steps */}
//           <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
//             {steps.map((step, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center text-center"
//               >
//                 {/* Number */}
//                 <div className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#D74321] font-bold text-white">
//                   {step.number}
//                 </div>

//                 {/* Title */}
//                 <h3 className="mb-2 text-lg font-bold text-black">
//                   {step.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-sm text-gray-500">
//                   {step.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client";

const steps = [
  {
    number: "01",
    title: "Analyze",
    description:
      "We audit your business, competitors, and current local search performance.",
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "We create a custom Local SEO strategy tailored to your goals.",
  },
  {
    number: "03",
    title: "Optimize",
    description:
      "We optimize your Google Business Profile, website, citations, and more.",
  },
  {
    number: "04",
    title: "Rank & Grow",
    description:
      "You rank higher, get more leads, and grow your business.",
  },
];

export default function Process() {
  return (
    <section className="w-full py-16 md:py-20" style={{ backgroundColor: "#F5EEE7" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div>
            <p
              className="text-xs md:text-sm font-bold uppercase tracking-wider"
              style={{ color: "#D74321" }}
            >
              Our Process
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-neutral-900"
                            style={{ fontFamily: "'Playfair Display'" }}

            >
              A Proven Process That{" "}
              <span style={{ color: "#D74321" }}>Delivers Results</span>
            </h2>
          </div>

          <a
            href="#process"
            className="inline-flex items-center justify-center border border-neutral-900 px-6 py-3 text-sm text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white self-start md:self-auto"
          >
            See Our Process
          </a>
        </div>

        {/* Timeline Row */}
        <div className="relative mt-12 md:mt-16">
          {/* Connecting line */}
          <div
            className="absolute top-6 left-0 right-0 hidden md:block h-px bg-gray-300"
            style={{ marginLeft: "12.5%", marginRight: "12.5%" }}
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center">
                <div
                  className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full font-bold text-white"
                  style={{
                    backgroundColor: "#D74321",
                    boxShadow: "0 0 0 6px #F5EEE7",
                  }}
                >
                  {step.number}
                </div>
                <h3 className="mt-4 text-lg font-bold text-neutral-900">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[220px] text-sm text-gray-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}