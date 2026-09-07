<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { computed } from "vue";
import { projects } from "@/data/projects.ts";

import BaseButton from "@/components/common/BaseButton.vue";

const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  summary: {
    type: String,
    default: "",
  },
});

const router = useRouter();
const route = useRoute();

const currentIndex = computed(() => {
  const currentSlug = Array.isArray(route.params.slug)
    ? route.params.slug[0]
    : route.params.slug;

  return projects.findIndex((p) => p.id === currentSlug);
});

const onClick = () => {
  const nextIndex = currentIndex.value < 0 ? 0 : currentIndex.value + 1;
  const normalizedIndex = nextIndex >= projects.length ? 0 : nextIndex;

  const nextProject = projects[normalizedIndex];
  const nextId = nextProject?.id;

  if (!nextId) {
    return;
  }

  router.push({
    name: "detail",
    params: {
      slug: nextId,
    },
  });
};
</script>

<template>
  <div class="banner">
    <div class="banner_wrapper">
      <div class="banner__content">
        <span class="text-caption-medium text-tertiary">다음 프로젝트</span>
        <h3 class="text-h3">{{ props.name }}</h3>
        <p class="text-body-default text-secondary">{{ props.summary }}</p>
      </div>

      <BaseButton
        icon
        type="button"
        aria-label="다음 프로젝트로 이동"
        @click.stop.prevent="onClick"
      >
        <i class="icon-arrow-r" aria-hidden="true"></i>
      </BaseButton>
    </div>
  </div>
</template>

<style scoped>
.banner {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  gap: 48px;
  border-top: 1px solid var(--Border);
  background-color: var(--Background-Default);
}
.banner_wrapper {
  max-width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.banner__content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
}

.icon-arrow-r {
  width: 15px;
  height: 15px;
  background: url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' fill='none' %3E%3Cpath d='M13.5 6L16.5 9L13.5 12' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' /%3E%3Cpath d='M1.5 9H16.5' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' /%3E%3C/svg%3E")
    no-repeat center;
}

@media (max-width: 768px) {
  .banner {
    padding: 32px 20px;
    gap: 24px;
  }

  .banner__content {
    gap: 4px;
  }
}
</style>
