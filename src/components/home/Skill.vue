<script setup lang="ts">
import { computed } from "vue";
import { projects } from "@/data/projects.ts";
import type { ProjectSkill, SkillArea } from "@/types/projects";

import Tag from "@/components/common/Tag.vue";

const sectionDefinitions = [
  {
    id: "frontend",
    title: "실무 프론트엔드",
  },
  {
    id: "publishing",
    title: "업무 시스템 · 퍼블리싱",
  },
  {
    id: "personal",
    title: "개인 프로젝트 · 학습",
  },
  {
    id: "backend",
    title: "백엔드 · 데이터 연동 경험",
  },
  {
    id: "infra",
    title: "인프라 · 협업",
  },
] satisfies {
  id: SkillArea;
  title: string;
}[];

const allSkills = projects.flatMap<ProjectSkill>(
  (project) => project.techStack,
);

const sections = computed(() => {
  const res = sectionDefinitions.map((section) => ({
    ...section,

    skills: [
      ...new Set(
        allSkills
          .filter((skill) => skill.areas.includes(section.id))
          .map((skill) => skill.name),
      ),
    ],
  }));

  return res;
});
</script>

<template>
  <div class="bg-card border-y">
    <section class="section">
      <span class="section-label mb-2">Skills</span>

      <h1 class="text-heading-1 mb-2">기술 경험</h1>

      <p class="text-body-default text-secondary">
        실무에서 사용한 기술과 개인 프로젝트에서 적용한 기술을 영역별로
        정리했습니다.
      </p>

      <div class="skill-sections pt-12">
        <article
          v-for="section in sections"
          :key="section.id"
          class="skill-section"
        >
          <h2 class="text-caption-medium text-tertiary mb-3">
            {{ section.title }}
          </h2>

          <div class="skill-list">
            <Tag v-for="skill in section.skills" :key="skill" variant="skill">
              {{ skill }}
            </Tag>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.skill-sections {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
}
</style>
