<script setup lang="ts">
type TagVariant = "skill" | "summary";

const { variant = "skill" } = defineProps<{
  variant?: TagVariant;
}>();
</script>

<template>
  <span class="tag" :class="`tag--${variant}`">
    <slot />
  </span>
</template>

<style scoped lang="scss">
.tag {
  display: inline-flex;
  align-items: center;
  width: fit-content;

  color: var(--Text-Secondary);
  white-space: nowrap;

  &--skill {
    padding: var(--spacing-4) var(--spacing-10);
    border-radius: var(--radius-xsmall);
    background-color: var(--Background-Subtle);

    font-family: var(--font-family-tag);
    font-size: var(--font-tag-size);
    font-weight: var(--font-tag-weight);
    line-height: var(--font-tag-line-height);
    letter-spacing: var(--font-tag-letter-spacing);
  }

  &--summary {
    padding: 6px 14px;
    border: 1px solid var(--Border);
    border-radius: var(--radius-pill);
    background-color: transparent;

    font-family: var(--font-family-primary);
    font-size: var(--font-body-default-size);
    font-weight: var(--font-body-default-weight);
    line-height: var(--font-body-default-line-height);
    letter-spacing: var(--font-body-default-letter-spacing);
  }
}
</style>
