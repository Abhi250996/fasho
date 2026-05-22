import Footer from "../components/layout/Footer";

import ProfileHero from "../components/profile/ProfileHero";
import ProfileQuickActions from "../components/profile/ProfileQuickActions";
import ProfileOrders from "../components/profile/ProfileOrders";
import ProfileWishlist from "../components/profile/ProfileWishlist";
import ProfileSettings from "../components/profile/ProfileSettings";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-[#ecead7] pt-10 text-stone-950">
      <ProfileHero />

      <ProfileQuickActions />

      <ProfileOrders />

      <ProfileWishlist />

      <ProfileSettings />

      <Footer />
    </main>
  );
}
