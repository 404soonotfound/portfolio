<script setup lang="ts">
import { computed, ref, watch } from "vue";

interface ImageProps {
  src: string;
  alt?: string;
  isLoading?: boolean;
  loadingSrc?: string;
  width?: number;
  height?: number;
  full?: boolean;
}

const {
  src,
  alt = "",
  isLoading = false,
  loadingSrc = "/images/loading.svg",
  width = 320,
  height = 200,
  full = false,
} = defineProps<ImageProps>();

const emit = defineEmits<{
  load: [event: Event];
  error: [event: Event];
}>();

const isImageLoading = ref(true);
const showLoader = computed(() => isLoading || isImageLoading.value);

watch(
  () => src,
  () => {
    isImageLoading.value = true;
  },
);

const handleLoad = (event: Event) => {
  isImageLoading.value = false;
  emit("load", event);
};

const handleError = (event: Event) => {
  isImageLoading.value = false;
  emit("error", event);
};
</script>

<template>
  <div
    class="image-container"
    :style="{
      maxWidth: full ? '100vw' : `${width}px`,
      aspectRatio: `${width} / ${height}`,
      height: `${height}px`,
    }"
    :aria-busy="showLoader"
  >
    <img
      v-if="showLoader"
      class="image-loader"
      :src="loadingSrc"
      alt=""
      aria-hidden="true"
      :max-height="height"
    />

    <img
      class="image"
      :class="{ 'image--loaded': !showLoader && src }"
      :src="src"
      :alt="alt"
      :width="width"
      :max-height="height"
      loading="lazy"
      decoding="async"
      @load="handleLoad"
      @error="handleError"
    />

    <div
      v-if="!src"
      class="empty-image"
      :src="loadingSrc"
      alt=""
      aria-hidden="true"
      :width="width"
      :height="height"
    />
  </div>
</template>

<style scoped lang="scss">
.image-container {
  position: relative;
  width: 100%;
  margin-inline: auto;
  overflow: hidden;
  border-radius: var(--radius-medium);
  background-color: var(--Background-Subtle);
}

.image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity var(--transition-default);

  &--loaded {
    opacity: 1;
  }
}

.image-loader {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;

  display: block;
  width: 48px;
  height: 48px;

  transform: translate(-50%, -50%);
}
.empty-image {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: block;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 200' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='이미지 준비중' style='width: 100%25; height: 100%25; display: block;'%0A%3E%3C!-- 배경 --%3E%3Crect width='320' height='200' rx='10' fill='%23F1F5F9' /%3E%3C!-- 이미지 아이콘 --%3E%3Cg transform='translate(110 65)'%3E%3C!-- 프레임 --%3E%3Crect x='0' y='0' width='100' height='70' rx='7' fill='none' stroke='%23CBD5E1' stroke-width='3' /%3E%3C!-- 해 --%3E%3Ccircle cx='76' cy='21' r='7' fill='%23CBD5E1' /%3E%3C!-- 산 --%3E%3Cpath d='M10 58 L34 34 C36 32 39 32 41 34 L56 49 L67 38 C69 36 72 36 74 38 L90 54 L90 59 L10 59 Z' fill='%23CBD5E1' /%3E%3C/g%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
