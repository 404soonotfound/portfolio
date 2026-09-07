<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { projects } from "@/data/projects.ts";

import Navigation from "@/components/common/Navigation.vue";
import BaseButton from "@/components/common/BaseButton.vue";

const route = useRoute();
const router = useRouter();

const isDetail = computed(() => route.name === "detail");
const projectId = computed(() => route.params.slug || "");
const project = computed(() =>
  projects.find((p) => p.id === route.params.slug),
);
const pageCnt = computed(() => {
  const currentCnt = projects.findIndex((p) => p.id === project.value?.id) + 1;
  const totalCnt = projects.length || 0;
  return `${currentCnt} / ${totalCnt}`;
});
</script>

<template>
  <header class="header sticky-header">
    <div class="header-content" v-if="!isDetail">
      <a href="/" class="header-content__title">My Portfolio</a>
      <Navigation />
    </div>
    <div v-else class="header-content sub">
      <div class="flex align-center gap-2">
        <BaseButton
          class="pa-0"
          theme="transparent"
          @click="
            router.push({
              name: 'home',
            })
          "
        >
          <i class="icon-back" aria-hidden="true" />
        </BaseButton>
        <h2 class="text-navigation text-secondary">모든 프로젝트</h2>
      </div>

      <div class="pagination">
        <span class="text-caption text-tertiary">
          {{ pageCnt }}
        </span>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  width: 100%;
  background-color: var(--Background-Default);
  border-bottom: 1px solid var(--Border);
  z-index: 9;

  &-content {
    margin: 0 auto;
    max-width: var(--layout-content-max);
    padding: 0 var(--spacing-24);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &.sub {
      gap: 8px;
      padding: 0px 24px;
      height: 56px;
    }
    &__title {
      font-size: var(--font-body-default-size);
      color: var(--Text-Primary);
    }
  }

  .icon-back {
    width: 16px;
    height: 16px;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 15 15' fill='none'%3E%3Cpath d='M7.5 11.875L3.125 7.5L7.5 3.125' stroke='%23475569' stroke-width='1.25' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M11.875 7.5H3.125' stroke='%23475569' stroke-width='1.25' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")
      no-repeat center;
  }
}

.sticky-header {
  position: sticky;
  top: 0;
  left: 0;
}
</style>
