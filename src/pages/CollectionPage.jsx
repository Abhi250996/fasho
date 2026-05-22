import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import Footer from "../components/layout/Footer";
import { collectionConfig } from "../config/collectionConfig";

import CollectionBanner from "../components/collection/CollectionBanner";
import CollectionShopSection from "../components/collection/CollectionShopSection";

export default function CollectionPage() {
  const { type } = useParams();

  const normalizedType = type === "new-in" ? "new_in" : type;

  const currentCollection =
    collectionConfig[normalizedType] || collectionConfig.men;

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [selectedSort, setSelectedSort] = useState("Newest");

  /* CATEGORIES */
  const categories = currentCollection.categories.map((category) => ({
    name: category,

    count:
      category === "All"
        ? currentCollection.products.length
        : currentCollection.products.filter(
            (product) => product.category === category,
          ).length,
  }));

  /* FILTER + SORT */
  const filteredProducts = useMemo(() => {
    let products = [...currentCollection.products];

    // CATEGORY FILTER
    if (selectedCategory !== "All") {
      products = products.filter(
        (product) => product.category === selectedCategory,
      );
    }

    // SORTING
    if (selectedSort === "Price Low") {
      products.sort(
        (a, b) =>
          Number(a.price.replace("$", "")) - Number(b.price.replace("$", "")),
      );
    }

    if (selectedSort === "Price High") {
      products.sort(
        (a, b) =>
          Number(b.price.replace("$", "")) - Number(a.price.replace("$", "")),
      );
    }

    return products;
  }, [currentCollection.products, selectedCategory, selectedSort]);

  return (
    <main
      className={`min-h-screen ${currentCollection.pageBackground} text-stone-950`}
    >
      {/* BANNER */}
      <CollectionBanner
        brand={currentCollection.brand}
        headingPrimary={currentCollection.headingPrimary}
        headingSecondary={currentCollection.headingSecondary}
        subtitle={currentCollection.subtitle}
        image={currentCollection.image}
        background={currentCollection.background}
        glow={currentCollection.glow}
        accent={currentCollection.accent}
      />

      {/* SHOP SECTION */}
      <CollectionShopSection
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
        filteredProducts={filteredProducts}
        sortOptions={currentCollection.sortOptions}
        luxuryCard={currentCollection.luxuryCard}
        accent={currentCollection.accent}
      />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
