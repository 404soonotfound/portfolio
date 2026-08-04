<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
  },
  theme: {
    type: String,
    default: "primary",
  },
});
</script>

<template>
  <button class="base-button" :class="`base-button--${theme}`">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.base-button {
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-10) var(--spacing-20);
  border-radius: var(--radius-medium);

  &--primary {
    color: var(--Text-White);
    background-color: var(--Background-Primary);
  }
  &--secondary {
    color: var(--Text-Primary);
    background-color: var(--Background-Subtle);
  }
  &--transparent {
    color: var(--Text-Tertiary);
    background-color: transparent;
    padding: 0;
  }
}
</style>
