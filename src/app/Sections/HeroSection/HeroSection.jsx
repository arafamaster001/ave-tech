// import React from 'react'

// const HeroSection = () => {
//   return (
//     <>
//       <div className="np-hero-root">
        

//         <section>
//           <div className="h-1 bg-[var(--ink)]"></div>

//           <div className="np-hero-grid grid grid-cols-1 md:grid-cols-2 min-h-[520px]">
//             {/* LEFT */}
//             <div className="np-hero-left flex flex-col justify-between border-r-4 border-[var(--ink)] p-8 md:p-14">
//               <div>
//                 <h1 className="np-hero-h1 text-[var(--ink)] mb-6">
//                   Let's Grow<br />
//                   Your Business<br />
//                   <em>Faster.</em>
//                 </h1>

//                 <p className="np-deck text-[15px] md:text-[18px] font-light leading-relaxed text-[#444] max-w-[420px] pl-4 mb-8">
//                   We help ambitious brands dominate search, scale paid media, and convert
//                   visitors into loyal, paying customers — with a track record of $2.4B in
//                   revenue generated.
//                 </p>

//                 <div className="np-hero-form flex border-2 border-[var(--ink)] mb-4">
//                   <input
//                     type="text"
//                     placeholder="Enter your website URL..."
//                     className="flex-1 min-w-0 bg-transparent outline-none px-4 py-3 text-sm text-[var(--ink)] placeholder:text-gray-400"
//                   />
//                   <button className="np-condensed bg-[var(--ink)] text-[var(--cream)] px-6 py-3 text-xs font-bold tracking-[2px] uppercase whitespace-nowrap hover:bg-[var(--red)] transition-colors">
//                     Analyze Now
//                   </button>
//                 </div>

//                 <p className="np-condensed text-xs font-semibold tracking-wide uppercase text-gray-400">
//                   <span className="text-[var(--red)]">★★★★★</span>{" "}
//                   &nbsp;Trusted by 3,200+ companies globally
//                 </p>
//               </div>

//               <div className="mt-8 pt-6 border-t-2 border-[var(--ink)]">
//                 <span className="np-condensed text-[11px] font-bold tracking-[3px] uppercase text-gray-400">
//                   As Featured In
//                 </span>
//                 <div className="flex flex-wrap gap-5 mt-3 items-center">
//                   {["ADWEEK", "INC. 500", "FORBES", "ENTREPRENEUR"].map((brand) => (
//                     <span
//                       key={brand}
//                       className="np-condensed text-[13px] font-bold tracking-[2px] text-[#bbb]"
//                     >
//                       {brand}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT */}
//             <div className="np-hero-right bg-[var(--ink)] flex flex-col justify-center items-center p-8 md:p-14">
//               <div className="np-condensed text-[11px] font-bold tracking-[3px] uppercase text-white/35 mb-8 self-start">
//                 Our Track Record
//               </div>
//               <div className="flex flex-col gap-7 w-full">
//                 {[
//                   { num: "$2.4", suffix: "B+", desc: "Client revenue generated since 2017" },
//                   { num: "3,200", suffix: "+", desc: "Businesses scaled worldwide" },
//                   { num: "97", suffix: "%", desc: "Client retention rate year-over-year" },
//                 ].map((stat, i, arr) => (
//                   <div
//                     key={stat.desc}
//                     className={`pb-7 ${i !== arr.length - 1 ? "border-b border-white/10" : ""}`}
//                   >
//                     <div className="np-stat-num text-white">
//                       {stat.num}
//                       <span>{stat.suffix}</span>
//                     </div>
//                     <div className="text-[13px] font-light text-white/45 mt-1 tracking-wide">
//                       {stat.desc}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="h-1 bg-[var(--ink)]"></div>
//         </section>

//         {/* STATS BAR */}
//         <div className="np-stats-bar grid grid-cols-2 md:grid-cols-4 border-t-4 border-b-4 border-[var(--ink)] bg-[var(--ink)]">
//           {[
//             { num: "$2.4", suffix: "B+", label: "Revenue Generated" },
//             { num: "3,200", suffix: "+", label: "Happy Clients" },
//             { num: "18", suffix: "", label: "Countries" },
//             { num: "97", suffix: "%", label: "Retention Rate" },
//           ].map((stat) => (
//             <div
//               key={stat.label}
//               className="np-stat-cell text-center px-4 py-6 md:py-8 border-r border-white/10 last:border-r-0"
//             >
//               <div className="np-condensed-num text-white">
//                 {stat.num}
//                 {stat.suffix && <em className="not-italic text-[var(--red)]">{stat.suffix}</em>}
//               </div>
//               <div className="np-condensed text-[10px] font-semibold text-white/35 mt-1.5 uppercase tracking-[1.5px]">
//                 {stat.label}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   )
// }

// export default HeroSection
'use client';

import {
  BarChart3,
  Users,
  MapPin,
  Trophy,
  Star,
} from 'lucide-react';

export default function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-[#FAF5F0] relative overflow-hidden">
  <div
        className="pointer-events-none absolute left-[90%] top-2 h-96 w-96 opacity-40 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ border: "65px solid #D74321" }}
      />
        <div className="grid grid-cols-1 lg:grid-cols-2 h-auto lg:min-h-screen lg:items-stretch mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          
          {/* <div className='hero-ring absolute h-[20rem] w-[20rem] left-[70%] bottom-[70%] rounded-full bg-[] border-60 border-[#df4522bd]'></div> */}
          {/* Left */}
          <div className="  py-12 lg:py-20 flex flex-col justify-center">
            <div className="max-w-md space-y-6">

              <span className="text-xs font-bold tracking-widest text-[#DF4622] uppercase">
                Local SEO That Drives
              </span>

              <div className="space-y-1">
                <h1 className="font-display text-5xl lg:text-5xl font-bold  text-black"
                style={{ fontFamily: "'Playfair Display'" }}
                >
                  More Customers.
                </h1>

                <h2 className="font-display text-5xl lg:text-5xl font-bold leading-tight text-[#DF4622]"
                style={{ fontFamily: "'Playfair Display'" }}
                >
                  More Revenue.
                </h2>
              </div>

              <p className="text-base text-gray-500 leading-relaxed">
                We help local businesses rank higher on Google, get more leads
                from Maps & Search, and grow consistently.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button className="bg-[#DF4622] hover:bg-[#c73a1a] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center justify-center gap-2">
                  Get Free SEO Audit →
                </button>

                <button className="border-2 border-black hover:border-[#DF4622] hover:text-[#DF4622] text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105">
                  Book a Strategy Call
                </button>
              </div>

              {/* Reviews */}
              <div className="flex flex-col gap-3 pt-4">
                <div className="flex items-center gap-3">

                  <div className="flex -space-x-2">
                    {[
                      "https://i.pravatar.cc/80?img=32",
                      "https://i.pravatar.cc/80?img=12",
                      "https://i.pravatar.cc/80?img=51",
                      // "/avatars/avatar-4.png",
                    ].map((img, index) => (
                      <div
                        key={index}
                        className="w-10 h-10 rounded-full overflow-hidden border-2 border-white bg-gray-200"
                      >
                        <img
                          src={img}
                          alt="Client"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-gray-500">
                  Trusted by 100+ local businesses across Canada
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className=" px-6 sm:px-8 lg:px-1 py-12 lg:py-10 flex items-center justify-center relative min-h-[400px] overflow-hidden">

            {/* <div className="absolute inset-0.5 flex items-center justify-center overflow-hidden">
              <div className="absolute w-96 h-96 bg-[#DF4622] rounded-full opacity-15 blur-3xl animate-pulse"></div>
            </div> */}

            <div className="relative w-full max-w-sm lg:max-w-[130%] overflow-hidden hero-image">
              <img
                src="/pasted.png"
                alt="Dashboard"
                className="w-full h-auto object-cover "
              />
            </div>
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 lg:py-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-0">

            <div className="flex flex-col items-center lg:items-start lg:border-r lg:border-white/10 lg:pr-12">
              <BarChart3 className="text-[#DF4622] mb-3" size={25} />
              <h3 className="text-2xl lg:text-lg font-bold text-white">$24M+</h3>
              <p className="text-xs lg:text-sm text-gray-400 mt-2 text-center lg:text-left">
                Revenue Generated For Our Clients
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-start lg:border-r lg:border-white/10 lg:px-12">
              <Users className="text-[#DF4622] mb-3" size={25} />
              <h3 className="text-2xl lg:text-lg font-bold text-white">3,200+</h3>
              <p className="text-xs lg:text-sm text-gray-400 mt-2 text-center lg:text-left">
                Businesses Ranked On Top
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-start lg:border-r lg:border-white/10 lg:px-12">
              <MapPin className="text-[#DF4622] mb-3" size={25} />
              <h3 className="text-2xl lg:text-lg font-bold text-white">100+</h3>
              <p className="text-xs lg:text-sm text-gray-400 mt-2 text-center lg:text-left">
                Cities Across Canada
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-start lg:pl-12">
              <Trophy className="text-[#DF4622] mb-3" size={25} />
              <h3 className="text-2xl lg:text-lg font-bold text-white">97%</h3>
              <p className="text-xs lg:text-sm text-gray-400 mt-2 text-center lg:text-left">
                Client Retention Rate
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}