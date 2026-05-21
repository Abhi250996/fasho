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
    <footer className="relative overflow-hidden bg-[#e7e2ca] px-5 pt-20 text-stone-950 sm:px-8 sm:pt-24 lg:px-14 lg:pt-28">
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#ecead7] via-[#e7e2ca]/95 to-transparent" />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 18, 0], y: [0, -18, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-10%] top-20 h-96 w-96 rounded-full bg-[#cdd5a6]/42 blur-2xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -16, 0], y: [0, 20, 0] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-[#dbc5a4]/48 blur-2xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.95, ease: luxuryEase }}
        className="relative mx-auto max-w-[1620px] overflow-hidden rounded-2xl border border-white/45 bg-white/30 shadow-2xl shadow-[#39461e]/12 backdrop-blur-md"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(255,255,255,0.58),transparent_32%),linear-gradient(135deg,rgba(242,237,214,0.7),rgba(221,226,187,0.42),rgba(236,218,194,0.5))]" />

        <div className="relative grid gap-10 px-6 py-12 sm:px-8 sm:py-14 md:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_0.95fr_1.1fr_0.95fr] lg:gap-9 xl:gap-12 xl:px-12 xl:py-16">
          <div>
            <a
              href="#home"
              className="text-4xl font-black tracking-tight text-stone-950 transition duration-300 hover:text-[#405821]"
              aria-label="Fasho home"
            >
              FASHO.
            </a>
            <p className="mt-6 max-w-sm text-lg leading-8 text-stone-800">
              Timeless essentials crafted for modern living. Designed with
              restraint, shaped with premium fabrics, and made to move through
              every season.
            </p>
            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map((item) => (
                <SocialButton key={item.label} {...item} />
              ))}
              <SocialButton icon={PinterestIcon} label="Pinterest" />
            </div>
          </div>

          <div>
            <h3 className="font-serif text-2xl font-medium text-stone-950">
              Navigate
            </h3>
            <div className="mt-6 flex flex-col gap-4">
              {navigationLinks.map((link) => (
                <FooterLink key={link}>{link}</FooterLink>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-2xl font-medium text-stone-950">
              Support
            </h3>
            <div className="mt-6 flex flex-col gap-4">
              {supportLinks.map((link) => (
                <FooterLink key={link}>{link}</FooterLink>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-2xl font-medium text-stone-950">
              Contact
            </h3>
            <div className="mt-6 flex flex-col gap-5">
              {contactItems.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-start gap-4 text-stone-700"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#728341] text-white shadow-lg shadow-[#526632]/16">
                    <Icon className="size-4 stroke-[1.8]" />
                  </span>
                  <p className="pt-2 text-sm font-semibold leading-6">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-2xl font-medium text-stone-950">
              Payments
            </h3>
            <p className="mt-6 text-sm leading-7 text-stone-700">
              Secure checkout with premium global payment options.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {paymentMethods.map((method) => (
                <motion.span
                  key={method}
                  whileHover={{ y: -3 }}
                  className="rounded-full border border-[#405821]/15 bg-white/38 px-4 py-3 text-center text-xs font-extrabold uppercase tracking-[0.12em] text-stone-700 shadow-lg shadow-[#39461e]/6 backdrop-blur-md transition duration-300 hover:bg-[#405821] hover:text-white hover:shadow-[#405821]/20"
                >
                  {method}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-between gap-5 border-t border-[#526632]/15 px-6 py-6 text-center sm:px-8 md:flex-row md:text-left xl:px-12">
          <p className="text-sm font-semibold text-stone-700">
            © 2026 FASHO. All rights reserved.
          </p>
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#405821]">
            Editorial essentials for modern luxury
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
