export type SkillArea =
  | "frontend"
  | "publishing"
  | "personal"
  | "backend"
  | "infra";

export interface ProjectSkill {
  name: string;
  areas: SkillArea[];
}

export interface ProjectLink {
  label: string;
  url: string;
}

export type ProjectSection =
  // 일반 목록 섹션
  | {
      id: string;
      title: string;
      type?: "list";
      items: string[];
    }
  // 강조 문구 섹션
  | {
      id: string;
      title: string;
      type: "callout";
      description: string;
    };

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  period: string;

  summary: string; // 홈 프로젝트 카드
  description: string; // 상세 본문

  thumbnail: string;
  thumbnailAlt: string;

  coverImage: string;
  coverImageAlt: string;

  techStack: ProjectSkill[];
  sections: ProjectSection[];
  links?: ProjectLink[];
}
