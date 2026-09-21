import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const available = product.status === "available";

  return (
    <article
      aria-labelledby={`${product.id}-title`}
      className={`product-card ${available ? "product-card-available" : ""}`}
    >
      <div className="grid gap-5 md:grid-cols-[0.9fr_1.2fr] md:gap-12">
        <div>
          <h2 id={`${product.id}-title`} className="product-name">
            {product.name}
          </h2>
          <p className={`mt-3 text-sm ${available ? "text-ink" : "text-muted"}`}>
            {available ? "Available now" : "In development"}
          </p>
        </div>
        <div>
          <p className="leading-[1.75] text-muted">{product.description}</p>
          {product.status === "available" && (
            <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a className="button" href={product.url}>
                {product.cta} <span aria-hidden="true">↗</span>
              </a>
              {product.githubUrl && (
                <a className="text-link" href={product.githubUrl}>
                  View on GitHub <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
