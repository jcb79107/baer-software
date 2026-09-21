import type { Product } from "@/data/products";

export function ProductCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  const available = product.status === "available";

  return (
    <article
      aria-labelledby={`${product.id}-title`}
      className={`product-card ${available ? "product-card-available" : ""}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <span className="font-mono text-sm text-muted" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className={`status ${available ? "status-available" : ""}`}>
          {available && <span className="status-dot" aria-hidden="true" />}
          {available ? "Available now" : "In development"}
        </span>
      </div>

      <div className="mt-8 grid gap-7 md:mt-10 md:grid-cols-[0.9fr_1.2fr] md:gap-16">
        <div>
          <h3 id={`${product.id}-title`} className="product-name">
            {product.name}
          </h3>
          <p className="mt-3 text-sm text-muted">{product.category}</p>
        </div>
        <div>
          <p className="product-headline">{product.headline}</p>
          <p className="mt-4 leading-[1.75] text-muted">{product.description}</p>
          {product.note && (
            <p className="mt-6 border-l-2 border-line pl-4 text-sm leading-6 text-muted">
              {product.note}
            </p>
          )}
          {product.status === "available" && (
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
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
