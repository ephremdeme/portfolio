export type SkillCategory = {
  title: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    title: "Backend",
    items: ["Node.js", "TypeScript", "Python", "GraphQL", "Microservices", "MongoDB", "PostgreSQL", "Redis", "DynamoDB", "Serverless", "Kafka", "Web Scraping"],
  },
  {
    title: "Frontend",
    items: ["React", "Vue", "Next.js", "Redux", "Material UI", "Ant Design", "Redux-Saga", "Styled Components", "Firebase", "TDD"],
  },
  {
    title: "DevOps",
    items: ["Git", "Docker", "AWS", "GitLab CI/CD", "NGINX", "LocalStack", "AWS SAM"],
  },
  {
    title: "Soft & Extras",
    items: ["Collaborative", "Curious", "Detail-Oriented", "Competitive Programming"],
  },
];
