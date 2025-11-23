export type Project = {
  slug: string;
  name: string;
  description: string;
  impact: string[];
  tech: string[];
  links: { label: string; href: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "boxexchanger",
    name: "BoxExchanger Liquidity Automation",
    description:
      "Crypto exchange core services plus automated Uniswap V3 liquidity rebalancing built with Node.js, TypeScript, and AWS Lambda.",
    impact: [
      "30% tighter spreads across ETH/USDC pools",
      "24/7 autonomous tick rebalancing with custom risk bands",
      "Live Grafana visibility for ROI and pool depth",
    ],
    tech: ["Node.js", "TypeScript", "Uniswap V3 SDK", "AWS Lambda", "DynamoDB"],
    links: [
      { label: "Company", href: "https://boxexchanger.net" },
      { label: "Case Study", href: "#contact" },
    ],
    featured: true,
  },
  {
    slug: "affcollect",
    name: "AffCollect Intelligence Platform",
    description:
      "Aggregated high-volume affiliate revenue data via a microservice mesh with concurrency, message queues, and advanced caching.",
    impact: [
      "10x faster aggregation with MQ fan-out",
      "90% boost in analyst efficiency",
      "$10M product valuation achieved",
    ],
    tech: ["Node.js", "TypeScript", "GraphQL", "Kafka", "MongoDB"],
    links: [
      { label: "Product", href: "https://affcollect.com" },
      { label: "Testimonial", href: "#testimonials" },
    ],
    featured: true,
  },
  {
    slug: "yegnahome",
    name: "YegnaHome Rentals",
    description:
      "Vacation rental marketplace for Ethiopia with trust features, caching, and analytics-driven engagement loops.",
    impact: [
      "5x user engagement through reviews + verification",
      "60% faster media delivery via S3 caching",
      "Payments, ratings, SMS/email flows deployed",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Redis", "AWS S3"],
    links: [{ label: "Platform", href: "https://yegnahome.com" }],
  },
  {
    slug: "ar-commerce",
    name: "AR Commerce Platform",
    description:
      "Multi-vendor AR shopping experience with React web, Flutter mobile, and GraphQL refresh token API.",
    impact: ["Awarded best project at ASTU", "A+ academic grade", "Real-time 3D previews for 120+ SKUs"],
    tech: ["React", "GraphQL", "PostgreSQL", "Flutter", "Node.js"],
    links: [{ label: "Presentation", href: "#projects" }],
  },
  {
    slug: "voting-chain",
    name: "Blockchain Voting",
    description:
      "Python-based blockchain for club elections with mining, transactions, and broadcast gossip layer.",
    impact: ["Trusted for campus elections", "Recognized by Dean", "Open sourced on GitHub"],
    tech: ["Python", "Flask", "Blockchain"],
    links: [{ label: "GitHub", href: "https://github.com/ephremdeme/voting" }],
  },
];
