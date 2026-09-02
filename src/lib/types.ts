export type ImageAspect = "landscape" | "portrait" | "square" | "full-bleed";

export interface ProjectImage {
  aspect: ImageAspect;
  label: string;
  caption?: string;
}

export interface SplitSection {
  heading: string;
  body: string;
  image?: ProjectImage;
}

export interface DecisionItem {
  heading: string;
  body: string;
}

export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  year: string;
  role?: string;
  timeline?: string;
  team?: string;
  client?: string;
  nda?: boolean;
  summary: string;
  indexNote: string;
  heroImage?: ProjectImage;

  overview?: string;
  challenge?: string;
  context?: string;
  research?: string;
  insights?: string[];
  userFlows?: ProjectImage;
  wireframes?: ProjectImage;
  designDecisions?: DecisionItem[];
  visualDesign?: SplitSection;
  designSystem?: SplitSection;
  finalSolution?: string;
  gallery?: ProjectImage[];
  impact?: string[];
  reflection?: string;
}
