<script setup lang="ts">
import HeroSection from "@/components/home/Hero.vue";
import ProjectSection from "@/components/home/Project.vue";
import SkillSection from "@/components/home/Skill.vue";
import ExperienceSection from "@/components/home/Experience.vue";
import AboutSection from "@/components/home/About.vue";
import ContactSection from "@/components/home/contact.vue";
</script>

<template>
  <div class="container">
    <HeroSection />
    <div class="divider"></div>
    <ProjectSection />
    <SkillSection />
    <ExperienceSection />
    <AboutSection />
    <ContactSection />
  </div>
</template>

<style scoped lang="scss">
.container {
  flex: 1;
  width: 100%;
  margin: 0 auto;
  padding: var(--spacing-24);
}
</style>
