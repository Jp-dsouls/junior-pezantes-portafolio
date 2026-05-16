export interface ProjectFeature {
  titleEs: string;
  titleEn: string;
  descriptionEs: string;
  descriptionEn: string;
  icon?: string;
}

export interface Project {
  id: string;
  titleEs: string;
  titleEn: string;
  descriptionEs: string;
  descriptionEn: string;
  descriptionLongEs: string;
  descriptionLongEn: string;
  technologies: string[];
  image: string;
  mobileImage?: string;
  images?: string[];
  features?: ProjectFeature[];
  link?: string;
  github?: string;
  year: number;
  status?: 'finished' | 'inProgress' | 'disabled';
}

export interface Experience {
  id: string;
  companyEs: string;
  companyEn: string;
  positionEs: string;
  positionEn: string;
  descriptionEs: string;
  descriptionEn: string;
  startDate: string;
  endDate?: string;
  technologies: string[];
  current?: boolean;
}

export interface Skill {
  category: string;
  skills: string[];
}

export interface Certification {
  id: string;
  nameEs: string;
  nameEn: string;
  issuerEs: string;
  issuerEn: string;
  date: string;
  url?: string;
  type: 'education' | 'certification';
}
