import { Bell, Lock, LogOut } from "lucide-react";

export default function ProfileSettings() {
  return (
    <section className="px-4 pb-16 pt-4 sm:px-6 lg:px-10 lg:pb-24">
      <div className="mx-auto max-w-[1700px] rounded-[2rem] border border-white/40 bg-white/40 p-6 shadow-lg shadow-black/5 backdrop-blur-md sm:p-8">
        <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#6d7d3e]">
          Preferences
        </p>

        <h2 className="mt-3 text-3xl font-semibold text-stone-950">
          Account Settings
        </h2>

        <div className="mt-8 space-y-4">
          {[
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
              description: "Sign out from your account",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.title}
                className="flex w-full items-center justify-between rounded-[1.4rem] border border-black/5 bg-white/50 p-5 text-left transition duration-300 hover:bg-white"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#405821]/10 text-[#405821]">
                    <Icon className="size-5" />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-stone-950">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-stone-500">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="h-2 w-2 rounded-full bg-[#405821]" />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
