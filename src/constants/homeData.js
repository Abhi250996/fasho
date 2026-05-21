import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Menu,
  RefreshCw,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Tag,
  Truck,
  User,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroBg from "../assets/hero-bg.png";

export const navItems = [
  {
    label: "New In",
    path: "/new-in",
  },
  {
    label: "Men",
    path: "/men",
  },
  {
    label: "Women",
    path: "/women",
  },
  {
    label: "Collections",
    path: "/collections",
  },
  {
    label: "About",
    path: "/about",
  },
];
export const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    copy: "On all orders over $99",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    copy: "14 days return policy",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    copy: "100% protected checkout",
  },
  {
    icon: Tag,
    title: "Premium Quality",
    copy: "Crafted to last",
  },
];

export const categoryCards = [
  {
    label: "Tailored Essentials",
    title: "Men",
    imagePosition: "object-[62%_center]",
    className: "lg:col-span-7 lg:row-span-2 lg:min-h-[690px]",
  },
  {
    label: "Modern Silhouettes",
    title: "Women",
    imagePosition: "object-[74%_center]",
    className: "lg:col-span-5 lg:min-h-[420px]",
  },
  {
    label: "Just Landed",
    title: "New Arrivals",
    imagePosition: "object-[52%_center]",
    className: "lg:col-span-5 lg:min-h-[420px]",
  },
  {
    label: "Resort Mood",
    title: "Summer Collection",
    imagePosition: "object-[68%_center]",
    className: "lg:col-span-12 lg:min-h-[500px]",
  },
];

export const revealTransition = {
  duration: 0.9,
  ease: [0.22, 1, 0.36, 1],
};
