import { menProducts } from "../data/menProducts";
import { womenProducts } from "../data/womenProducts";

export const collectionConfig = {
  men: {
    slug: "men",

    brand: "FASHO Menswear",

    title: "Men Collection",

    headingPrimary: "Modern",

    headingSecondary: "Essentials",

    subtitle:
      "Elevated essentials, timeless tailoring, and contemporary luxury menswear crafted for modern everyday sophistication.",

    products: menProducts,

    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&?w=900&auto=format&fit=crop",

    background: "from-[#dfe5c6] via-[#ebe7db] to-[#f5efe4]",

    glow: "bg-[#d4ddb1]/35",

    accent: "#405821",

    pageBackground: "bg-[#eeecdf]",

    categories: [
      "All",
      "Essentials",
      "Tailoring",
      "Outerwear",
      "Premium Basics",
      "Street Luxury",
      "Luxury Tailoring",
      "Denim",
      "Editorial",
      "Resort Wear",
      "Summer Edit",
      "New Season",
    ],

    sortOptions: ["Newest", "Price Low", "Price High"],

    luxuryCard: {
      tag: "Premium Edit",

      title: "Elevated Luxury Essentials.",

      description:
        "Crafted with timeless silhouettes and premium textures for modern wardrobes.",

      buttonText: "Explore Collection",
    },
  },

  women: {
    slug: "women",

    brand: "FASHO Womenswear",

    title: "Women Collection",

    headingPrimary: "Luxury",

    headingSecondary: "Elegance",

    subtitle:
      "Discover refined feminine silhouettes, modern tailoring, and timeless luxury pieces designed for elevated everyday sophistication.",

    products: womenProducts,

    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&?w=900&auto=format&fit=crop",

    background: "from-[#f3e3df] via-[#f6efea] to-[#f8f4f1]",

    glow: "bg-[#f0d8d0]/35",

    accent: "#8f5f52",

    pageBackground: "bg-[#f7f2ee]",

    categories: [
      "All",
      "Luxury Dresses",
      "Minimal Essentials",
      "Evening Wear",
      "Tailoring",
      "Luxury Knitwear",
      "Modern Classics",
      "Premium Outerwear",
      "Editorial",
      "Soft Neutrals",
      "Resort Edit",
      "New Season",
    ],

    sortOptions: ["Newest", "Price Low", "Price High"],

    luxuryCard: {
      tag: "Luxury Edit",

      title: "Refined Feminine Essentials.",

      description:
        "Premium silhouettes designed with timeless elegance and elevated contemporary styling.",

      buttonText: "Discover Now",
    },
  },

  collections: {
    slug: "collections",

    brand: "FASHO Studio",

    title: "New Collections",

    headingPrimary: "Curated",

    headingSecondary: "Luxury",

    subtitle:
      "Explore the latest curated fashion collections blending timeless elegance with contemporary luxury aesthetics.",

    products: [...menProducts, ...womenProducts],

    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&?w=900&auto=format&fit=crop",

    background: "from-[#ece6d7] via-[#f4f1ea] to-[#e5dcc8]",

    glow: "bg-[#d7ccb0]/35",

    accent: "#6d5b3e",

    pageBackground: "bg-[#f2efe8]",

    categories: [
      "All",
      "Men",
      "Women",
      "Luxury",
      "New Season",
      "Editorial",
      "Essentials",
    ],

    sortOptions: ["Newest", "Price Low", "Price High"],

    luxuryCard: {
      tag: "Curated Edit",

      title: "Contemporary Fashion Collections.",

      description:
        "Luxury collections blending modern aesthetics with timeless craftsmanship.",

      buttonText: "Explore Fashion",
    },
  },
  new_in: {
    slug: "new-in",

    brand: "FASHO New Season",

    title: "New In",

    headingPrimary: "Latest",

    headingSecondary: "Arrivals",

    subtitle:
      "Discover the latest arrivals curated with elevated contemporary aesthetics and timeless luxury craftsmanship.",

    products: [...menProducts, ...womenProducts],

    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&?w=900&auto=format&fit=crop",

    background: "from-[#ececec] via-[#f4f4f5] to-[#ffffff]",

    glow: "bg-[#d4d4d8]/35",

    accent: "#27272a",

    pageBackground: "bg-[#f5f5f5]",

    categories: ["All", "New Season", "Luxury", "Editorial", "Minimal"],

    sortOptions: ["Newest", "Price Low", "Price High"],

    luxuryCard: {
      tag: "Latest Edit",

      title: "Modern Luxury Arrivals.",

      description:
        "Explore newly curated fashion arrivals designed with elevated minimal aesthetics.",

      buttonText: "Shop New In",
    },
  },
};
