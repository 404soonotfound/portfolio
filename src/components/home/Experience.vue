<script setup lang="ts">
import { experiences } from "@/data/experiences.ts";
</script>

<template>
  <section class="section py-20">
    <span class="section-label px-0">Experience</span>
    <h2 class="text-heading-1 mt-2">경력</h2>
    <p class="text-body-default text-tertiary mt-2">
      최근 경력부터 표시합니다.
    </p>

    <div class="mt-10 border-top">
      <article
        v-for="(experience, index) in experiences"
        :key="experience.id"
        class="experience-card grid gap-12 py-10"
        :class="{ 'border-bottom': index < experiences.length - 1 }"
      >
        <div class="experience-period flex flex-col">
          <span class="text-caption text-tertiary">재직 기간</span>
          <span class="text-caption text-primary mt-1">
            {{ experience.period }}
          </span>
        </div>

        <div class="flex flex-col">
          <h3 class="text-body-large-bold text-primary">
            {{ experience.company }}
          </h3>

          <template v-if="experience.variant === 'project'">
            <p class="text-body-default text-brand-primary mt-1">
              {{ experience.headline }}
            </p>
            <p class="experience-summary text-body-default text-secondary">
              {{ experience.description }}
            </p>

            <div class="flex flex-col gap-4 mt-6">
              <article
                v-for="project in experience.projects"
                :key="project.title"
                class="project-card flex flex-col border bg-card px-5 rounded-medium"
              >
                <div
                  class="project-heading flex align-baseline justify-between gap-4"
                >
                  <h4 class="text-body-default-bold text-primary">
                    {{ project.title }}
                  </h4>
                  <span
                    class="project-status flex-none text-section-label text-tertiary bg-subtle px-2"
                  >
                    {{ project.status }}
                  </span>
                </div>
                <p class="project-period text-caption text-tertiary">
                  {{ project.period }}
                </p>
                <p class="text-caption text-tertiary mt-1">
                  {{ project.team }}
                </p>
                <p class="project-description text-body-default text-secondary">
                  {{ project.description }}
                </p>
              </article>
            </div>

            <p class="text-caption text-tertiary mt-4">
              {{ experience.note }}
            </p>
          </template>

          <ol v-else class="role-timeline list-none mt-6">
            <li
              v-for="role in experience.roles"
              :key="role.title"
              class="role-item relative"
              :class="{ 'role-item--current': role.current }"
            >
              <div class="role-heading flex flex-wrap align-baseline">
                <h4
                  :class="[
                    role.current
                      ? 'text-body-default-bold text-primary'
                      : 'text-body-default-medium text-secondary',
                  ]"
                >
                  {{ role.title }}
                </h4>
                <span class="text-caption text-tertiary">
                  {{ role.period }}
                </span>
              </div>
              <p
                class="text-body-default mt-1"
                :class="role.current ? 'text-brand-primary' : 'text-tertiary'"
              >
                {{ role.team }}
              </p>
              <p class="role-description text-body-default text-secondary">
                {{ role.description }}
              </p>
            </li>
          </ol>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
.experience-card {
  grid-template-columns: minmax(0, 200px) minmax(0, 1fr);
}

.experience-period {
  padding-top: 2px;
}

.experience-summary {
  max-width: 434px;
  margin-top: 14px;
}

.project-card {
  padding-block: 18px;
}

.project-status {
  padding-block: 3px;
  border-radius: 3px;
}

.project-period {
  margin-top: 6px;
}

.project-description {
  margin-top: var(--spacing-10);
}

.role-timeline {
  padding-left: 22px;
  border-left: 2px solid var(--Border);
}

.role-item {
  & + & {
    margin-top: var(--spacing-28);
  }

  &::before {
    position: absolute;
    top: 7px;
    left: -27px;
    width: 9px;
    height: 9px;
    border: 2px solid var(--Text-Tertiary);
    border-radius: 50%;
    background-color: var(--Background-Default);
    content: "";
  }

  &--current::before {
    border-color: var(--Brand-Primary);
    background-color: var(--Brand-Primary);
  }
}

.role-heading {
  gap: 0 var(--spacing-8);
}

.role-description {
  max-width: 416px;
  margin-top: var(--spacing-8);
}

.role-item--current .role-description {
  margin-top: var(--spacing-10);
}

@media (max-width: 767px) {
  .experience-card {
    grid-template-columns: 1fr;
    gap: var(--spacing-24);
  }

  .project-heading {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
