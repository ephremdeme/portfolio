export type Experience = {
  company: string;
  role: string;
  timeframe: string;
  location: string;
  summary: string;
  achievements: string[];
  tech: string[];
  link?: string;
};

export const experiences: Experience[] = [
  {
    company: "BoxExchanger",
    role: "Backend Developer",
    timeframe: "Feb 2023 – Present",
    location: "Remote",
    summary: "Building crypto exchange infrastructure and automated Uniswap V3 liquidity operations.",
    achievements: [
      "Reduced manual LP management by 95% via custom automation",
      "Added live ROI dashboards with telemetry into Grafana/Prometheus",
      "Shipped custody-safe withdrawal engine with TypeScript guardrails",
    ],
    tech: ["Node.js", "TypeScript", "AWS", "Uniswap SDK", "GraphQL"],
    link: "https://boxexchanger.net",
  },
  {
    company: "Addis Software",
    role: "Full Stack Developer",
    timeframe: "Apr 2021 – Feb 2023",
    location: "Addis Ababa · Hybrid",
    summary: "Led AffCollect and YegnaHome products end-to-end with measurable revenue impact.",
    achievements: [
      "Rebuilt AffCollect into microservices for 90% operations efficiency",
      "Integrated Google Analytics + 1Password SDK contributions",
      "Launched payments, reviews, verification, caching for YegnaHome (5x engagement)",
    ],
    tech: ["Next.js", "Node.js", "Kafka", "PostgreSQL", "Redis"],
    link: "https://addissoftware.com",
  },
  {
    company: "Yellow Card Financial",
    role: "Backend Developer",
    timeframe: "Mar 2020 – Apr 2021",
    location: "Remote",
    summary: "Delivered admin and KYC systems to scale pan-African crypto operations.",
    achievements: [
      "Implemented microservices in Node.js/TypeScript with AWS DynamoDB",
      "Improved onboarding throughput by 35% with Cognito automation",
      "Hardened compliance workflows with role-based audit logging",
    ],
    tech: ["Node.js", "TypeScript", "AWS", "DynamoDB", "Cognito"],
    link: "https://yellowcard.io",
  },
  {
    company: "2F-Capital",
    role: "Front End Developer",
    timeframe: "Oct 2019 – Apr 2020",
    location: "Addis Ababa",
    summary: "Owned admin portals for Sewasew and Ride+ corp management.",
    achievements: [
      "Built TypeScript/React admin for content, subscriptions, analytics",
      "Implemented VictoryJS dashboards for driver subscriptions",
    ],
    tech: ["React", "TypeScript", "Redux", "Material UI"],
    link: "https://2f-capital.com",
  },
  {
    company: "UpScale",
    role: "Junior Full Stack Developer",
    timeframe: "Apr 2019 – Aug 2019",
    location: "Addis Ababa",
    summary: "Delivered Node.js backend for LMS and full-stack admin for Adama FC.",
    achievements: [
      "Improved media management for Adama FC by 40% faster publishing",
      "Developed multi-tenant LMS modules for high schools",
    ],
    tech: ["Node.js", "Vue", "PostgreSQL"],
  },
  {
    company: "ASTU ICT Center",
    role: "Intern + ACM-ICPC Competitive Programmer",
    timeframe: "Jan 2019 – Oct 2019",
    location: "Adama",
    summary: "Built student info systems and coached data structure bootcamps.",
    achievements: [
      "Delivered Java EE + Spring SIS on PostgreSQL",
      "Organized ACM-ICPC practice contests and mentored peers",
    ],
    tech: ["Java", "Spring", "PostgreSQL", "Python"],
  },
];
