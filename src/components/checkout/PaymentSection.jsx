import React from "react";
import { motion } from "framer-motion";

const PAYMENT_METHODS = [
  { id: "stripe", name: "Credit / Debit Card", icon: "💳" },
  { id: "upi", name: "UPI / Google Pay", icon: "📱" },
  { id: "applepay", name: "Apple Pay", icon: "🍎" },
  { id: "razorpay", name: "Razorpay / Net Banking", icon: "🏦" },
];

const PaymentSection = ({ selectedMethod, onSelect }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-serif text-[#e2e2d5] tracking-wide">
        Payment Method
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PAYMENT_METHODS.map((method) => (
          <motion.div
            key={method.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(method.id)}
            className={`
              cursor-pointer p-4 border transition-all duration-300 flex items-center justify-between
              ${
                selectedMethod === method.id
                  ? "border-[#e2e2d5] bg-[#3d4039]/30"
                  : "border-[#3d4039] bg-transparent hover:border-[#3d4039]/60"
              }
            `}
          >
            <div className="flex items-center space-x-4">
              <span className="text-2xl">{method.icon}</span>
              <span className="text-sm font-light tracking-widest uppercase text-[#e2e2d5]">
                {method.name}
              </span>
            </div>
            <div
              className={`
              w-4 h-4 rounded-full border flex items-center justify-center
              ${selectedMethod === method.id ? "border-[#e2e2d5]" : "border-[#3d4039]"}
            `}
            >
              {selectedMethod === method.id && (
                <div className="w-2 h-2 rounded-full bg-[#e2e2d5]" />
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {selectedMethod === "stripe" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 border border-[#3d4039] bg-[#1a1c18]/50 mt-4 rounded-sm"
        >
          <p className="text-xs text-[#e2e2d5]/60 italic">
            Secure payment processing via Stripe. All data is encrypted.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default PaymentSection;
