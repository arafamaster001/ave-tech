"use client";

import { useState } from "react";

const testimonials = [
  {
    industry: "Plumbing — Calgary, AB",
    quote:
      "Avetac improved our Google ranking from nowhere to top 3 in 60 days. Our leads increased by 230%.",
    name: "Mike Anderson",
    role: "Owner",
    avatar: "https://i.pravatar.cc/80?img=12",
    stat: "230% More Leads",
  },
  {
    industry: "HVAC — Edmonton, AB",
    quote:
      "Their Google Business Profile optimization brought us consistent calls and directions. Highly recommend!",
    name: "Sarah Mitchell",
    role: "Marketing Manager",
    avatar: "https://i.pravatar.cc/80?img=32",
    stat: "180% More Calls",
  },
  {
    industry: "Garage Doors — Vancouver, BC",
    quote:
      "We dominate local search now. Best investment we've made for our business.",
    name: "James Carter",
    role: "Owner",
    avatar: "https://i.pravatar.cc/80?img=51",
    stat: "310% More Revenue",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const [isAnimating, setIsAnimating] = useState(false);

  const changeSlide = (nextIndex, dir) => {
    if (isAnimating) return;
    setDirection(dir);
    setIsAnimating(true);
    setActiveIndex(nextIndex);
    window.setTimeout(() => setIsAnimating(false), 400);
  };

  const goPrev = () => {
    const nextIndex =
      activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
    changeSlide(nextIndex, "prev");
  };

  const goNext = () => {
    const nextIndex =
      activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1;
    changeSlide(nextIndex, "next");
  };

  const goToSlide = (index) => {
    if (index === activeIndex) return;
    changeSlide(index, index > activeIndex ? "next" : "prev");
  };

  return (
    <section
      className="w-full py-16 md:py-20"
      style={{ backgroundColor: "#111110" }}
    >
      <style>{`
        @keyframes slideFromRight {
          from { opacity: 0; transform: translateX(24px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideFromLeft {
          from { opacity: 0; transform: translateX(-24px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .testimonial-track {
          animation: slideFromRight 0.4s ease-out;
        }
        .testimonial-track.direction-prev {
          animation-name: slideFromLeft;
        }
      `}</style>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div>
            <p
              className="text-xs md:text-sm font-bold uppercase tracking-wider"
              style={{ color: "#D74321" }}
            >
              Case Studies
            </p>
            <h2
              className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-white"
              style={{ fontFamily: "'Playfair Display'" }}
            >
              Real Results From{" "}
              <span style={{ color: "#D74321" }}>Real Businesses</span>
            </h2>
          </div>

          <a
            href="#case-studies"
            className="inline-flex items-center justify-center border border-gray-500 px-6 py-3 text-sm text-white transition-colors hover:bg-white hover:text-neutral-900 self-start md:self-auto"
          >
            View All Case Studies
          </a>
        </div>

        {/* Carousel Row */}
        <div className="relative mt-12">
          {/* Prev Arrow */}
          <button
            type="button"
            onClick={goPrev}
            disabled={isAnimating}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-4 hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 text-white transition-colors hover:bg-white/10 disabled:opacity-50"
          >
            ←
          </button>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={goNext}
            disabled={isAnimating}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-4 hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 text-white transition-colors hover:bg-white/10 disabled:opacity-50"
          >
            →
          </button>

          {/* Cards */}
          <div
            key={activeIndex}
            className={`testimonial-track grid grid-cols-1 md:grid-cols-3 gap-6 ${
              direction === "prev" ? "direction-prev" : ""
            }`}
          >
            {[0, 1, 2].map((offset) => {
              const item =
                testimonials[(activeIndex + offset) % testimonials.length];
              return (
                <div
                  key={item.name}
                  className="rounded-lg p-6 md:p-8"
                  style={{ backgroundColor: "#191918" }}
                >
                  <p
                    className="text-xs font-bold uppercase tracking-wide"
                    style={{ color: "#D74321" }}
                  >
                    {item.industry}
                  </p>

                  <p className="mt-4 italic leading-relaxed text-gray-100">
                    "{item.quote}"
                  </p>

                  <div className="mt-6 flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-400">{item.role}</p>
                    </div>
                  </div>

                  <p
                    className="mt-4 text-sm font-bold"
                    style={{ color: "#D74321" }}
                  >
                    {item.stat}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Mobile Arrows */}
          <div className="mt-6 flex justify-center gap-4 md:hidden">
            <button
              type="button"
              onClick={goPrev}
              disabled={isAnimating}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 text-white disabled:opacity-50"
            >
              ←
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={isAnimating}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 text-white disabled:opacity-50"
            >
              →
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === activeIndex ? "h-2.5 w-2.5" : "h-2 w-2 opacity-50"
                }`}
                style={{
                  backgroundColor:
                    index === activeIndex ? "#D74321" : "#6B6B6B",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
// "use client";

// import { useState } from "react";

// const testimonials = [
//   {
//     industry: "Plumbing — Calgary, AB",
//     quote:
//       "Avetac improved our Google ranking from nowhere to top 3 in 60 days. Our leads increased by 230%.",
//     name: "Mike Anderson",
//     role: "Owner",
//     avatar: "https://i.pravatar.cc/80?img=12",
//     stat: "230% More Leads",
//   },
//   {
//     industry: "HVAC — Edmonton, AB",
//     quote:
//       "Their Google Business Profile optimization brought us consistent calls and directions. Highly recommend!",
//     name: "Sarah Mitchell",
//     role: "Marketing Manager",
//     avatar: "https://i.pravatar.cc/80?img=32",
//     stat: "180% More Calls",
//   },
//   {
//     industry: "Garage Doors — Vancouver, BC",
//     quote:
//       "We dominate local search now. Best investment we've made for our business.",
//     name: "James Carter",
//     role: "Owner",
//     avatar: "https://i.pravatar.cc/80?img=51",
//     stat: "310% More Revenue",
//   },
// ];

// export default function Testimonials() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const goPrev = () => {
//     setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
//   };

//   const goNext = () => {
//     setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <section className="w-full py-16 md:py-20" style={{ backgroundColor: "#111110" }}>
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* Header Row */}
//         <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
//           <div>
//             <p
//               className="text-xs md:text-sm font-bold uppercase tracking-wider"
//               style={{ color: "#D74321" }}
//             >
//               Case Studies
//             </p>
//             <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-white">
//               Real Results From{" "}
//               <span style={{ color: "#D74321" }}>Real Businesses</span>
//             </h2>
//           </div>

//           <a
//             href="#case-studies"
//             className="inline-flex items-center justify-center border border-gray-500 px-6 py-3 text-sm text-white transition-colors hover:bg-white hover:text-neutral-900 self-start md:self-auto"
//           >
//             View All Case Studies
//           </a>
//         </div>

//         {/* Carousel Row */}
//         <div className="relative mt-12">
//           {/* Prev Arrow */}
//           <button
//             type="button"
//             onClick={goPrev}
//             aria-label="Previous testimonial"
//             className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-4 hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 text-white transition-colors hover:bg-white/10"
//           >
//             ←
//           </button>

//           {/* Next Arrow */}
//           <button
//             type="button"
//             onClick={goNext}
//             aria-label="Next testimonial"
//             className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-4 hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 text-white transition-colors hover:bg-white/10"
//           >
//             →
//           </button>

//           {/* Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {[0, 1, 2].map((offset) => {
//               const item =
//                 testimonials[(activeIndex + offset) % testimonials.length];
//               return (
//                 <div
//                   key={item.name}
//                   className="rounded-lg p-6 md:p-8"
//                   style={{ backgroundColor: "#191918" }}
//                 >
//                   <p
//                     className="text-xs font-bold uppercase tracking-wide"
//                     style={{ color: "#D74321" }}
//                   >
//                     {item.industry}
//                   </p>

//                   <p className="mt-4 italic leading-relaxed text-gray-100">
//                     "{item.quote}"
//                   </p>

//                   <div className="mt-6 flex items-center gap-3">
//                     <img
//                       src={item.avatar}
//                       alt={item.name}
//                       className="h-10 w-10 rounded-full object-cover"
//                     />
//                     <div>
//                       <p className="text-sm font-semibold text-white">
//                         {item.name}
//                       </p>
//                       <p className="text-xs text-gray-400">{item.role}</p>
//                     </div>
//                   </div>

//                   <p
//                     className="mt-4 text-sm font-bold"
//                     style={{ color: "#D74321" }}
//                   >
//                     {item.stat}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Mobile Arrows */}
//           <div className="mt-6 flex justify-center gap-4 md:hidden">
//             <button
//               type="button"
//               onClick={goPrev}
//               aria-label="Previous testimonial"
//               className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 text-white"
//             >
//               ←
//             </button>
//             <button
//               type="button"
//               onClick={goNext}
//               aria-label="Next testimonial"
//               className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 text-white"
//             >
//               →
//             </button>
//           </div>

//           {/* Pagination Dots */}
//           <div className="mt-6 flex justify-center gap-2">
//             {testimonials.map((item, index) => (
//               <button
//                 key={item.name}
//                 type="button"
//                 aria-label={`Go to slide ${index + 1}`}
//                 onClick={() => setActiveIndex(index)}
//                 className={`rounded-full transition-all ${
//                   index === activeIndex
//                     ? "h-2.5 w-2.5"
//                     : "h-2 w-2 opacity-50"
//                 }`}
//                 style={{
//                   backgroundColor:
//                     index === activeIndex ? "#D74321" : "#6B6B6B",
//                 }}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
