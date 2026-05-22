const orders = [
  {
    id: "#FS1024",
    item: "Luxury Wool Coat",
    status: "Delivered",
    date: "12 March 2026",
    amount: "$264",
  },

  {
    id: "#FS1031",
    item: "Modern Essentials Hoodie",
    status: "Processing",
    date: "19 March 2026",
    amount: "$148",
  },

  {
    id: "#FS1038",
    item: "Premium Tailored Suit",
    status: "Shipped",
    date: "22 March 2026",
    amount: "$420",
  },
];

export default function ProfileOrders() {
  return (
    <section className="px-3 py-3 sm:px-5 lg:px-8 lg:py-5">
      <div className="mx-auto max-w-[1600px] rounded-2xl border border-white/40 bg-white/50 p-4 shadow-lg shadow-black/5 sm:p-6 lg:p-7">
        {/* HEADER */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-[#6d7d3e] sm:text-[9px]">
              Order History
            </p>

            <h2 className="mt-1 text-2xl font-semibold text-stone-950 sm:text-3xl">
              Recent Orders
            </h2>
          </div>

          {/* BUTTON */}
          <button className="w-fit rounded-full border border-black/5 bg-white px-4 py-2 text-[9px] font-bold uppercase tracking-[0.1em] text-stone-700 transition duration-300 hover:bg-[#405821] hover:text-white sm:px-5 sm:text-[10px]">
            View All
          </button>
        </div>

        {/* ORDERS */}
        <div className="mt-5 overflow-hidden rounded-2xl border border-black/5">
          {orders.map((order) => (
            <div
              key={order.id}
              className="grid gap-4 border-b border-black/5 bg-white/50 p-4 last:border-b-0 sm:grid-cols-2 lg:grid-cols-[1fr_auto] lg:items-center lg:px-5"
            >
              {/* LEFT */}
              <div className="min-w-0">
                {/* ORDER ID */}
                <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#405821]">
                  {order.id}
                </p>

                {/* PRODUCT */}
                <h3 className="mt-1 line-clamp-1 text-sm font-semibold text-stone-950 sm:text-base">
                  {order.item}
                </h3>

                {/* DATE */}
                <p className="mt-1 text-xs text-stone-500 sm:text-sm">
                  {order.date}
                </p>
              </div>

              {/* RIGHT */}
              <div className="flex items-center justify-between gap-3 sm:justify-end">
                {/* STATUS */}
                <span className="rounded-full bg-[#405821]/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.08em] text-[#405821] sm:px-4 sm:text-[10px]">
                  {order.status}
                </span>

                {/* AMOUNT */}
                <p className="text-base font-semibold text-stone-950 sm:text-lg">
                  {order.amount}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
