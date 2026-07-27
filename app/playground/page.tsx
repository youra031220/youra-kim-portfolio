import type { Metadata } from "next";
import { Header } from "@/components/Header";

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
        <div className="container playground-empty">
          <p>PLAYGROUND</p>
          <h1>새로운 작업을<br />준비하고 있습니다.</h1>
        </div>
      </main>
    </>
  );
}
