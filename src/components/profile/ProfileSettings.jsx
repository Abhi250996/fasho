import { Bell, Lock, LogOut, ChevronRight } from "lucide-react";

const settings = [
  {
    icon: Bell,
    title: "Notifications",
    description: "Manage updates and alerts",
  },

  {
    icon: Lock,
    title: "Security",
    description: "Password and authentication",
  },

  {
    icon: LogOut,
    title: "Logout",
    description: "Sign out from account",
  },
];

export default function ProfileSettings() {
  return (
    <section className="px-3 pb-10 pt-3 sm:px-5 lg:px-8 lg:pb-16">
      <div className="mx-auto max-w-[1600px] rounded-2xl border border-white/40 bg-white/50 p-4 shadow-lg shadow-black/5 sm:p-6 lg:p-7">
        {/* HEADER */}
        <div>
          <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-[#6d7d3e] sm:text-[9px]">
            Preferences
          </p>

          <h2 className="mt-1 text-2xl font-semibold text-stone-950 sm:text-3xl">
            Account Settings
          </h2>
        </div>

        {/* SETTINGS */}
        <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {settings.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.title}
                className="group flex items-center justify-between rounded-2xl border border-black/5 bg-white/60 p-4 text-left shadow-sm transition duration-300 hover:bg-white hover:shadow-md sm:p-5"
              >
                {/* LEFT */}
                <div className="flex min-w-0 items-center gap-3">
                  {/* ICON */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#405821]/10 text-[#405821] sm:h-11 sm:w-11">
                    <Icon className="size-4 sm:size-5" />
                  </div>

                  {/* CONTENT */}
                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-semibold text-stone-950 sm:text-base">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-stone-500 sm:text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* RIGHT ICON */}
                <ChevronRight className="size-4 shrink-0 text-stone-400 transition duration-300 group-hover:translate-x-1 group-hover:text-[#405821]" />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
