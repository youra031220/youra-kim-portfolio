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
  website?: string;
  period: string;
  role: string;
  achievement: string;
  problem: string;
  actions: string[];
  result: string;
  learnings?: string[];
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
      "Research Design",
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

// 프로젝트 카드의 하트와 About 스킬 선택 상태를 연결합니다.
export const projectSkillMap: Record<string, string[]> = {
  kodex: [
    "Service Planning", "Business Strategy", "Market Research", "EDA",
    "Data Visualization", "AI Agent Design", "Prompt Engineering",
    "Financial Modeling", "Python", "APIs", "Data Preprocessing",
    "Web Scraping", "LLMs", "Google Colab", "Jupyter Notebook",
    "Microsoft Office", "Google Workspace", "Notion", "FnGuide", "Render",
  ],
  stockclaw: [
    "Service Planning", "Wireframing", "Prototyping", "AI Agent Design",
    "Prompt Engineering", "Python", "SQL", "JavaScript", "HTML/CSS",
    "React", "Node.js", "Express.js", "APIs", "Web Scraping",
    "Data Preprocessing", "Natural Language Processing", "Git", "VS Code",
    "GitHub", "Microsoft Office", "Google Workspace", "Notion", "LLMs", "Render",
  ],
  seoulm8: [
    "Service Planning", "Business Strategy", "User Journey Mapping", "Wireframing",
    "Prototyping", "Market Research", "AI Agent Design", "Prompt Engineering",
    "Data Visualization", "Figma", "Python", "JavaScript",
    "HTML/CSS", "React", "Vite", "Node.js", "Express.js", "APIs",
    "Responsive Web Design", "Git", "VS Code", "GitHub", "Microsoft Office",
    "Google Workspace", "LLMs", "Vercel", "Render",
  ],
  "ai-etf-research": [
    "Research Design", "EDA", "Data Visualization", "Topic Modeling",
    "Financial Modeling", "Prompt Engineering", "Python", "SQL", "APIs",
    "Data Preprocessing", "Natural Language Processing", "Web Scraping",
    "Google Colab", "Jupyter Notebook", "Microsoft Office", "Google Workspace",
    "Notion",
  ],
  "finance-society": [
    "Business Strategy", "Market Research", "Financial Modeling",
    "Monte Carlo Simulation", "EDA", "Data Visualization", "Python", "APIs",
    "Microsoft Office", "Google Colab", "Jupyter Notebook", "FnGuide",
  ],
  "persona-aware-fashion-ai": [
    "Research Design", "Prompt Engineering", "Data Visualization", "Python",
    "APIs", "ML&DL", "Natural Language Processing", "Computer Vision",
    "Google Colab", "Jupyter Notebook", "Microsoft Office", "Overleaf", "LLMs",
  ],
  "xai-autonomous-driving": [
    "Research Design", "Data Visualization", "Python", "ML&DL", "Computer Vision",
    "Explainable AI", "Google Colab", "Jupyter Notebook", "Microsoft Office",
    "Overleaf",
  ],
};

const projectOrder = [
  "kodex",
  "ai-etf-research",
  "stockclaw",
  "finance-society",
  "seoulm8",
  "persona-aware-fashion-ai",
  "xai-autonomous-driving",
];

export const projects: Project[] = [
  {
    id: "kodex",
    index: "01",
    title: "KODEX ETF Marketing Intelligence Agent",
    subtitle: "삼성자산운용 KODEX ETF 채널별 마케팅 개선방안 도출 프로젝트",
    website: "https://etf-kore.onrender.com/",
    thumbnail: "/images/thumbnails/ETF_Marketing.png",
    period: "2026.05–2026.06",
    role: "문제 정의 · 데이터 분석 · AI Agent 기획/개발 · 마케팅 전략",
    achievement: "프로젝트 최우수상",
    problem:
      "ETF 시장에서는 뉴스, 검색 트렌드, 경쟁사 홈페이지, 유튜브, 순매수 등 다양한 데이터를 각각 확인한 뒤 담당자의 경험을 바탕으로 마케팅 전략을 수립하는 경우가 많았습니다. 이 과정은 데이터 수집과 분석에 많은 시간이 소요될 뿐 아니라, 투자자의 관심이 형성되는 초기 시장 신호를 빠르게 포착하기 어렵다는 한계가 있었습니다.\n\n이에 다양한 금융·비정형 데이터를 하나의 AI Agent로 통합 분석하여 시장 변화와 경쟁사 전략을 조기에 탐지하고, 실제 실행 가능한 ETF 마케팅 전략까지 제안하는 AI 기반 의사결정 지원 시스템을 기획·개발했습니다.",
    actions: [
      "국내 주요 은행·증권사 앱의 ETF 구매 여정과 UX를 분석하고, 운용사 노출 구조 및 마케팅 접점을 비교하여 AI Agent의 핵심 모니터링 항목을 설계했습니다.",
      "KRX ETF 데이터, 뉴스, 블로그, 유튜브, 검색 트렌드, 경쟁사 홈페이지 등 다양한 데이터를 자동 수집·통합하는 AI Agent를 설계했습니다.",
      "Market · Evidence · Competitors · Net Buy · ETF Brief로 구성된 멀티 에이전트 기반 ETF 마케팅 인텔리전스 시스템을 기획했습니다.",
      "Momentum Score, Marketing Intensity Score, Opportunity Score 등 시장 변화와 초기 관심 신호를 정량화하는 분석 지표를 설계했습니다.",
      "Gemini 기반 AI 분석을 활용해 ETF 시장 변화, 경쟁사 마케팅 활동, 투자자 관심도를 종합 분석하고 실행 가능한 마케팅 전략을 자동 생성하도록 구현했습니다.",
      "AI Agent 분석 결과를 바탕으로 반도체 세분화 선점전략, CoreDEX 브랜딩, 오프라인 교육 프로그램 등 실제 적용 가능한 마케팅 전략을 제안하여 최우수 팀으로 선정되었습니다.",
    ],
    result: "신규 ETF 아이디어와 데이터 기반 마케팅 방향을 제안했습니다.",
    learnings: [
      "기술보다 문제 정의가 먼저라는 점을 배웠습니다. 단순히 AI 모델을 만드는 것이 아니라, 현업 담당자가 실제 어떤 의사결정을 어려워하는지 이해하는 과정이 프로젝트의 핵심이라는 것을 경험했습니다.",
      "데이터를 연결하는 능력이 AI 성능만큼 중요하다는 것을 체감했습니다. 뉴스, 검색량, 순매수, 경쟁사 콘텐츠처럼 성격이 다른 데이터를 하나의 분석 체계로 통합하면서 데이터 구조 설계의 중요성을 배웠습니다.",
      "AI는 분석보다 의사결정을 지원할 때 더 큰 가치를 만든다는 것을 경험했습니다. 분석 결과를 그대로 보여주는 것이 아니라 실행 가능한 마케팅 액션으로 연결하는 구조를 설계하며 AI Agent의 역할을 고민했습니다.",
      "정량 지표 설계가 서비스의 신뢰도를 결정한다는 점을 배웠습니다. Momentum Score, Marketing Intensity Score 등 다양한 지표를 설계하면서 ‘왜 이 ETF를 마케팅 대상으로 추천하는가’를 설명할 수 있는 근거를 만드는 것이 중요하다는 것을 알게 되었습니다.",
      "현업과 협업하며 기술과 비즈니스를 함께 고려하는 사고방식을 익혔습니다. 실제 자산운용사의 요구사항을 반영하며 분석 정확도뿐 아니라 실무 활용성과 운영 가능성을 함께 고려하는 경험을 쌓았습니다.",
    ],
    tags: [
      "Python",
      "Gemini API",
      "LLM",
      "React",
      "Node.js",
      "JavaScript",
      "KRX API",
      "Naver Search API",
      "YouTube Data API",
      "Git",
      "Prompt Engineering",
      "Data Analysis",
    ],
    links: [
      { label: "서비스 방문", href: "https://etf-kore.onrender.com/" },
      { label: "마케팅 제안서", href: "" },
    ],
  },
  {
    id: "stockclaw",
    index: "03",
    title: "StockClaw",
    subtitle: "2026 한이음 ICT 드림업 공모전: 자연어 기반 AI 투자일임 서비스",
    period: "2026.03–2026.10",
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
    index: "05",
    title: "SeoulM8",
    subtitle: "외국인 관광객을 위한 AI 서울 하루 코스 추천",
    website: "https://seoulmatebeta.vercel.app/",
    thumbnail: "/images/thumbnails/SeoulM8.png",
    period: "2025.09–2025.12",
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
      { label: "사이트 방문", href: "https://seoulmatebeta.vercel.app/" },
      { label: "GitHub", href: "" },
    ],
  },
  {
    id: "ai-etf-research",
    index: "02",
    title: "AI 뉴스 토픽과 ETF 성과 연구",
    subtitle: "뉴스 토픽 변화와 금융시장 반응의 관계 분석",
    period: "2026.07–2026.08",
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
    index: "04",
    title: "금융경제분석학회",
    subtitle: "거시경제 지표 분석과 산업테마 분석 보고서 작성",
    website: "https://safeofficial.github.io/safe-sogang.github.io/",
    thumbnail: "/images/thumbnails/Finance_Society.png",
    period: "2026.03–2026.07",
    role: "매크로 분석 · 투자 가설 수립 · 포트폴리오 운용",
    achievement: "금융 데이터에서 투자가설까지",
    problem:
      "거시경제 환경과 산업별 구조적 변화를 실제 투자 가설과 포트폴리오로 연결했습니다.",
    actions: [
      "FRED API를 활용한 미국 고용·금리·물가 지표 분석",
      "방산·원전·조선 산업의 투자 논리와 리스크 검토",
      "글로벌 ETF 기반 모의 포트폴리오 구성 및 운용",
    ],
    result: "거시 데이터에 근거한 테마별 투자 가설과 포트폴리오를 구축했습니다.",
    tags: ["FRED API", "Macroeconomics", "Portfolio Management", "Portfolio", "Research"],
    links: [
      { label: "학회 사이트", href: "https://safeofficial.github.io/safe-sogang.github.io/" },
      { label: "매크로 분석 보고서", href: "" },
    ],
  },
  {
    id: "persona-aware-fashion-ai",
    index: "06",
    title: "Persona-Aware Fashion Marketing AI",
    subtitle: "이미지 이해와 페르소나 기반 AI 마케팅 카피 생성",
    thumbnail: "/images/thumbnails/Fashion_Marketing_CV.png",
    period: "2025.09–2025.12",
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
    thumbnail: "/images/thumbnails/XAI_Autonomous_Driving.png",
    period: "2025.09–2025.12",
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
].sort((a, b) => projectOrder.indexOf(a.id) - projectOrder.indexOf(b.id));

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
