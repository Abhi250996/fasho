import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Music2, Phone } from "lucide-react";

const luxuryEase = [0.22, 1, 0.36, 1];

const navigationLinks = [
  "Home",
  "Men",
  "Women",
  "Collections",
  "New Arrivals",
  "About",
  "Contact",
];

const supportLinks = [
  "FAQs",
  "Shipping & Returns",
  "Order Tracking",
  "Privacy Policy",
  "Terms & Conditions",
];

const contactItems = [
  { icon: Mail, text: "studio@fasho.com" },
  { icon: Phone, text: "+1 (212) 555-0188" },
  { icon: MapPin, text: "42 Atelier Row, New York" },
  { icon: Clock, text: "Mon - Sat, 10AM - 7PM" },
];

const paymentMethods = [
  "Visa",
  "Mastercard",
  "PayPal",
  "Apple Pay",
  "Google Pay",
];

const socialLinks = [
  { icon: InstagramIcon, label: "Instagram" },
  { icon: Music2, label: "TikTok" },
  { icon: FacebookIcon, label: "Facebook" },
];

function InstagramIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect
        width="17"
        height="17"
        x="3.5"
        y="3.5"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="3.8" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M14.2 8.3V6.7c0-.8.5-1.1 1.2-1.1h1.7V2.8c-.8-.1-1.6-.2-2.4-.2-2.4 0-4 1.5-4 4v1.7H8v3.1h2.7v8h3.5v-8h2.7l.4-3.1h-3.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PinterestIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12 3.5c-4.5 0-7.5 3.1-7.5 6.9 0 2.3 1.3 4 3.1 4.7.3.1.5 0 .6-.4l.3-1.2c.1-.3 0-.4-.2-.7-.6-.7-.9-1.5-.9-2.4 0-2.7 2-5 5.3-5 2.9 0 4.7 1.8 4.7 4.4 0 3.2-1.6 5.4-3.6 5.4-1.1 0-1.9-.9-1.6-2l.7-2.8c.2-.9 0-1.7-.9-1.7-1 0-1.8 1-1.8 2.3 0 .8.3 1.4.3 1.4l-1.2 5.1c-.3 1.2-.2 2.7-.1 3.6.1.3.5.4.7.1.5-.7 1.3-2 1.6-3.1l.5-2c.6 1 1.7 1.7 3.1 1.7 4 0 6.4-3.6 6.4-8 0-3.8-3.2-6.3-7.5-6.3Z"
        fill="currentColor"
      />
    </svg>
  );
}

function FooterLink({ children }) {
  return (
    <a
      href="#home"
      className="group relative w-fit text-sm font-semibold text-stone-700 transition duration-300 hover:text-[#405821]"
    >
      {children}
      <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#405821] transition-all duration-300 group-hover:w-full" />
    </a>
  );
}

function SocialButton({ icon: Icon, label }) {
  return (
    <motion.a
      href="#home"
      whileHover={{ y: -3, scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className="grid size-11 place-items-center rounded-full border border-[#405821]/20 bg-white/38 text-[#405821] shadow-lg shadow-[#39461e]/7 backdrop-blur-md transition duration-300 hover:bg-[#405821] hover:text-white hover:shadow-[#405821]/25"
      aria-label={label}
    >
      <Icon className="size-5 stroke-[1.8]" />
    </motion.a>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#e7e2ca] px-3 pt-6 text-stone-950 sm:px-6 lg:px-10 lg:pt-10">
      <div className="mx-auto max-w-[1500px] rounded-2xl border border-black/5 bg-white/50 shadow-md">
        {/* MAIN CONTENT */}
        <div className="grid grid-cols-2 gap-6 px-4 py-5 sm:px-6 md:grid-cols-4 lg:grid-cols-5 lg:gap-8 lg:px-8 lg:py-8">
          {/* BRAND */}
          <div className="col-span-2 lg:col-span-2">
            <a
              href="#home"
              className="text-2xl font-black tracking-tight text-stone-950 sm:text-3xl"
            >
              FASHO.
            </a>

            <p className="mt-3 max-w-sm text-xs leading-6 text-stone-700 sm:text-sm">
              Timeless essentials crafted for modern living with premium fabrics
              and elevated aesthetics.
            </p>

            {/* SOCIAL */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {socialLinks.map((item) => (
                <SocialButton key={item.label} {...item} />
              ))}

              <SocialButton icon={PinterestIcon} label="Pinterest" />
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="text-sm font-semibold text-stone-950 sm:text-base">
              Navigate
            </h3>

            <div className="mt-3 flex flex-col gap-2">
              {navigationLinks.map((link) => (
                <FooterLink key={link}>{link}</FooterLink>
              ))}
            </div>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-sm font-semibold text-stone-950 sm:text-base">
              Support
            </h3>

            <div className="mt-3 flex flex-col gap-2">
              {supportLinks.map((link) => (
                <FooterLink key={link}>{link}</FooterLink>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h3 className="text-sm font-semibold text-stone-950 sm:text-base">
              Contact
            </h3>

            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {contactItems.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-2">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#405821] text-white">
                    <Icon className="size-3.5" />
                  </span>

                  <p className="min-w-0 break-words text-xs leading-5 text-stone-700 sm:text-sm">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col gap-2 border-t border-black/5 px-4 py-3 text-center sm:px-6 md:flex-row md:items-center md:justify-between md:text-left lg:px-8">
          <p className="text-[11px] text-stone-600">
            © 2026 FASHO. All rights reserved.
          </p>

          <p className="text-[8px] font-bold uppercase tracking-[0.1em] text-[#405821]">
            Editorial essentials for modern luxury
          </p>
        </div>
      </div>
    </footer>
  );
}
