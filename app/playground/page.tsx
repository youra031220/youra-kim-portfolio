import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { playgroundItems } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Playground | 김유라 포트폴리오",
  description: "김유라의 실험과 사이드 프로젝트를 소개하는 공간입니다.",
};

const assetPath = (path: string) =>
  path.startsWith("/") ? `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}` : path;

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
            <h1>Experiments &amp; Side Projects</h1>
          </header>

          <div className="playground-grid">
            {playgroundItems.map(item => (
              <article className="project-card playground-project-card" key={item.title}>
                <a
                  className="project-card-link"
                  href={item.siteUrl || undefined}
                  target={item.siteUrl ? "_blank" : undefined}
                  rel={item.siteUrl ? "noreferrer" : undefined}
                >
                  <div className="project-card-period">
                    <span>{item.type}</span>
                    <span>PLAYGROUND</span>
                  </div>
                  <div className="project-card-name">
                    <h3>{item.title}</h3>
                  </div>
                  <div className="project-thumbnail">
                    {item.thumbnail ? (
                      <Image src={assetPath(item.thumbnail)} alt={`${item.title} 미리보기`} fill sizes="(max-width: 700px) 100vw, 50vw" />
                    ) : (
                      <span>WEB<br />EXHIBITION</span>
                    )}
                  </div>
                  <div className="project-card-summary">
                    <p>{item.description}</p>
                    <div className="project-card-bottom">
                      <div className="tags">
                        <span>Interactive Web</span>
                        <span>3D Gallery</span>
                      </div>
                      <span className="project-detail-link">
                        <span>{item.siteUrl ? "사이트 방문" : "링크 추가 예정"}</span>
                        <span aria-hidden="true">↗</span>
                      </span>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
