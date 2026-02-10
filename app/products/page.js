// app/products/page.js
import ProductHero from "./ProductHero";
import ProductGrid from "./ProductsGrid"; // 👈 matches the actual filename

export const metadata = {
  title: "EdgeLuxe Product Catalog - All Products",
  description:
    "Complete EdgeLuxe product catalog: Fabricated channel letters (LP1, LP3.1, LP3.2, LP5), cast block acrylic (LP11 series), and cabinet signs. German-engineered UL-listed signage for professionals.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <ProductHero />
      <ProductGrid
        title="Complete EdgeLuxe Catalog"
        subtitle="German-engineered precision signage — UL-listed components, IP67 waterproof, 24–48h quotes, ~21-day delivery, 3-year warranty."
      />
    </main>
  );
}
