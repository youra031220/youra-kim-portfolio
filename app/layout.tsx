import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://youra031220.github.io/youra-kim-portfolio/"),
  title: "김유라 | 비즈니스·금융·데이터·AI 서비스 기획 포트폴리오",
  description:
    "비즈니스와 금융 도메인 지식, 데이터·AI 활용 역량으로 문제를 발견하고 서비스와 전략으로 구현하는 김유라의 포트폴리오입니다.",
  openGraph: {
    title: "김유라 | Youra Kim Portfolio",
    description: "금융 데이터를 서비스와 전략으로 연결합니다.",
    type: "website",
    locale: "ko_KR",
    images: [{ url: "/images/og-cover.svg", width: 1200, height: 630, alt: "김유라 포트폴리오" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" data-theme="romance" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("youra-portfolio-theme");if(t==="play"||t==="romance"){document.documentElement.dataset.theme=t}}catch(e){}})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
