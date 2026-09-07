<script setup lang="ts">
import { ref } from "vue";
import { useIsMobile } from "@/composables/useIsMobile.ts";

import NavigationItem from "@/components/common/NavigationItem.vue";
import BaseButton from "@/components/common/BaseButton.vue";

const isMobile = useIsMobile();
const isMenuOpen = ref(false);
const selectedLink = ref<string | null>(null);

const links = [
  { name: "프로젝트", value: "Projects" },
  { name: "기술", value: "Skills" },
  { name: "경력", value: "Experience" },
  { name: "소개", value: "About" },
];

const onSendEmail = () => {
  window.location.href = "mailto:404soonotfound@gmail.com";
};
</script>

<template>
  <div class="navigation" :class="{ 'navigation--mobile': isMobile }">
    <button
      v-if="isMobile"
      class="btn-menu"
      :class="{ 'is-open': isMenuOpen }"
      @click="isMenuOpen = !isMenuOpen"
    />
    <!-- Navigation content -->
    <ul class="navigation__list" v-if="!isMobile || isMenuOpen">
      <NavigationItem
        v-for="link in links"
        :key="link.value"
        :class="{ 'navigation__item--mobile': isMobile }"
        :active="selectedLink === link.value"
        @click="selectedLink = link.value"
      >
        {{ link.name }}
      </NavigationItem>
      <li>
        <BaseButton @click="onSendEmail"> 이메일 보내기 </BaseButton>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.navigation {
  height: var(--layout-header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.navigation__list {
  display: flex;
  gap: var(--spacing-12);
  list-style: none;
  padding: 0;
  margin: 0;
}

.btn-menu {
  position: relative;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='34' height='38' viewBox='0 0 34 38' fill='none'%3E%3Crect x='5' y='11' width='24' height='2' rx='1' fill='%230F172A'/%3E%3Crect x='5' y='18' width='24' height='2' rx='1' fill='%230F172A'/%3E%3Crect x='5' y='25' width='24' height='2' rx='1' fill='%230F172A'/%3E%3C/svg%3E")
    no-repeat center;
  border: none;
  cursor: pointer;
  display: inline-block;
  width: 34px;
  height: 38px;

  &.is-open {
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 34 38' fill='none'%3E%3Cpath d='M5 5L29 33M29 5L5 33' stroke='%230F172A' stroke-width='2'/%3E%3C/svg%3E")
      no-repeat center;
  }
}
.navigation--mobile {
  .navigation__list {
    background-color: var(--Background-Default);
    position: fixed;
    top: var(--layout-header-height);
    left: 0;
    right: 0;
    width: auto;
    padding: var(--spacing-16) var(--spacing-24);
    flex-direction: column;
  }
  .navigation__item--mobile {
    padding: var(--spacing-12) 0;
    border-bottom: 1px solid var(--Border);
  }
}
</style>
