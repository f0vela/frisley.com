export interface IMetaHead {
  title: string;
  description: string;
  ogImageUrl: string;
}

export interface IHeroProps {
  name: string;
  about: string;
}

export interface IExperience {
  name: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}
export interface IExperiences {
  title: string;
  details: IExperience[];
}

export interface IKnowledge {
  name: string;
  percentage: string;
  borderColor: string;
  category: string;
  logoUrl: string;
  description: string[];
}

export interface IKnowledges {
  title: string;
  borderColor: string;
  percentage: number;
  details: IKnowledge[];
}

export interface IProject {
  id: string;
  title: string;
  type: string;
  year: string;
  isFeatured: boolean;
  thumbnail: string;
  gallery: string[];
  githubUrl: string;
  liveUrl: string;
  description: string;
}
export interface IProjects {
  projects: IProject[];
}

export interface IMProjects {
  mobile_projects: IProject[];
}
export interface IDProjects {
  desktop_projects: IProject[];
}
export interface IProjectDetails {
  projectDetail: IProject;
}
