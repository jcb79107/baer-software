type ProductBase = {
  id: string;
  name: string;
  description: string;
};

export type Product = ProductBase &
  (
    | {
        status: "available";
        url: string;
        cta: string;
        githubUrl?: string;
      }
    | {
        status: "in-development";
      }
  );

export const products: Product[] = [
  {
    id: "linear-pointing",
    name: "Linear Pointing",
    status: "available",
    description:
      "Planning poker for Linear teams. Prepare an issue agenda, estimate privately, and save estimates and refinement notes back to Linear.",
    url: "https://public-linear-pointing.vercel.app",
    cta: "Try Linear Pointing",
    githubUrl: "https://github.com/jcb79107/linear-pointing",
  },
  {
    id: "the-two-man",
    name: "The Two Man",
    status: "available",
    description:
      "The home of The Two Man golf tournament. Follow match results, team standings, and the playoff bracket throughout the competition.",
    url: "https://www.thetwoman.site",
    cta: "Visit The Two Man",
  },
  {
    id: "golf-commissioner",
    name: "Golf Commissioner",
    status: "in-development",
    description:
      "Manage season-long golf leagues and tournaments, including teams, schedules, results, standings, and playoffs.",
  },
];
