import { motion } from "framer-motion";
import { Crown, Pencil, ShieldCheck } from "lucide-react";

const luxuryEase = [0.22, 1, 0.36, 1];

export default function ProfileHero() {
  return (
    <section className="px-3 pt-24 sm:px-5 lg:px-8 lg:pt-28">
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          ease: luxuryEase,
        }}
        className="mx-auto max-w-[1600px] overflow-hidden rounded-2xl border border-white/40 bg-white/50 shadow-lg shadow-black/5"
      >
        <div className="grid lg:grid-cols-[1fr_280px]">
          {/* LEFT */}
          <div className="relative px-4 py-5 sm:px-6 sm:py-7 lg:px-10 lg:py-10">
            {/* GLOW */}
            <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-[#cad39f]/20 blur-2xl" />

            <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              {/* USER */}
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                {/* AVATAR */}
                <div className="relative mx-auto sm:mx-0">
                  <img
                    loading="lazy"
                    decoding="async"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop"
                    alt="Profile"
                    className="h-20 w-20 rounded-full object-cover ring-4 ring-white/60 sm:h-24 sm:w-24"
                  />

                  <div className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-white bg-[#6d7d3e]" />
                </div>

                {/* INFO */}
                <div className="text-center sm:text-left">
                  {/* BADGE */}
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-[#405821]/10 px-3 py-1 text-[8px] font-bold uppercase tracking-[0.12em] text-[#405821] sm:text-[9px]">
                    <Crown className="size-3" />
                    Gold Member
                  </div>

                  {/* NAME */}
                  <h1 className="mt-3 text-2xl font-semibold tracking-tight text-stone-950 sm:text-3xl">
                    Abhishek Sharma
                  </h1>

                  {/* SUBTEXT */}
                  <p className="mt-1 text-xs text-stone-600 sm:text-sm">
                    Premium member since 2024
                  </p>

                  {/* TAGS */}
                  <div className="mt-3 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-black/5 bg-white/70 px-3 py-1.5 text-[10px] font-medium text-stone-700">
                      <ShieldCheck className="size-3.5 text-[#405821]" />
                      Verified
                    </div>

                    <div className="rounded-full border border-black/5 bg-white/70 px-3 py-1.5 text-[10px] font-medium text-stone-700">
                      12 Orders
                    </div>
                  </div>
                </div>
              </div>

              {/* BUTTON */}
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#405821] px-5 py-3 text-[9px] font-bold uppercase tracking-[0.12em] text-white shadow-md shadow-[#405821]/20 transition duration-300 hover:bg-[#314417]">
                <Pencil className="size-3.5" />
                Edit Profile
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="border-t border-black/5 bg-[#f3f0e6] p-4 sm:p-5 lg:border-l lg:border-t-0 lg:p-6">
            <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-[#6d7d3e] sm:text-[9px]">
              Account Overview
            </p>

            {/* STATS */}
            <div className="mt-4 grid grid-cols-3 gap-3 lg:grid-cols-1 lg:gap-4">
              {[
                {
                  label: "Wishlist",
                  value: "28",
                },
                {
                  label: "Points",
                  value: "2,480",
                },
                {
                  label: "Addresses",
                  value: "3",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-black/5 bg-white/70 p-3 text-center lg:flex lg:items-center lg:justify-between lg:rounded-none lg:border-0 lg:border-b lg:bg-transparent lg:p-0 lg:pb-3 lg:text-left"
                >
                  <p className="text-[10px] text-stone-600 sm:text-xs">
                    {item.label}
                  </p>

                  <h3 className="mt-1 text-lg font-semibold text-[#405821] lg:mt-0 lg:text-xl">
                    {item.value}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
