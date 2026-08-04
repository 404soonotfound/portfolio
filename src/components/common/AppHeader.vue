<script setup lang="ts">
import { ref } from "vue";
import Navigation from "@/components/common/Navigation.vue";
</script>

<template>
  <header class="header">
    <div class="header-content">
      <a href="/" class="header-content__title">My Portfolio</a>
      <Navigation />
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  width: 100%;
  &-content {
    margin: 0 auto;
    max-width: var(--layout-content-max);
    padding: 0 var(--spacing-24);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &__title {
      font-size: var(--font-body-default-size);
      color: var(--Text-Primary);
    }
  }
}
</style>
