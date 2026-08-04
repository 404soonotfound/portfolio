<script setup lang="ts">
import externalLinkIcon from "@/assets/icons/external-link.svg";
import mailIcon from "@/assets/icons/mail.svg";
</script>

<template>
  <section class="section flex flex-col align-center text-center py-20">
    <span class="section-label px-0">Contact</span>
    <h2 class="text-heading-1 mt-2">함께 이야기해요</h2>

    <p class="max-w-narrow text-body-large text-secondary mt-8">
      실제 사용자가 이용하는 웹 서비스의 개발·운영 경험과 업무 시스템 퍼블리싱
      경험을 바탕으로 사용하기 편하고 안정적인 서비스를 만들고 싶습니다.
    </p>

    <div class="flex flex-wrap justify-center gap-3 mt-10">
      <a
        class="flex align-center gap-2 px-6 py-3 rounded-medium bg-brand-primary text-button text-white"
        href="mailto:404soonotfound@gmail.com"
      >
        <img
          class="size-4 flex-none"
          :src="mailIcon"
          alt=""
          aria-hidden="true"
        />
        <span>이메일 보내기</span>
      </a>

      <a
        class="flex align-center gap-2 px-6 py-3 rounded-medium bg-subtle text-button text-primary"
        href="https://www.baradun.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          class="size-4 flex-none"
          :src="externalLinkIcon"
          alt=""
          aria-hidden="true"
        />
        <span>baradun.app</span>
      </a>
    </div>
  </section>
</template>
