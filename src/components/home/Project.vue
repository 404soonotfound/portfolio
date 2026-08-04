<script setup lang="ts">
import { projects } from "@/data/projects.ts";
import ProjectCard from "@/components/project/Card.vue";
</script>
<template>
  <section class="section">
    <span class="section-label mb-2">Projects</span>
    <h1 class="text-heading-1 mb-2">주요 프로젝트</h1>
    <p class="text-body-default text-secondary pb-8">
      실제 서비스에서 담당한 프로젝트와 새로운 기술을 경험하기 위해 진행한 개인
      프로젝트입니다.
    </p>

    <router-link
      v-for="(project, i) in projects"
      :key="project.title"
      :to="{
        name: 'detail',
        params: { slug: project.id },
      }"
    >
      <ProjectCard class="py-8 border-top" :project="project" :index="i" />
    </router-link>
  </section>
</template>

<style scoped></style>
