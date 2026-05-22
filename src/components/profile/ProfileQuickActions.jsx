import { motion } from "framer-motion";

import { Heart, MapPin, Package, CreditCard, Clock3 } from "lucide-react";

const actions = [
  {
    icon: Package,
    title: "Orders",
    description: "Track recent purchases",
  },
  {
    icon: Heart,
    title: "Wishlist",
    description: "Saved luxury pieces",
  },
  {
    icon: MapPin,
    title: "Addresses",
    description: "Manage shipping info",
  },
  {
    icon: CreditCard,
    title: "Payments",
    description: "Saved payment methods",
  },
  {
    icon: Clock3,
    title: "Recently Viewed",
    description: "Browsing history",
  },
];

export default function ProfileQuickActions() {
  return (
    <section className="px-3 py-5 sm:px-5 lg:px-8 lg:py-7">
      <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {actions.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.button
              key={item.title}
              initial={{
                opacity: 0,
                y: 16,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.04,
              }}
              whileHover={{
                y: -3,
              }}
              viewport={{
                once: true,
              }}
              className="rounded-2xl border border-white/40 bg-white/50 p-4 text-left shadow-lg shadow-black/5 transition duration-300 hover:bg-white/70 sm:p-5"
            >
              {/* ICON */}
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#405821]/10 text-[#405821] sm:h-11 sm:w-11">
                <Icon className="size-4 sm:size-5" />
              </div>

              {/* TITLE */}
              <h3 className="mt-4 text-sm font-semibold text-stone-950 sm:text-base">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-1 text-xs leading-5 text-stone-600 sm:text-sm sm:leading-6">
                {item.description}
              </p>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
