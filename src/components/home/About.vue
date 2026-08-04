<script setup lang="ts">
const aboutParagraphs = [
  "Vue.js 기반 SaaS 서비스에서 사용자 기능과 관리자 운영 화면을 함께 개발했습니다. 결제·회원·권한·예약·캠페인처럼 정책과 예외 처리가 중요한 기능을 구현하고, 실제 운영 과정에서 발생하는 오류와 변경 요구에 대응해 왔습니다.",
  "현재는 WebSquare 기반 업무 시스템에서 디자인 기준과 웹 접근성을 고려한 화면 구현을 담당하고 있습니다. 개인 프로젝트에서는 AI 도구를 활용하되 요구사항 정의, 결과 검수, 테스트와 배포 판단에 직접 책임지는 방식으로 새로운 기술을 적용하고 있습니다.",
  "구현 범위를 과장하기보다 확인 가능한 경험을 명확히 설명하고, 사용자와 운영자가 함께 신뢰할 수 있는 서비스를 만드는 것을 중요하게 생각합니다.",
];

const credentials = [
  {
    id: "computer-science-degree",
    category: "학점은행제",
    status: "진행 중",
    title: "컴퓨터공학 전공",
    descriptions: ["학사학위 과정 진행 중"],
  },
  {
    id: "polytechnic-degree",
    category: "한국폴리텍대학 제주캠퍼스",
    title: "융합디자인학과 · 전문학사",
    descriptions: ["2022.02 졸업", "학점 3.57 / 4.5"],
  },
  {
    id: "web-design-certificate",
    category: "자격증",
    title: "웹디자인개발기능사",
    descriptions: ["2020.12 취득"],
  },
];
</script>

<template>
  <div class="bg-card border-y">
    <div class="section about-grid grid gap-16 py-20">
      <section>
        <span class="section-label px-0">About</span>
        <h2 class="text-heading-1 mt-2">소개</h2>

        <div class="flex flex-col gap-4 mt-8">
          <p
            v-for="paragraph in aboutParagraphs"
            :key="paragraph"
            class="text-body-default text-secondary"
          >
            {{ paragraph }}
          </p>
        </div>
      </section>

      <section>
        <span class="section-label px-0">Education</span>
        <h2 class="text-heading-1 mt-2">학력 및 자격</h2>

        <div class="mt-8">
          <article
            v-for="(credential, index) in credentials"
            :key="credential.id"
            :class="[
              index < credentials.length - 1 ? 'border-bottom' : '',
              index === 0 ? 'pb-6' : index === 1 ? 'pt-6 pb-8' : 'pt-8',
            ]"
          >
            <div class="flex align-center gap-2">
              <span
                v-if="credential.status"
                class="credential-status text-section-label text-brand-primary bg-brand-light px-2"
              >
                {{ credential.status }}
              </span>
              <span class="text-section-label text-tertiary">
                {{ credential.category }}
              </span>
            </div>

            <h3 class="text-body-large-bold text-primary mt-2">
              {{ credential.title }}
            </h3>
            <p
              v-for="(description, descriptionIndex) in credential.descriptions"
              :key="description"
              class="text-tertiary"
              :class="[
                index === 0 ? 'text-body-default' : 'text-caption',
                descriptionIndex === 0 ? 'mt-1' : '',
              ]"
            >
              {{ description }}
            </p>
          </article>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.credential-status {
  padding-block: 3px;
  border-radius: 3px;
}

@media (max-width: 767px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}
</style>
