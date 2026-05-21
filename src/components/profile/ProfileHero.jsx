import { motion } from "framer-motion";
import { Crown, Pencil, ShieldCheck } from "lucide-react";

const luxuryEase = [0.22, 1, 0.36, 1];

export default function ProfileHero() {
  return (
    <section className="px-4 pt-28 sm:px-6 lg:px-10 lg:pt-32">
      <motion.div
        initial={{
          opacity: 0,
          y: 24,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          ease: luxuryEase,
        }}
        className="mx-auto max-w-[1700px] overflow-hidden rounded-[2rem] border border-white/40 bg-white/40 shadow-[0_20px_70px_rgba(0,0,0,0.06)] backdrop-blur-xl"
      >
        <div className="grid lg:grid-cols-[1fr_320px]">
          {/* LEFT */}
          <div className="relative px-6 py-8 sm:px-10 lg:px-14 lg:py-12">
            {/* GLOW */}
            <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[#cad39f]/25 blur-3xl" />

            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-5">
                {/* AVATAR */}
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop"
                    alt="Profile"
                    className="h-24 w-24 rounded-full object-cover ring-4 ring-white/60 sm:h-28 sm:w-28"
                  />

                  <div className="absolute bottom-1 right-1 h-5 w-5 rounded-full border-2 border-white bg-[#6d7d3e]" />
                </div>

                {/* USER INFO */}
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#405821]/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#405821]">
                    <Crown className="size-3.5" />
                    Gold Member
                  </div>

                  <h1 className="mt-4 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
                    Abhishek Sharma
                  </h1>

                  <p className="mt-2 text-sm text-stone-600 sm:text-base">
                    Premium member since 2024
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/60 px-4 py-2 text-xs font-medium text-stone-700">
                      <ShieldCheck className="size-4 text-[#405821]" />
                      Verified Account
                    </div>

                    <div className="rounded-full border border-black/5 bg-white/60 px-4 py-2 text-xs font-medium text-stone-700">
                      12 Orders Completed
                    </div>
                  </div>
                </div>
              </div>

              {/* BUTTON */}
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#405821] px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white shadow-lg shadow-[#405821]/20 transition duration-300 hover:bg-[#314417]">
                <Pencil className="size-4" />
                Edit Profile
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="border-t border-black/5 bg-[#f3f0e6] p-6 lg:border-l lg:border-t-0 lg:p-8">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#6d7d3e]">
              Account Overview
            </p>

            <div className="mt-6 space-y-5">
              {[
                {
                  label: "Wishlist Items",
                  value: "28",
                },
                {
                  label: "Loyalty Points",
                  value: "2,480",
                },
                {
                  label: "Saved Addresses",
                  value: "3",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between border-b border-black/5 pb-4"
                >
                  <p className="text-sm text-stone-600">{item.label}</p>

                  <h3 className="text-xl font-semibold text-[#405821]">
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
