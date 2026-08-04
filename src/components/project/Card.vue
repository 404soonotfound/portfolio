<script setup lang="ts">
import type { Project } from "@/types/projects";
import { useIsMobile } from "@/composables/useIsMobile.ts";

import Tag from "@/components/common/Tag.vue";
import Image from "@/components/common/Image.vue";
import BaseButton from "@/components/common/BaseButton.vue";

const isMobile = useIsMobile();

const props = defineProps<{
  project: Project;
  index: number;
}>();
</script>
<template>
  <div
    class="flex align-center gap-14"
    :class="{ 'flex-col-reverse': isMobile }"
  >
    <div class="flex flex-col gap-4">
      <div class="flex align-center gap-2 flex-wrap">
        <span class="text-caption-medium text-brand-primary">{{
          index + 1 >= 10 ? index + 1 : `0${index + 1}`
        }}</span>
        <span class="text-caption text-tertiary">
          {{ project.category }} {{ project.period }}
        </span>
      </div>
      <h2 class="text-heading-2">{{ project.title }}</h2>
      <p class="text-body-default text-brand-primary">
        {{ project.subtitle }}
      </p>
      <p class="text-body-default text-secondary">{{ project.summary }}</p>

      <div class="flex flex-wrap py-5">
        <Tag
          v-if="project.techStack?.length > 0"
          variant="skill"
          v-for="(stack, i) in project.techStack"
          :key="i"
          class="mr-2 mb-2"
        >
          {{ stack.name }}
        </Tag>
      </div>

      <BaseButton theme="transparent">
        <span>자세히 보기</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M4.08333 4.08331H9.91667V9.91665"
            stroke="#94A3B8"
            stroke-width="1.16667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.08333 9.91665L9.91667 4.08331"
            stroke="#94A3B8"
            stroke-width="1.16667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </BaseButton>
    </div>
    <Image
      :src="project.thumbnail"
      :alt="project.thumbnailAlt"
      :full="isMobile"
    />
  </div>
</template>
<style scoped></style>
