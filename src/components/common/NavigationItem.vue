<script setup lang="ts">
defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <li class="navigation-item" :class="{ 'navigation-item--active': active }">
    <span
      class="text-navigation"
      :class="{ 'text-navigation--active': active }"
    >
      <slot />
    </span>
  </li>
</template>
<style scoped lang="scss">
.navigation-item {
  list-style: none;
  padding: var(--spacing-8) var(--spacing-12);
  color: var(--Text-Secondary);
  cursor: pointer;

  span.text-navigation {
    color: var(--Text-Secondary);
  }

  span.text-navigation--active {
    color: var(--Text-Primary);
  }
}
</style>
