<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
  },
  theme: {
    type: String,
    default: "primary",
  },
  outlined: {
    type: Boolean,
  },
  size: {
    type: String,
    default: "md",
  },
  icon: {
    type: Boolean,
  },
});
</script>

<template>
  <button
    class="base-button"
    :class="[
      `base-button--${theme}`,
      `size-${size}`,
      {
        'base-button--outlined': outlined,
      },
      {
        'icon-button': icon,
      },
    ]"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
.base-button {
  display: inline-flex;
  align-items: center;
  border-radius: var(--radius-medium);

  &.size-sm {
    padding: var(--spacing-6) var(--spacing-12);
  }

  &.size-md {
    padding: var(--spacing-8) var(--spacing-16);
  }

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

  &.base-button--outlined {
    background: var(--Background-Default);
    border: 1px solid var(--Border);
  }
}
.icon-button {
  aspect-ratio: 1;
  border-radius: 50%;
}
</style>
