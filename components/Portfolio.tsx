"use client";

import Image from "next/image";
import { capabilities, profile, projects } from "@/data/portfolio";
import { Header } from "./Header";
import { LinkButton } from "./LinkButton";
import { FadeIn } from "./FadeIn";
import { ArrowDown, ArrowUpRight } from "./Icons";

const assetPath = (path: string) =>
  path.startsWith("/") ? `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}` : path;

function SectionTitle({ title, copy }: { title: string; copy?: string }) {
  return <div className="section-heading">
    <h2>{title}</h2>
    {copy && <p>{copy}</p>}
  </div>;
}

export function Portfolio() {
  const contactLinks = [
    { label: "Email", href: profile.email ? `mailto:${profile.email}` : "" },
    { label: "GitHub", href: profile.github },
    { label: "LinkedIn", href: profile.linkedin },
  ];

  return <>
    <Header />
    <main id="top">
      <section className="hero">
        <div className="hero-folio" aria-hidden="true">PORTFOLIO · 2026</div>
        <div className="container hero-grid">
          <FadeIn className="hero-copy">
            <p className="hero-kicker">BUSINESS · FINANCE · DATA · ARTIFICIAL INTELLIGENCE · SERVICE</p>
            <h1>금융 데이터를<br /><em>서비스와 전략</em>으로<br />연결합니다.</h1>
            <p className="hero-intro">
              금융 도메인 지식과 데이터·AI 활용 역량을 바탕으로<br className="desktop-only" />
              {" "}문제를 발견하고 실제 서비스와 전략으로 구현하는 기획자입니다.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">프로젝트 보기<ArrowDown /></a>
              {profile.resume ? <a className="button secondary" href={profile.resume} download>이력서 다운로드</a> :
                <span className="button secondary disabled" aria-disabled="true">이력서 추가 예정</span>}
            </div>
          </FadeIn>
          <FadeIn className="hero-art" delay={100}>
            <Image
              src={assetPath("/images/mydrawing.png")}
              alt="김유라를 표현한 선화 일러스트"
              fill
              priority
              sizes="(max-width: 700px) 70vw, 34vw"
            />
          </FadeIn>
          <FadeIn className="hero-profile" delay={120}>
            <div className="cover-line" aria-hidden="true"><span>Y</span><i /></div>
            <p className="cover-quote">“From signal<br />to strategy.”</p>
            <div className="profile-line"><span>NAME</span><strong>{profile.nameKo} · {profile.nameEn}</strong></div>
            <div className="profile-line">
              <span>STUDY</span>
              <strong className="study-value">
                <span>{profile.university}</span>
                <span>{profile.majors}</span>
              </strong>
            </div>
            <div className="profile-line"><span>FOCUS</span><strong>비즈니스 전략 · 금융 디지털 · AI 전략 · 데이터 분석</strong></div>
          </FadeIn>
        </div>
        <a className="scroll-cue" href="#about" aria-label="소개 섹션으로 이동"><span>CONTINUE READING</span><i /></a>
      </section>

      <section id="about" className="section about">
        <div className="container">
          <SectionTitle title="About" />
          <div className="about-grid">
            <FadeIn className="about-lead"><p>경영학과 아트&테크놀로지를 복수전공하며 <strong>금융, 데이터 분석, AI, 서비스기획</strong>을 함께 공부했습니다.</p></FadeIn>
            <FadeIn className="about-detail" delay={80}>
              <p>숫자를 읽는 데서 멈추지 않습니다. 문제를 정의하고 필요한 데이터를 수집·분석한 뒤, 사용자가 체감할 수 있는 기능과 서비스로 설계합니다.</p>
              <p>분석의 논리와 기획의 언어, 구현의 현실성을 함께 이해하며 아이디어를 프로토타입과 전략으로 끝까지 구체화할 수 있습니다.</p>
            </FadeIn>
          </div>
          <FadeIn className="capability-row">
            {capabilities.map((item, i) => <span key={item}><b>{String(i + 1).padStart(2, "0")}</b>{item}</span>)}
          </FadeIn>
        </div>
      </section>

      <section id="projects" className="section projects">
        <div className="container">
          <SectionTitle title="Featured Projects" />
          <div className="project-list">
            {projects.map((project, i) => (
              <FadeIn key={project.id} className="project-card" delay={Math.min(i * 50, 150)}>
                <div className="project-top">
                  <span className="project-index">{project.index}</span>
                  <div className="project-title"><p>{project.subtitle}</p><h3>{project.title}</h3></div>
                  <div className="achievement"><span>KEY OUTCOME</span><strong>{project.achievement}</strong></div>
                </div>
                <div className="project-body">
                  <div className="project-meta">
                    <div><span>PERIOD</span><p>{project.period}</p></div>
                    <div><span>ROLE</span><p>{project.role}</p></div>
                  </div>
                  <div className="project-story">
                    <div><span>PROBLEM</span><p>{project.problem}</p></div>
                    <div><span>WHAT I DID</span><ul>{project.actions.map(action => <li key={action}>{action}</li>)}</ul></div>
                    <div className="result"><span>RESULT</span><p>{project.result}</p></div>
                  </div>
                </div>
                <div className="project-footer">
                  <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <div className="project-links">{project.links.map(link => <LinkButton key={link.label} item={link} />)}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="container">
          <SectionTitle title="Contact" />
          <div className="contact-grid">
          <div className="contact-label"><p>프로젝트 및 협업 문의</p></div>
          <div className="contact-right"><p>편하게 연락해 주세요.</p>
            <div className="contact-links">{contactLinks.map(link => link.href ?
              <a key={link.label} href={link.href} target={link.label !== "Email" ? "_blank" : undefined} rel="noreferrer">{link.label}<ArrowUpRight /></a> :
              <span key={link.label}>{link.label}<small>추가 예정</small></span>)}
            </div>
          </div>
          </div>
        </div>
      </section>
    </main>
    <footer>
      <div className="footer-masthead" aria-hidden="true">YOURZ</div>
      <div className="container footer-folio"><span>© 2026 Youra Kim</span><span>BUSINESS · FINANCE · DATA · AI · SERVICE</span></div>
    </footer>
  </>;
}
