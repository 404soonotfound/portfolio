export interface ExperienceBase {
  id: string;
  company: string;
  period: string;
}

export interface ExperienceProject {
  title: string;
  status: string;
  period: string;
  team: string;
  description: string;
}

export interface ExperienceRole {
  title: string;
  period: string;
  team: string;
  description: string;
  current: boolean;
}

export type Experience =
  | (ExperienceBase & {
      variant: "project";
      headline: string;
      description: string;
      projects: ExperienceProject[];
      note: string;
    })
  | (ExperienceBase & {
      variant: "timeline";
      roles: ExperienceRole[];
    });
