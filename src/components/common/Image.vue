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
      :class="{ 'image--loaded': !showLoader }"
      :src="src"
      :alt="alt"
      :width="width"
      :max-height="height"
      loading="lazy"
      decoding="async"
      @load="handleLoad"
      @error="handleError"
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
</style>
