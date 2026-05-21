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
    <section className="px-4 py-4 sm:px-6 lg:px-10 lg:py-6">
      <div className="mx-auto max-w-[1700px] rounded-[2rem] border border-white/40 bg-white/40 p-6 shadow-lg shadow-black/5 backdrop-blur-md sm:p-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#6d7d3e]">
              Order History
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-stone-950">
              Recent Orders
            </h2>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-black/5">
          {orders.map((order) => (
            <div
              key={order.id}
              className="flex flex-col gap-5 border-b border-black/5 bg-white/40 p-5 last:border-b-0 lg:flex-row lg:items-center lg:justify-between"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#405821]">
                  {order.id}
                </p>

                <h3 className="mt-2 text-lg font-semibold text-stone-950">
                  {order.item}
                </h3>

                <p className="mt-1 text-sm text-stone-500">{order.date}</p>
              </div>

              <div className="flex items-center gap-4">
                <span className="rounded-full bg-[#405821]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#405821]">
                  {order.status}
                </span>

                <p className="text-lg font-semibold text-stone-950">
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
