import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

const luxuryEase = [0.22, 1, 0.36, 1];

export default function NewsletterSection() {
  return (
    <section className="overflow-hidden bg-[#ecead7] px-4 py-10 sm:px-6 lg:px-10 lg:py-14">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            ease: luxuryEase,
          }}
          className="relative overflow-hidden rounded-[1.5rem] border border-white/40 bg-gradient-to-br from-[#f5f1e6] via-[#ece8da] to-[#e4dcc9] px-5 py-8 shadow-lg shadow-black/5 sm:px-8 sm:py-10 lg:px-10"
        >
          {/* LIGHT GLOW */}
          <div className="absolute right-[-10%] top-[-20%] h-40 w-40 rounded-full bg-[#d7ddb5]/40 blur-2xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* LEFT */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1.5 shadow-sm backdrop-blur-sm">
                <div className="h-1.5 w-1.5 rounded-full bg-[#405821]" />

                <span className="text-[8px] font-extrabold uppercase tracking-[0.22em] text-[#405821]">
                  FASHO Members
                </span>
              </div>

              <h2 className="mt-4 font-serif text-[clamp(2rem,5vw,3.8rem)] leading-[0.95] tracking-[-0.05em] text-stone-950">
                Get Early Access
                <span className="block text-[#405821]">To New Collections</span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-stone-700 sm:text-[15px]">
                Receive exclusive drops, curated edits, and private release
                updates directly in your inbox.
              </p>
            </div>

            {/* RIGHT */}
            <motion.form
              initial={{
                opacity: 0,
                y: 16,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: luxuryEase,
              }}
              className="w-full max-w-xl"
            >
              <div className="flex flex-col gap-3 rounded-[1.2rem] border border-white/50 bg-white/55 p-3 shadow-md backdrop-blur-sm sm:flex-row sm:items-center">
                {/* INPUT */}
                <div className="flex flex-1 items-center gap-3 px-2">
                  <Mail className="size-4 shrink-0 text-[#6d7d3e]" />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="h-11 w-full bg-transparent text-sm text-stone-950 outline-none placeholder:text-stone-500"
                  />
                </div>

                {/* BUTTON */}
                <motion.button
                  type="submit"
                  whileHover={{
                    y: -1,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#405821] px-5 py-3 text-[9px] font-extrabold uppercase tracking-[0.18em] text-white shadow-md shadow-[#405821]/15 transition duration-300 hover:bg-[#314417]"
                >
                  Subscribe
                  <ArrowRight className="size-3.5" />
                </motion.button>
              </div>

              <p className="mt-3 text-xs leading-6 text-stone-500">
                No spam. Only curated releases and exclusive updates.
              </p>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
