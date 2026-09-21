import { ProductCard } from "@/components/product-card";
import { products } from "@/data/products";

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <h1 className="wordmark">
          Baer Software<span className="wordmark-dot" aria-hidden="true">.</span>
        </h1>
        <a className="text-link header-link" href="https://github.com/jcb79107">
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="main" tabIndex={-1} className="grid gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </div>
  );
}
