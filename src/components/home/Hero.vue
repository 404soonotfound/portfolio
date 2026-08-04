<script setup lang="ts">
import { ref } from "vue";
import BaseButton from "@/components/common/BaseButton.vue";
import Tag from "@/components/common/Tag.vue";
</script>
<template>
  <section class="section">
    <div class="flex flex-col gap-5">
      <span class="section-label">Frontend Developer</span>
      <h1 class="text-display">
        사용하기 편하고 안정적인<br />
        웹 서비스를 만듭니다.
      </h1>

      <div class="flex flex-col gap-6" style="max-width: 600px">
        <p class="text-body-large text-secondary">
          Vue.js 기반 온라인 교육 서비스에서 사용자·관리자 화면의 기능 개발과
          유지보수를 담당했습니다. 결제, 회원·권한, 예약, 이메일 캠페인 관련
          기능을 구현했으며, 현재는 WebSquare 기반 업무 시스템의 화면 개발과
          개선을 담당하고 있습니다.
        </p>
        <p class="text-body-large text-secondary">
          개인 프로젝트에서는 Next.js와 FastAPI를 활용해 공공데이터 기반
          서비스를 운영하며, 데이터 기준 정의부터 결과 검수, 테스트, 성능 개선과
          배포까지 경험 범위를 확장하고 있습니다.
        </p>
      </div>

      <div class="flex gap-4 mt-5">
        <BaseButton>프로젝트 보기</BaseButton>
        <BaseButton theme="secondary">경력보기</BaseButton>
      </div>

      <div class="flex flex-wrap gap-3 pt-8 border-top">
        <Tag
          v-for="item in [
            'Vue.js 기반 SaaS 서비스 개발·운영',
            'WebSquare 업무 시스템 퍼블리싱',
            'React·Next.js 개인 프로젝트',
          ]"
          variant="summary"
        >
          {{ item }}
        </Tag>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
