export interface Course {
  slug: string;
  id: number;
  title: string;
  description: string;
  media: Medium[];
  cta_text: CtaText;
  sections: Section[];
  checklist: Checklist[];
  seo: Seo;
}

export interface Medium {
  type: string;
  url: string;
  title?: string;
}

export interface CtaText {
  text: string;
}

export interface Seo {
  title: string;
  meta_description: string;
}

export type Section =
  | InstructorSection
  | FeaturesSection
  | PointersSection
  | AboutSection;

export interface BaseSection {
  type: 'instructor' | 'features' | 'pointers' | 'about';
  title: string;
}

export interface InstructorSection extends BaseSection {
  type: 'instructor';
  instructors: Instructor[];
}

export interface Instructor {
  name: string;
  image: string;
  designation: string;
}

export interface FeaturesSection extends BaseSection {
  type: 'features';
  features: Feature[];
}

export interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface Pointer {
  title: string;
  description: string;
}

export interface PointersSection extends BaseSection {
  type: 'pointers';
  pointers: Pointer[];
}

export interface AboutSection extends BaseSection {
  type: 'about';
  content: string;
}

export interface Checklist {
  text: string;
}