<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <p>© 2026 Hyun Soobin. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  width: 100%;
  background-color: var(--Background-Card);
  border-top: 1px solid var(--Border);
  &-content {
    margin: 0 auto;
    max-width: var(--layout-content-max);
    padding: var(--spacing-24);
    width: 100%;
    justify-content: center;
    height: var(--layout-footer-height);
    font-size: var(--font-body-default-size);
    color: var(--Text-Secondary);
  }
}
</style>
