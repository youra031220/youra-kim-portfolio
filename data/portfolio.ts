export type LinkItem = {
  label: string;
  href?: string;
  download?: boolean;
};

export type Project = {
  id: string;
  thumbnail?: string;
  index: string;
  title: string;
  subtitle: string;
  period: string;
  role: string;
  achievement: string;
  problem: string;
  actions: string[];
  result: string;
  tags: string[];
  links: LinkItem[];
};

// 연락처와 프로필 URL은 아래 값만 수정하면 전체 사이트에 반영됩니다.
export const profile = {
  nameKo: "김유라",
  nameEn: "Youra Kim",
  university: "서강대학교",
  majors: "경영학 · 아트&테크놀로지",
  email: "", // 예: hello@example.com
  github: "", // 예: https://github.com/username
  linkedin: "", // 예: https://linkedin.com/in/username
  resume: "", // public/documents 내부 파일은 예: /documents/resume.pdf
};

export const capabilities = [
  "비즈니스·상품 전략",
  "금융 데이터 분석",
  "AI Agent 기획·개발",
  "서비스기획",
  "마케팅 전략",
  "Python",
  "React",
  "Node.js",
];

export const skillGroups = [
  {
    title: "Methods",
    items: [
      "Service Planning",
      "Business Strategy",
      "Market Research",
      "User Journey Mapping",
      "Wireframing",
      "Prototyping",
      "EDA",
      "Data Visualization",
      "Topic Modeling",
      "Monte Carlo Simulation",
      "Financial Modeling",
      "AI Agent Design",
      "Prompt Engineering",
    ],
  },
  {
    title: "Tools",
    items: [
      "Figma",
      "Adobe Illustrator",
      "Microsoft Office",
      "Google Workspace",
      "Google Colab",
      "Jupyter Notebook",
      "VS Code",
      "GitHub",
      "Notion",
      "Slack",
      "Overleaf",
      "ModelRisk",
      "FnGuide",
      "Canva",
      "Procreate",
      "LLMs",
      "Godot",
      "Vercel",
      "Render",
    ],
  },
  {
    title: "Technical",
    items: [
      "Python",
      "SQL",
      "JavaScript",
      "HTML/CSS",
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "Git",
      "APIs",
      "Web Scraping",
      "Data Preprocessing",
      "ML&DL",
      "Natural Language Processing",
      "Computer Vision",
      "Explainable AI",
      "Responsive Web Design",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "kodex",
    index: "01",
    title: "KODEX ETF Marketing Intelligence Agent",
    subtitle: "삼성자산운용 KODEX ETF 마케팅 개선 프로젝트",
    period: "기간 정보 추가 예정",
    role: "문제 정의 · 데이터 분석 · AI Agent 기획/개발 · 마케팅 전략",
    achievement: "프로젝트 최우수상",
    problem:
      "아직 순매수가 본격 유입되지 않았지만 향후 자금 유입 가능성이 높은 ETF를 조기에 발견해야 하는 현업 문제를 정의했습니다.",
    actions: [
      "1,000여 개 ETF의 순매수·거래량·거래대금·수익률 데이터 분석",
      "검색 트렌드·뉴스·유튜브·경쟁사 데이터를 결합한 탐색 체계 설계",
      "Theme Intelligence, Competitor Analysis, Emerging Signal 기능 구현",
    ],
    result: "신규 ETF 아이디어와 데이터 기반 마케팅 방향을 제안했습니다.",
    tags: ["ETF", "금융 데이터", "AI Agent", "마케팅 전략", "Python"],
    links: [{ label: "마케팅 제안서", href: "" }],
  },
  {
    id: "stockclaw",
    index: "02",
    title: "StockClaw",
    subtitle: "자연어 기반 AI 투자일임 서비스",
    period: "기간 정보 추가 예정",
    role: "서비스 기획 · 금융 데이터 통합 · 기능 구현",
    achievement: "자연어로 연결한 투자 워크플로",
    problem:
      "분산된 금융 정보 탐색과 투자 기록, 매매 과정을 하나의 대화형 경험으로 연결하고자 했습니다.",
    actions: [
      "텔레그램 자연어 명령 기반 종목 조회·차트·매매 기능 기획",
      "DART 공시 분석과 투자일지 작성 기능 구현",
      "기업명·종목코드·거래소 심볼을 연결해 이종 금융 데이터를 표준화",
    ],
    result: "조회부터 분석, 기록, 매매까지 이어지는 AI 투자 서비스 흐름을 구현했습니다.",
    tags: ["AI Finance", "DART", "Telegram", "Node.js", "API"],
    links: [
      { label: "GitHub", href: "" },
      { label: "시연 영상", href: "" },
      { label: "설계서", href: "" },
    ],
  },
  {
    id: "seoulm8",
    index: "03",
    title: "SeoulM8",
    subtitle: "외국인 관광객을 위한 AI 서울 하루 코스 추천",
    period: "기간 정보 추가 예정",
    role: "프런트엔드 · UX/UI · 경로 알고리즘 · 브랜딩 · 발표",
    achievement: "장려상 수상",
    problem:
      "언어와 정보의 장벽을 낮추고, 관광객의 취향과 이동 동선을 함께 고려한 하루 여행 경험을 설계했습니다.",
    actions: [
      "React·Vite 기반 반응형 프런트엔드와 10개 언어 지원",
      "방문지 조합과 이동 효율을 고려한 경로 추천 알고리즘 설계",
      "Naver Maps/Search API와 Gemini API 연동",
    ],
    result: "아이디어를 실제 배포 가능한 다국어 AI 여행 서비스로 구현했습니다.",
    tags: ["React", "Vite", "Gemini API", "Naver API", "UX/UI"],
    links: [
      { label: "사이트 방문", href: "" },
      { label: "GitHub", href: "" },
    ],
  },
  {
    id: "ai-etf-research",
    index: "04",
    title: "AI 뉴스 토픽과 ETF 성과 연구",
    subtitle: "뉴스 토픽 변화와 금융시장 반응의 관계 분석",
    period: "기간 정보 추가 예정",
    role: "연구 설계 · 텍스트 분석 · ETF 성과 분석",
    achievement: "산업 내러티브를 금융 지표로 검증",
    problem:
      "한국 AI 산업 뉴스의 토픽 변화가 관련 ETF의 수익률과 거래 활성도에 어떤 관계를 갖는지 분석했습니다.",
    actions: [
      "AI 반도체·소프트웨어·데이터센터/클라우드 토픽 분석",
      "전력망·원전/SMR·로봇 등 AI 인프라 확장 테마 분류",
      "토픽 추이와 ETF 수익률·거래량·거래대금의 관계 검토",
    ],
    result: "뉴스 내러티브와 ETF 시장 지표를 연결하는 연구 프레임을 설계했습니다.",
    tags: ["NLP", "Topic Modeling", "ETF", "Python", "Research"],
    links: [
      { label: "연구설계서", href: "" },
      { label: "최종 보고서", href: "" },
    ],
  },
  {
    id: "finance-society",
    index: "05",
    title: "금융경제분석학회",
    subtitle: "거시 지표 분석과 테마 투자 가설 검증",
    period: "기간 정보 추가 예정",
    role: "매크로 분석 · 투자 가설 수립 · 포트폴리오 운용",
    achievement: "데이터에서 투자 가설까지",
    problem:
      "거시경제 환경과 산업별 구조적 변화를 실제 투자 가설과 포트폴리오로 연결했습니다.",
    actions: [
      "FRED API를 활용한 미국 고용·금리·물가 지표 분석",
      "방산·원전·조선 산업의 투자 논리와 리스크 검토",
      "글로벌 ETF 기반 모의 포트폴리오 구성 및 운용",
    ],
    result: "거시 데이터에 근거한 테마별 투자 가설과 포트폴리오를 구축했습니다.",
    tags: ["FRED API", "Macro", "ETF", "Portfolio", "Research"],
    links: [{ label: "매크로 분석 보고서", href: "" }],
  },
  {
    id: "persona-aware-fashion-ai",
    index: "06",
    title: "Persona-Aware Fashion Marketing AI",
    subtitle: "이미지 이해와 페르소나 기반 AI 마케팅 카피 생성",
    period: "기간 정보 추가 예정",
    role: "Computer Vision · Vision-Language Models · Prompt Engineering",
    achievement: "생성 전략별 사실성·제어 가능성·자연스러움 비교",
    problem:
      "이미지 하나만으로 맞춤형 마케팅 문구를 생성할 수 있을까?",
    actions: [
      "CLIP을 활용해 의류의 색상·패턴·카테고리·스타일 속성 추론",
      "추론한 상품 속성과 소비자 페르소나를 연결한 마케팅 문구 생성",
      "Rule-based·Persona Template·Vision-Language Model 생성 전략 비교",
    ],
    result:
      "단순 이미지 캡셔닝을 넘어 사실성, 제어 가능성, 자연스러움 사이의 균형을 검증했습니다.",
    tags: ["Computer Vision", "CLIP", "Vision-Language Models", "Prompt Engineering", "Marketing AI"],
    links: [
      { label: "Report", href: "" },
      { label: "GitHub", href: "" },
    ],
  },
  {
    id: "xai-autonomous-driving",
    index: "07",
    title: "Explainable AI for Autonomous Driving",
    subtitle: "자율주행 객체 탐지 모델의 의사결정을 설명하는 XAI 분석",
    period: "기간 정보 추가 예정",
    role: "Explainable AI · Computer Vision · Deep Learning",
    achievement: "환경별 판단 근거와 설명 신뢰성 분석",
    problem:
      "AI는 왜 그렇게 판단했을까?",
    actions: [
      "YOLOv8 객체 탐지 모델에 Grad-CAM 기반 시각화와 RISE 적용",
      "주간·야간·우천 환경에서 모델이 활용하는 시각 정보 비교",
      "Insertion·Deletion Game을 통한 설명 신뢰성 정량 평가",
    ],
    result:
      "악천후 환경일수록 객체보다 주변 맥락 정보에 더 크게 의존하는 경향을 확인했습니다.",
    tags: ["Explainable AI (XAI)", "YOLOv8", "Grad-CAM", "RISE", "Computer Vision", "Deep Learning"],
    links: [
      { label: "Report", href: "" },
      { label: "GitHub", href: "" },
    ],
  },
];

export const reports = [
  {
    title: "KODEX ETF 마케팅 제안서",
    description: "ETF 자금 유입 신호를 포착하는 AI Agent와 마케팅 전략",
    date: "작성일 추가 예정",
    file: "",
    cover: "/images/report-kodex.svg",
  },
  {
    title: "StockClaw 서비스 설계서",
    description: "자연어 기반 AI 투자 서비스의 기능과 데이터 구조",
    date: "작성일 추가 예정",
    file: "",
    cover: "/images/report-stockclaw.svg",
  },
  {
    title: "AI 뉴스 토픽과 ETF 성과 연구보고서",
    description: "AI 산업 토픽 변화와 ETF 시장 지표의 관계 분석",
    date: "작성일 추가 예정",
    file: "",
    cover: "/images/report-research.svg",
  },
  {
    title: "미국 거시경제 분석 보고서",
    description: "고용·금리·물가 지표와 투자 환경 분석",
    date: "작성일 추가 예정",
    file: "",
    cover: "/images/report-macro.svg",
  },
];

// 새 사이트는 이 배열에 같은 형식으로 추가하세요.
export const websites = [
  {
    title: "SeoulM8",
    description: "취향과 동선을 고려해 서울의 하루를 설계하는 다국어 AI 여행 서비스",
    role: "Frontend · UX/UI · Algorithm · Branding",
    tags: ["React", "Vite", "Gemini API", "Naver Maps"],
    thumbnail: "/images/website-seoulm8.svg",
    siteUrl: "",
    githubUrl: "",
  },
];

// Playground 작업은 이 배열에 추가하세요. 실제 URL이나 이미지가 생기면 빈 문자열만 교체하면 됩니다.
export const playgroundItems = [
  {
    title: "사진전시회 웹사이트",
    description: "사진 전시를 웹에서 경험할 수 있도록 제작한 전시 웹사이트",
    type: "WEB EXHIBITION",
    thumbnail: "",
    siteUrl: "",
  },
];
