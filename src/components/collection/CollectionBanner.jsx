export default function CollectionBanner({
  brand,
  headingPrimary,
  headingSecondary,
  subtitle,
  image,
  background,
  glow,
  accent,
}) {
  return (
    <section className="relative overflow-hidden px-5 pt-24 sm:px-8 lg:px-14 lg:pt-28">
      {/* AMBIENT GLOW */}
      <div
        className={`pointer-events-none absolute left-0 top-0 h-[14rem] w-[14rem] rounded-full blur-3xl ${glow}`}
      />

      <div
        className={`relative mx-auto overflow-hidden rounded-[1.9rem] border border-white/40 bg-gradient-to-r shadow-2xl shadow-black/5 ${background}`}
      >
        <div className="grid min-h-[260px] items-stretch lg:grid-cols-[1fr_500px]">
          {/* LEFT CONTENT */}
          <div className="relative z-10 flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-14">
            {/* BRAND */}
            <p
              className="text-[10px] font-extrabold uppercase tracking-[0.34em] sm:text-xs"
              style={{ color: accent }}
            >
              {brand}
            </p>

            {/* LINE */}
            <div
              className="mt-4 h-px w-16"
              style={{
                backgroundColor: accent,
              }}
            />

            {/* HEADING */}
            <h1 className="mt-6 font-serif text-[clamp(2.8rem,7vw,5.5rem)] leading-[0.92] tracking-[-0.05em] text-stone-950">
              {headingPrimary}

              <span
                className="ml-3"
                style={{
                  color: accent,
                }}
              >
                {headingSecondary}
              </span>
            </h1>

            {/* SUBTITLE */}
            <p className="mt-5 max-w-2xl text-sm leading-7 text-stone-700 sm:text-[15px] sm:leading-8">
              {subtitle}
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative hidden h-full lg:block">
            <img
              src={image}
              alt={headingPrimary}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
