type ProductBase = {
  id: string;
  name: string;
  category: string;
  headline: string;
  description: string;
  note?: string;
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
    category: "For the working day",
    status: "available",
    headline: "Better refinement and estimation for Linear teams.",
    description:
      "Pull Linear issues into a grooming agenda, estimate privately, and make refinement decisions together. Write estimates and notes back to Linear without bouncing between tools.",
    url: "https://public-linear-pointing.vercel.app",
    cta: "Try Linear Pointing",
    githubUrl: "https://github.com/jcb79107/linear-pointing",
  },
  {
    id: "golf-commissioner",
    name: "Golf Commissioner",
    category: "For time on the course",
    status: "in-development",
    headline: "Run your golf league without the spreadsheet.",
    description:
      "A lightweight tool for custom, season-long golf leagues and tournaments. Teams, schedules, results, standings, playoffs, and commissioner controls in one place.",
    note: "Growing out of software built to run a real golf tournament, The Two Man.",
  },
];
