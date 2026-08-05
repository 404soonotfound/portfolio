<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { projects } from "@/data/projects.ts";
import { useIsMobile } from "@/composables/useIsMobile";

import Tag from "@/components/common/Tag.vue";
import BaseButton from "@/components/common/BaseButton.vue";
import Image from "@/components/common/Image.vue";
import BottomNextBanner from "@/components/common/BottomNextBanner.vue";

const route = useRoute();
const router = useRouter();
const isMobile = useIsMobile();

const product = computed(() =>
  projects.find((p) => p.id === route.params.slug),
);

const category = computed(() => product.value?.category || "");
const name = computed(() => product.value?.name || "");
const subtitle = computed(() => product.value?.subtitle || "");
const links = computed(() => product.value?.links || []);
const descSections = computed(() => product.value?.sections || []);

const openLink = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};
</script>

<template>
  <div class="w-full flex flex-col">
    <div class="container">
      <div class="container-box">
        <span class="text-caption text-tertiary mb-4">{{ category }}</span>
        <h1 class="text-display text-primary mb-2">{{ name }}</h1>
        <p class="text-brand-primary">{{ subtitle }}</p>

        <div
          class="flex flex-wrap gap-2 py-6"
          v-if="product.techStack.length > 0"
        >
          <Tag v-for="stack in product.techStack">
            {{ stack.name }}
          </Tag>
        </div>
        <!--  -->
        <template v-if="links.length > 0">
          <BaseButton
            theme="transparent"
            outlined
            v-for="link in links"
            @click.stop="openLink(link.url)"
          >
            <i class="size-4 flex-none icon-external mr-1" />
            <span class="text-primary text-button"> {{ link.label }} </span>
          </BaseButton>
        </template>

        <Image
          class="my-10"
          full
          :height="isMobile ? 300 : 600"
          :src="product.thumbnail"
          :alt="product.thumbnailAlt"
        />
      </div>
    </div>
    <div class="w-full divider" />

    <div class="detail-intro container">
      <div class="container-box">
        <div class="detail-split">
          <div class="w-full flex flex-col gap-10">
            <p class="text-body-large text-color-primary">
              {{ product.description || "" }}
            </p>

            <div
              v-if="descSections.length > 0"
              v-for="section in descSections"
              class="w-full"
            >
              <article
                v-if="section.type === 'callout'"
                class="project-card flex flex-col border bg-card px-6 py-5 rounded-medium"
              >
                <p class="text-section-label text-tertiary mb-3">
                  {{ section.title }}
                </p>

                <span class="text-body-default text-secondary">{{
                  section.description
                }}</span>
              </article>
              <template v-else>
                <p class="text-body-large-bold text-primary mb-3">
                  {{ section.title }}
                </p>

                <ul class="desc-ul">
                  <li
                    v-for="item in section.items"
                    class="text-body-default text-secondary"
                  >
                    {{ item }}
                  </li>
                </ul>
              </template>
            </div>
          </div>

          <div class="flex flex-col gap-8" :class="{ 'sticky-box': !isMobile }">
            <div class="flex flex-col gap-2">
              <span class="text-section-label">분류</span>
              <span class="text-body-default-medium text-primary">{{
                product.category
              }}</span>
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-section-label">기간</span>
              <span class="text-body-default-medium text-primary">{{
                product.period
              }}</span>
            </div>

            <div class="flex flex-col gap-2">
              <span class="text-section-label">기술 스택</span>
              <div class="flex flex-wrap gap-2">
                <Tag v-for="stack in product.techStack">
                  {{ stack.name }}
                </Tag>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <BottomNextBanner :name="product.title" :summary="product?.summary" />
  </div>
</template>

<style scoped lang="scss">
.container-box {
  padding: 64px 0px;
  margin: 0 auto;
}

.icon-external {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='13' viewBox='0 0 13 13' fill='none'%3E%3Cpath d='M8.125 1.625H11.375V4.875' stroke='%230F172A' stroke-width='1.08333' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M5.41666 7.58333L11.375 1.625' stroke='%230F172A' stroke-width='1.08333' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M9.75 7.04167V10.2917C9.75 10.579 9.63586 10.8545 9.4327 11.0577C9.22953 11.2609 8.95398 11.375 8.66667 11.375H2.70833C2.42102 11.375 2.14547 11.2609 1.9423 11.0577C1.73914 10.8545 1.625 10.579 1.625 10.2917V4.33333C1.625 4.04602 1.73914 3.77047 1.9423 3.5673C2.14547 3.36414 2.42102 3.25 2.70833 3.25H5.95833' stroke='%230F172A' stroke-width='1.08333' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")
    no-repeat center;
}
.detail-split {
  display: flex;
  justify-content: space-between;
  gap: 80px;

  @media (max-width: 767px) {
    flex-direction: column-reverse;
  }
}
.desc-ul {
  width: 100%;
  padding-left: 28px;

  li {
    padding: 8px;
    border-bottom: 1px solid var(--Border);
  }
  li::marker {
    color: var(--Text-Secondary);
    font-size: 12px;
  }
}

.sticky-box {
  position: sticky;
  max-width: 264px;
  top: 128px;
  right: 0;
  height: fit-content;
  background-color: var(--Background-Default);

  @media (max-width: 767px) {
    max-width: unset;
  }
}
</style>
