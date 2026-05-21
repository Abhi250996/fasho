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
    description: "Your browsing history",
  },
];

export default function ProfileQuickActions() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-[1700px] gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {actions.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.button
              key={item.title}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              whileHover={{
                y: -4,
              }}
              className="rounded-[1.5rem] border border-white/40 bg-white/45 p-5 text-left shadow-lg shadow-black/5 backdrop-blur-md transition duration-300 hover:bg-white/60"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#405821]/10 text-[#405821]">
                <Icon className="size-5" />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-stone-950">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-stone-600">
                {item.description}
              </p>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
