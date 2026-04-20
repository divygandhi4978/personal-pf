"use client";

export default function Hero({ heroData }) {
  if (!heroData) return null;

  return (
    <section className="w-full bg-black border-b border-zinc-900">
      <div className="max-w-[1400px] mx-auto px-8 py-20 lg:py-32">
        {/* TAG */}
        {heroData.tag && (
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#7c3aed] shadow-[0_0_12px_#7c3aed]" />
            <span className="text-[10px] font-mono tracking-[0.4em] text-zinc-500 uppercase">
              {heroData.tag}
            </span>
          </div>
        )}

        {/* TITLE */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.1] max-w-5xl">
          {heroData.title}
        </h1>

        {/* SUBTITLE */}
        {heroData.subtitle && (
          <p className="mt-8 text-base sm:text-lg md:text-xl text-zinc-400 leading-relaxed max-w-3xl">
            {heroData.subtitle}
          </p>
        )}

        {/* META DATE */}
        {heroData.date && (
          <p className="mt-8 text-sm font-medium text-zinc-600">
            {heroData.date}
          </p>
        )}

        {/* IMAGE - Now aligned to the left grid rather than centered */}
        {heroData.image && (
          <div className="mt-16 flex justify-start">
            <div className="
              w-full 
              max-w-5xl 
              rounded-2xl 
              overflow-hidden 
              border border-zinc-800 
              bg-[#0A0A0F] 
              shadow-2xl 
              transition-all 
              duration-500
              hover:border-[#7c3aed]/40
            ">
              <img
                src={heroData.image}
                alt={heroData.title}
                className="w-full h-auto object-cover block"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}