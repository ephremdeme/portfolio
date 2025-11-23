export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Ephrem was instrumental in building AffCollect from the ground up, helping us achieve a $10 million valuation. His optimizations improved affiliate data aggregation speed by 10x using concurrency and message queues, delivering 99% accuracy far superior to competitors.",
    author: "Magnus Karnéus Hall",
    role: "Founder, AffCollect",
  },
];
