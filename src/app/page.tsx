import { ProductCard } from "@/components/product-card";
import { products } from "@/data/products";

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div>
          <h1 className="wordmark">Baer Software</h1>
        </div>
        <a className="text-link" href="https://github.com/jcb79107">
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="main" tabIndex={-1} className="grid gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </div>
  );
}
