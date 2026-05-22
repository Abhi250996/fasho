import { motion } from "framer-motion";
import Footer from "../components/layout/Footer";

export default function LuxuryAboutSection() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f3efe6] text-stone-950">
      {/* HERO / ABOUT SECTION */}
      <section className="relative overflow-hidden px-5 pb-24 pt-10 sm:px-8 lg:px-14 lg:pb-32 lg:pt-16">
        {/* AMBIENT GLOW */}
        <div className="pointer-events-none absolute left-[-10%] top-0 h-[26rem] w-[26rem] rounded-full bg-[#cad39f]/20 blur-2xl" />

        <div className="mx-auto grid max-w-[1700px] gap-14 lg:grid-cols-[0.95fr_1fr] lg:items-center">
          {/* LEFT IMAGE STACK */}
          <div className="relative">
            {/* MAIN IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="overflow-hidden rounded-[2.5rem] shadow-2xl shadow-black/10"
            >
              <img
                loading="lazy"
                decoding="async"
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&?w=900&auto=format&fit=crop"
                alt="Luxury fashion"
                className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[680px]"
              />
            </motion.div>

            {/* FLOATING CARD */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.9 }}
              className="absolute -bottom-8 right-4 max-w-[260px] rounded-[1.8rem] border border-white/40 bg-white/80 p-6 shadow-2xl shadow-black/10 backdrop-blur-md sm:right-8 sm:max-w-[300px]"
            >
              <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#6d7d3e]">
                Since 2025
              </p>

              <h3 className="mt-4 text-2xl font-semibold leading-snug text-stone-950">
                Crafted With Timeless Luxury.
              </h3>

              <p className="mt-4 text-sm leading-7 text-stone-600">
                Designed for elevated everyday sophistication and refined modern
                aesthetics.
              </p>
            </motion.div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:pl-12">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-[10px] font-extrabold uppercase tracking-[0.34em] text-[#6d7d3e]"
            >
              About FASHO
            </motion.p>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 70 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-5 h-px bg-[#526632]"
            />

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.9 }}
              className="mt-8 font-serif text-[clamp(3.2rem,8vw,7rem)] leading-[0.92] tracking-[-0.05em] text-stone-950"
            >
              Redefining
              <span className="block text-[#405821]">Modern Luxury.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.9 }}
              className="mt-8 max-w-2xl text-base leading-8 text-stone-700 sm:text-lg"
            >
              FASHO blends timeless tailoring with contemporary aesthetics to
              create elevated essentials for modern lifestyles. Every collection
              is crafted with premium fabrics, refined silhouettes, and a luxury
              editorial approach inspired by global fashion culture.
            </motion.p>

            {/* STATS */}
            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3">
              {[
                {
                  number: "50K+",
                  label: "Luxury Customers",
                },
                {
                  number: "120+",
                  label: "Premium Collections",
                },
                {
                  number: "4.9",
                  label: "Customer Rating",
                },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="rounded-[1.6rem] border border-white/40 bg-white/50 p-6 shadow-xl shadow-black/5 backdrop-blur-md"
                >
                  <h3 className="text-3xl font-semibold text-[#405821]">
                    {item.number}
                  </h3>

                  <p className="mt-2 text-sm text-stone-600">{item.label}</p>
                </motion.div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="mt-12 flex flex-wrap gap-4">
              <button className="rounded-full bg-[#405821] px-8 py-4 text-[11px] font-extrabold uppercase tracking-[0.24em] text-white shadow-2xl shadow-[#405821]/20 transition duration-300 hover:bg-[#314417]">
                Discover More
              </button>

              <button className="rounded-full border border-[#405821]/10 bg-white/70 px-8 py-4 text-[11px] font-extrabold uppercase tracking-[0.24em] text-stone-800 transition duration-300 hover:bg-white">
                View Collections
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
