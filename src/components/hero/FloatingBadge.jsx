import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { motion } from "framer-motion";
import { navItems } from "../../constants/homeData";
import {
  ArrowRight,
  Menu,
  Search,
  ShoppingBag,
  Sparkles,
  User,
} from "lucide-react";
function FloatingBadge() {
  return (
    <motion.div
      data-hero-badge
      initial={{ opacity: 0, scale: 0.86, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.65, ease: "easeOut" }}
      className="absolute bottom-[18%] right-[5%] z-20 hidden size-36 place-items-center rounded-full border border-white/25 bg-[#6e8142]/80 p-3 text-center text-white shadow-2xl shadow-[#33451a]/25 backdrop-blur-md md:grid xl:size-44"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="absolute inset-2 rounded-full border border-white/20"
      />
      <div className="relative">
        <Sparkles className="mx-auto mb-3 size-5" />
        <p className="text-xs font-extrabold uppercase tracking-[0.22em] xl:text-sm">
          Live In Style
        </p>
        <span className="mx-auto my-3 block h-px w-12 bg-white/65" />
        <p className="text-sm font-extrabold uppercase tracking-[0.2em]">
          SS '24
        </p>
      </div>
    </motion.div>
  );
}
export default FloatingBadge;
