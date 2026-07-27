import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { playgroundItems } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Playground | 김유라 포트폴리오",
  description: "김유라의 실험과 사이드 프로젝트를 소개하는 공간입니다.",
};

export default function PlaygroundPage() {
  return (
    <>
      <Header />
      <main className="playground-page">
        <div className="project-detail-bar">
          <div className="container">
            <span>Playground</span>
            <span>EXPERIMENTS & SIDE PROJECTS</span>
          </div>
        </div>
        <div className="container playground-content">
          <header className="playground-intro">
            <p>PLAYGROUND</p>
            <h1>Experiments &<br />Side Projects</h1>
          </header>

          <div className="playground-grid">
            {playgroundItems.map(item => (
              <article className="playground-card" key={item.title}>
                <div className="playground-thumbnail">
                  {item.thumbnail ? (
                    <Image src={item.thumbnail} alt={`${item.title} 미리보기`} fill sizes="(max-width: 700px) 100vw, 50vw" />
                  ) : (
                    <span>IMAGE<br />COMING SOON</span>
                  )}
                </div>
                <div className="playground-card-info">
                  <span>{item.type}</span>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  {item.siteUrl ? (
                    <a href={item.siteUrl} target="_blank" rel="noreferrer">사이트 방문 ↗</a>
                  ) : (
                    <span className="playground-link-disabled">링크 추가 예정</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
