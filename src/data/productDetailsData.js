import heroBg from '../assets/hero-bg.png'

export const productDetailsData = {
  id: 1,
  name: 'Linen Resort Shirt',
  subtitle: 'Textured summer essential',
  category: 'Menswear',
  price: 128,
  rating: 5,
  reviewCount: 128,
  description:
    'A relaxed resort shirt cut from breathable textured linen, designed with quiet structure, natural movement, and a refined olive tone for elevated everyday styling.',
  images: [
    { src: heroBg, alt: 'Linen Resort Shirt front editorial', position: 'object-[64%_center]' },
    { src: heroBg, alt: 'Linen Resort Shirt detail editorial', position: 'object-[72%_center]' },
    { src: heroBg, alt: 'Linen Resort Shirt lifestyle editorial', position: 'object-[52%_center]' },
    { src: heroBg, alt: 'Linen Resort Shirt styling editorial', position: 'object-[68%_center]' },
  ],
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  colors: [
    { name: 'Olive', value: '#405821' },
    { name: 'Sage', value: '#8c9a68' },
    { name: 'Ivory', value: '#f3eedc' },
    { name: 'Black', value: '#171713' },
  ],
  details: [
    {
      title: 'Product Details',
      content:
        'Relaxed camp collar, corozo-style buttons, straight hem, and a breathable textured weave made for warm-weather layering.',
    },
    {
      title: 'Materials & Care',
      content:
        'Premium linen blend. Cold gentle wash, reshape while damp, and hang dry. Steam lightly to preserve the natural texture.',
    },
    {
      title: 'Shipping & Returns',
      content:
        'Complimentary shipping over $99. Returns accepted within 14 days in original condition with tags attached.',
    },
    {
      title: 'Size Guide',
      content:
        'Designed for a relaxed fit. Choose your usual size for easy drape or size down for a closer silhouette.',
    },
  ],
}

export const productReviews = [
  {
    id: 1,
    name: 'Elliot Hayes',
    rating: 5,
    verified: true,
    image: heroBg,
    imagePosition: 'object-[66%_30%]',
    text: 'The fabric feels substantial yet breathable. It has that quiet premium look that works with everything.',
  },
  {
    id: 2,
    name: 'Mara Vale',
    rating: 5,
    verified: true,
    image: heroBg,
    imagePosition: 'object-[54%_30%]',
    text: 'Beautiful color, elegant drape, and the fit feels considered. It instantly became a travel staple.',
  },
]

export const recommendedProducts = [
  {
    id: 1,
    name: 'Ivory Pleated Trouser',
    category: 'Tailored Essentials',
    price: 164,
    image: heroBg,
    hoverImage: heroBg,
    imagePosition: 'object-[50%_center]',
    hoverPosition: 'object-[68%_center]',
  },
  {
    id: 2,
    name: 'Soft Cotton Layer Tee',
    category: 'Essentials',
    price: 72,
    image: heroBg,
    hoverImage: heroBg,
    imagePosition: 'object-[44%_center]',
    hoverPosition: 'object-[62%_center]',
  },
  {
    id: 3,
    name: 'Olive Summer Jacket',
    category: 'Summer Collection',
    price: 214,
    image: heroBg,
    hoverImage: heroBg,
    imagePosition: 'object-[68%_center]',
    hoverPosition: 'object-[55%_center]',
  },
  {
    id: 4,
    name: 'Signature Silk Scarf',
    category: 'Accessories',
    price: 84,
    image: heroBg,
    hoverImage: heroBg,
    imagePosition: 'object-[60%_center]',
    hoverPosition: 'object-[70%_center]',
  },
]
