export interface ItemAboutMeProps {
  src: string;
  alt: string;
  name: string;
  description: string;
}

export interface TestimonialBoxProps {
  id: string;
  className?: string;
  data: {
    avatar: string;
    name: string;
    title: string;
    testimonial: string;
  }[];
}

export type Testimonial = {
  avatar: string;
  name: string;
  title: string;
  testimonial: string;
};

export interface ItemExperienceProps {
  icon: React.ReactNode;
  company: string;
  title: string;
  date: string;
  description: string;
  jobdesk1: string;
  jobdesk2: string;
  jobdesk3: string;
  jobdesk4: string;
}

export interface ItemFooterProps {
  name: string;
  children: React.ReactNode;
}

export type NavbarProps = {
  href: string;
  children: React.ReactNode;
};

export interface PortfolioProps {
  src: string;
  alt: string;
  imgLogo: string;
  altLogo: string;
  projectName: string;
  shortBrief: string;
  projectTitle: string;
  technologies: string;
  situation: string;
  task: string;
  action: string;
  result: string;
}

export interface ItemSkillsSectionProps {
  src: string;
  alt: string;
}

export interface ItemTestimonialSectionProps {
  name: string;
  title: string;
  testimonial: string;
}

export interface ListItemFooterProps {
  href: string;
  children: React.ReactNode;
}

export interface ListSkillsProps {
  nameSkill: string;
  description: string;
  listApps: React.ReactNode; // or whatever type listApps should be
}
