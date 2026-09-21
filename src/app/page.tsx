import { ProductCard } from "@/components/product-card";
import { products } from "@/data/products";

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a href="#" className="wordmark" aria-label="Baer Software home">
          <span className="brand-mark" aria-hidden="true">b.</span>
          Baer Software
        </a>
        <nav aria-label="Main navigation" className="flex gap-6 sm:gap-9">
          <a href="#products" className="nav-link">Products</a>
          <a href="#about" className="nav-link">About</a>
        </nav>
      </header>

      <main id="main" tabIndex={-1}>
        <section className="hero" aria-labelledby="hero-title">
          <p className="eyebrow">An independent software studio</p>
          <h1 id="hero-title">
            Small, focused software
            <br />
            <span className="hero-serif">for work and life.</span>
          </h1>
          <div className="hero-bottom">
            <p className="max-w-[29rem] text-base leading-7 text-muted sm:text-lg">
              Independent software built by Jason Baer.
              <br className="hidden sm:block" />
              {" "}Useful tools, shaped by real problems.
            </p>
            <a href="#products" className="text-link shrink-0">
              Explore the products <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        <section id="products" aria-labelledby="products-title" className="products-section">
          <div className="section-heading">
            <h2 id="products-title" className="eyebrow">The products</h2>
            <p className="text-sm text-muted">Built from firsthand experience.</p>
          </div>
          <div className="grid gap-5">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </section>

        <section id="about" aria-labelledby="about-title" className="about-section">
          <div>
            <h2 id="about-title" className="eyebrow">The person behind it</h2>
            <p className="mt-5 text-sm text-muted">One person. A few useful tools.</p>
          </div>
          <div>
            <p className="about-intro">Hi, I’m Jason.</p>
            <p className="mt-5 leading-[1.8] text-muted">
              Baer Software is my independent software studio. I build around
              problems I encounter myself, use what I make, and turn the useful
              ones into products other people can use.
            </p>
            <p className="mt-5 leading-[1.8] text-muted">
              The approach is simple: keep it small, ship it, and let real usage
              decide what deserves more investment.
            </p>
            <p className="signature mt-7">Jason Baer</p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <p className="font-semibold tracking-tight">Baer Software</p>
          <p className="mt-2 text-sm text-muted">Independent software by Jason Baer.</p>
        </div>
        <a className="text-link" href="https://github.com/jcb79107">
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </footer>
    </div>
  );
}
