import { motion } from "framer-motion";
import { features } from "../../constants/homeData";
function BottomFeaturesBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.45, ease: "easeOut" }}
      className="relative z-30 mx-5 mb-5 mt-10 grid max-w-[1620px] overflow-hidden rounded-xl border border-white/55 bg-white/68 shadow-2xl shadow-[#38451f]/15 backdrop-blur-md sm:mx-8 lg:absolute lg:inset-x-14 lg:bottom-0 lg:mx-auto lg:mb-9 lg:mt-0 lg:grid-cols-4"
    >
      {features.map(({ icon: Icon, title, copy }) => (
        <div
          key={title}
          className="group flex items-center gap-5 border-b border-[#526632]/15 px-7 py-5 text-left transition duration-300 hover:bg-white/45 lg:border-b-0 lg:border-r last:lg:border-r-0"
        >
          <span className="grid size-14 shrink-0 place-items-center rounded-full bg-[#728341] text-white shadow-xl shadow-[#526632]/20 transition duration-300 group-hover:scale-110 group-hover:bg-[#405821]">
            <Icon className="size-6 stroke-[1.8]" />
          </span>
          <span>
            <span className="block text-sm font-black uppercase tracking-[0.16em] text-stone-950">
              {title}
            </span>
            <span className="mt-1 block text-base text-stone-800">{copy}</span>
          </span>
        </div>
      ))}
    </motion.div>
  );
}
export default BottomFeaturesBar;
