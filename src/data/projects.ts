import type { Project } from "@/types/projects";

import baradunImage from "@/assets/images/projects/baradun.webp";
import poincampusImage from "@/assets/images/projects/poincampus.webp";
import srMaasImage from "@/assets/images/projects/sr-maas.webp";

export const projects = [
  {
    id: "baradun",
    title: "바라던 바다",
    subtitle: "공공 해양 데이터 통합·활동 추천 서비스",
    category: "개인 프로젝트 · 웹 서비스",
    period: "2026.04 — 진행 중",

    summary:
      "공공 해양 데이터를 활용해 해변별 활동 추천과 안전 정보를 제공하는 웹 서비스입니다.",

    description:
      "여러 기관에 분산된 해양 데이터를 해변 단위로 통합하고, 사용자가 복잡한 관측값을 직접 해석하지 않아도 활동 가능 여부와 주의사항을 확인할 수 있도록 만든 서비스입니다.",

    thumbnail: baradunImage,
    thumbnailAlt: "바라던 바다 프로젝트의 해변 이미지",
    coverImage: baradunImage,
    coverImageAlt: "바라던 바다 프로젝트의 해변 대표 이미지",

    techStack: [
      { name: "React", areas: ["personal"] },
      { name: "Next.js", areas: ["personal"] },
      { name: "TypeScript", areas: ["personal"] },
      { name: "Leaflet", areas: ["personal"] },
      { name: "REST API", areas: ["backend"] },
      { name: "FastAPI", areas: ["backend"] },
      { name: "Python", areas: ["backend"] },
      { name: "PostgreSQL", areas: ["backend"] },
      { name: "Supabase", areas: ["backend"] },
      { name: "Vercel", areas: ["infra"] },
      { name: "GitHub Actions", areas: ["infra"] },
    ],

    sections: [
      {
        id: "features",
        title: "주요 기능",
        items: [
          "해변별 파고, 바람, 수온, 조위 등 해양 정보 제공",
          "수영·서핑·스노클링 등 활동별 추천 상태 제공",
          "추천·주의·불가 상태와 판단 근거 표시",
          "이안류·기상특보·해파리·수질 관련 안전 정보 제공",
          "Leaflet 기반 지도와 해변 위치 정보 제공",
          "데이터 없음·지연·정상 상태 및 관측 기준 시각 표시",
        ],
      },
      {
        id: "implementation",
        title: "주요 구현 및 기술적 판단",
        items: [
          "기상·파고·조위·수질·해파리 데이터를 해변 단위로 통합",
          "활동별 추천 상태와 위험도 판단 기준 설계",
          "Next.js와 FastAPI 기반 프론트엔드·API 구조 구성",
          "Supabase(PostgreSQL) 데이터 구조와 REST API 설계",
          "Bulk Query 적용을 통한 N+1 조회 구조 개선",
          "캐싱과 이미지 최적화를 통한 로딩 구조 개선",
          "GitHub Actions와 Vercel을 활용한 배포 환경 구성",
        ],
      },
      {
        id: "role",
        title: "본인 담당 역할",
        items: [
          "서비스 아이디어 구체화 및 기능 기획",
          "요구사항과 화면 정책 정의",
          "데이터 상태와 표현 기준 정의",
          "AI 생성 코드와 변경 파일 검수",
          "예외 상황 및 테스트 결과 확인",
          "Pull Request 검토와 병합 여부 판단",
          "배포 판단 및 배포 후 서비스 점검",
        ],
      },
      {
        id: "ai-usage",
        title: "AI 활용 방식",
        type: "callout",
        description:
          "구현 과정에서 AI 도구를 코드 초안 생성, 리팩터링과 오류 분석에 활용했습니다. 서비스 기획과 요구사항 정의, 데이터 표현 기준 수립, 변경 코드 검수, 테스트, Pull Request 검토 및 배포 판단을 직접 담당했습니다.",
      },
    ],

    links: [
      {
        label: "서비스 보기",
        url: "https://www.baradun.app",
      },
    ],
  },
  {
    id: "sr-maas",
    title: "SR-MaaS 구축 시스템",
    subtitle: "WebSquare 기반 업무 시스템 UI 구현 및 유지보수",
    category: "씨와이 · SI 프로젝트 · 업무 시스템 UI",
    period: "2025.03 — 2026.06",

    summary:
      "씨와이 비즈니스나우(SI 사업) 1본부 소속으로 SR-MaaS 구축 시스템 지원팀 퍼블리싱 파트에 투입되어 WebSquare 기반 업무 화면을 구현했습니다.",

    description:
      "SR-MaaS 통합시스템 구축 프로젝트에서 WebSquare 기반 업무 화면의 퍼블리싱과 유지보수를 담당했습니다. 디자인 시안과 퍼블리싱 가이드에 맞춰 공통 레이아웃과 UI를 구현하고 요구사항 변경에 대응했습니다.",

    thumbnail: srMaasImage,
    thumbnailAlt: "SR-MaaS 구축 시스템을 표현한 코드 이미지",
    coverImage: srMaasImage,
    coverImageAlt: "SR-MaaS 구축 시스템 대표 이미지",

    techStack: [
      { name: "WebSquare", areas: ["publishing"] },
      { name: "HTML5", areas: ["publishing"] },
      { name: "CSS3", areas: ["publishing"] },
      { name: "JavaScript", areas: ["publishing"] },
      { name: "웹 접근성", areas: ["publishing"] },
      { name: "웹 표준", areas: ["publishing"] },
      { name: "Figma", areas: ["publishing", "infra"] },
      { name: "GitLab", areas: ["infra"] },
    ],

    sections: [
      {
        id: "responsibilities",
        title: "담당 업무",
        items: [
          "WebSquare 기반 업무 시스템 화면 퍼블리싱 및 유지보수",
          "SRT 앱·웹 서비스 화면 구현",
          "디자인 시안과 퍼블리싱 가이드에 따른 UI 구현",
          "공통 레이아웃 및 UI 컴포넌트 퍼블리싱",
        ],
      },
      {
        id: "standards",
        title: "구현 기준 및 유지보수",
        items: [
          "웹 접근성과 웹 표준을 고려한 마크업 및 스타일 구현",
          "반복 사용되는 레이아웃과 UI 요소의 공통 구조 적용",
          "화면 간 일관성과 유지보수성을 고려한 UI 구성",
          "요구사항 변경과 운영 과정에서 발생하는 화면 수정 대응",
        ],
      },
    ],
  },
  {
    id: "poincampus",
    title: "포인캠퍼스",
    subtitle: "Vue.js 기반 사용자·관리자 웹 개발 및 운영",
    category: "포인블랙 · SaaS 서비스 운영",
    period: "2021.09 — 2025.03",

    summary:
      "프론트엔드 4명, 백엔드 2명으로 구성된 개발팀에서 Vue.js 기반 포인캠퍼스 사용자 웹과 관리자 웹을 개발·운영했습니다.",

    description:
      "교육 상품의 탐색부터 신청·결제·수강·환불까지 이어지는 사용자 흐름과 관리자 운영 화면을 개발했습니다. 일반 결제, 정기 구매, 예약, 쿠폰, 프로모션 등 다양한 판매 유형과 운영 정책을 화면에 반영했습니다.",

    thumbnail: poincampusImage,
    thumbnailAlt: "포인캠퍼스 프로젝트를 표현한 협업 이미지",
    coverImage: poincampusImage,
    coverImageAlt: "포인캠퍼스 프로젝트 대표 이미지",

    techStack: [
      { name: "Vue.js", areas: ["frontend"] },
      { name: "Vuex", areas: ["frontend"] },
      { name: "Pinia", areas: ["frontend"] },
      { name: "Vue Router", areas: ["frontend"] },
      { name: "Vuetify", areas: ["frontend"] },
      { name: "JavaScript", areas: ["frontend"] },
      { name: "HTML5", areas: ["frontend"] },
      { name: "CSS3", areas: ["frontend"] },
      { name: "SCSS", areas: ["frontend"] },
      { name: "Axios", areas: ["frontend"] },
      { name: "Vite", areas: [] },
      { name: "XLSX", areas: [] },
      { name: "AWS S3", areas: ["infra"] },
      { name: "Git", areas: ["infra"] },
      { name: "GitLab", areas: ["infra"] },
    ],

    sections: [
      {
        id: "payment-and-sales",
        title: "결제·판매",
        items: [
          "일반 결제와 결제 내역 화면 개발",
          "정기 구매와 가상계좌 환불 기능 개발 및 운영 대응",
          "결제 취소와 반품·교환 신청 흐름 개선",
          "쿠폰·프로모션·예약 상품과 신청서 기능 구현",
        ],
      },
      {
        id: "admin",
        title: "관리자 운영",
        items: [
          "회원·직원·그룹·권한 관리 기능 개발",
          "상품·콘텐츠·결제 관리 화면 개발",
          "이메일 캠페인 발송·재발송 및 결과 리포트 구현",
          "Excel·이미지·첨부파일·PDF 처리와 AWS S3 연동",
          "제휴 파트너 판매 현황과 정산 화면 개발",
        ],
      },
      {
        id: "operations",
        title: "운영 안정화",
        items: [
          "사용자·관리자·모바일 화면의 운영 오류 수정",
          "결제·예약·회원 화면의 정책 변경 및 예외 상황 대응",
          "모바일 레이아웃과 반응형 화면 개선",
          "서비스 알림 유형 추가와 운영 기능 개선",
        ],
      },
      {
        id: "security-and-maintenance",
        title: "보안·유지보수",
        items: [
          "비회원 첨부파일 접근 제한과 개인정보 보호 대응",
          "불필요한 환경 변수와 이미지 원본 파일명 정보 제거",
          "공통 테이블 처리 구조와 IndexedDB 의존 코드 정리",
          "기능별 컴포넌트 분리와 리팩터링 수행",
        ],
      },
    ],
    // links: [
    //   {
    //     label: "서비스 보기",
    //     url: "https://www.poincampus.com",
    //   },
    // ],
  },
] satisfies Project[];

export const getProjectById = (id: string) =>
  projects.find((project) => project.id === id);
