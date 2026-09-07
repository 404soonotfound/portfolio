import type { Experience } from "@/types/experiences";

export const experiences = [
  {
    id: "cy",
    company: "씨와이",
    period: "2025.03 — 재직 중",
    variant: "project",
    headline: "대리 · 프론트엔드 퍼블리싱 · 비즈니스나우 1(SI 사업부)",
    description:
      "씨와이 비즈니스나우 1의 SI 사업부에 소속되어 프로젝트별 프론트엔드 및 퍼블리싱 업무를 수행하고 있습니다.",
    projects: [
      {
        title: "한국무역보험공사 - 신용평가 모형 시스템 개발",
        status: "프로젝트 진행중",
        period: "프로젝트 기간 2026.09 — 진행중",
        team: "신용평가팀",
        description:
          "업무 요구사항을 바탕으로 화면설계서 작성부터 WebSquare 기반 업무 화면 구현을 담당했습니다.",
      },
      {
        title: "SR-MaaS 구축 시스템",
        status: "프로젝트 종료",
        period: "프로젝트 기간 2025.03 — 2026.07",
        team: "지원팀 퍼블리싱 파트",
        description:
          "WebSquare 기반 업무 화면을 디자인 시안과 퍼블리싱 가이드에 맞춰 구현하고, 요구사항 변경에 따른 화면 수정 업무를 담당했습니다.",
      },
    ],
    note: "",
  },
  {
    id: "poinblack",
    company: "포인블랙",
    period: "2021.09 — 2025.03",
    variant: "timeline",
    roles: [
      {
        title: "매니저 · 프론트엔드 개발자",
        period: "2021.12 — 2025.03",
        team: "개발사업부 · 프론트엔드 4명 · 백엔드 2명",
        description:
          "Vue.js 기반 온라인 교육 SaaS의 사용자 웹과 관리자 웹을 개발하고 운영했습니다. 결제, 정기 구매, 환불, 쿠폰, 프로모션, 예약, 회원과 권한, 이메일 캠페인, 파일 처리, 제휴 정산 등 다양한 서비스 기능을 구현했습니다.",
        current: true,
      },
      {
        title: "인턴",
        period: "2021.09 — 2021.12",
        team: "포인캠퍼스 백오피스 유지보수",
        description:
          "포인캠퍼스 백오피스 유지보수 업무를 담당하며 온라인 교육 플랫폼의 실무 개발과 운영 환경을 경험했습니다.",
        current: false,
      },
    ],
  },
] satisfies Experience[];
