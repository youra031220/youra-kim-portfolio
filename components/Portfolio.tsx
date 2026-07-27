"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { profile, projects, skillGroups } from "@/data/portfolio";
import { Header } from "./Header";
import { LinkButton } from "./LinkButton";
import { FadeIn } from "./FadeIn";
import { ArrowDown, ArrowUpRight } from "./Icons";

const assetPath = (path: string) =>
  path.startsWith("/") ? `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}` : path;

function SectionTitle({ title, copy }: { title: string; copy?: string }) {
  return <div className="section-heading">
    <div className="container section-heading-inner">
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  </div>;
}

export function Portfolio() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [language, setLanguage] = useState<"KOR" | "EN">("KOR");
  const contactLinks = [
    { label: "Email", href: profile.email ? `mailto:${profile.email}` : "" },
    { label: "GitHub", href: profile.github },
    { label: "LinkedIn", href: profile.linkedin },
  ];

  return <>
    <Header language={language} onLanguageChange={setLanguage} />
    <main id="top">
      <section className="hero">
        <div className="container hero-grid">
          <FadeIn className={`hero-copy ${language === "EN" ? "hero-copy-en" : ""}`}>
            {language === "KOR" ? <>
              <h1>안녕하세요, <em>김유라</em>입니다.</h1>
              <p className="hero-subheadline">데이터와 AI로 문제를 이해하고,<br />서비스와 해결책으로 연결하는 <span>창의적 전략가</span></p>
              <div className="hero-description">
                <p>서강대학교 경영학 · 아트&테크놀로지</p>
                <p>비즈니스 전략, 금융 디지털, AI 서비스 기획과 데이터 분석을 중심으로<br className="desktop-only" />
                  문제를 정의하고 서비스를 구현하는 프로젝트를 진행하고 있습니다.</p>
              </div>
            </> : <>
              <h1>i&apos;m <em>youra</em>--</h1>
              <p className="hero-en-intro">a strategist, product planner, builder,<br />
                financial enthusiast, data explorer,<br />
                AI learner, and someone who enjoys turning<br className="desktop-only" />
                ideas into real products.</p>
              <p className="hero-en-study">currently studying Business Administration<br />
                and Art &amp; Technology @ Sogang University.</p>
            </>}
            <div className="hero-actions">
              <a className="button primary" href="#projects">{language === "KOR" ? "프로젝트 보기" : "View projects"}<ArrowDown /></a>
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
        </div>
        <a className="dive-button" href="#about" aria-label="About 섹션으로 이동">
          <span>Dive in</span><ArrowDown />
        </a>
      </section>

      <section
        id="about"
        className="section about"
        style={{ backgroundImage: `url("${assetPath("/images/fresh-snow.png")}")` }}
      >
        <SectionTitle title="About" />
        <div className="container">
          <div className="about-grid">
            <FadeIn className="about-lead"><p>경영학과 아트&테크놀로지를 복수전공하며 <strong>금융, 데이터 분석, AI, 서비스기획</strong>을 함께 공부했습니다.</p></FadeIn>
            <FadeIn className="about-detail" delay={80}>
              <p>숫자를 읽는 데서 멈추지 않습니다. 문제를 정의하고 필요한 데이터를 수집·분석한 뒤, 사용자가 체감할 수 있는 기능과 서비스로 설계합니다.</p>
              <p>분석의 논리와 기획의 언어, 구현의 현실성을 함께 이해하며 아이디어를 프로토타입과 전략으로 끝까지 구체화할 수 있습니다.</p>
            </FadeIn>
          </div>
          <FadeIn className="skills-matrix">
            {skillGroups.map(group => (
              <div className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <div className="skill-tags">
                  {group.items.map(item => {
                    const selected = selectedSkills.includes(item);
                    return (
                      <button
                        type="button"
                        className={selected ? "is-selected" : ""}
                        aria-pressed={selected}
                        key={item}
                        onClick={() => setSelectedSkills(current =>
                          current.includes(item)
                            ? current.filter(skill => skill !== item)
                            : [...current, item]
                        )}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      <section
        id="projects"
        className="section projects"
        style={{ backgroundImage: `url("${assetPath("/images/low-contrast-linen.png")}")` }}
      >
        <SectionTitle title="Featured Projects" />
        <div className="container">
          <div className="project-list">
            {projects.map((project, i) => (
              <FadeIn key={project.id} className="project-card" delay={Math.min(i * 50, 150)}>
                <Link className="project-card-link" href={`/projects/${project.id}`} aria-label={`${project.title} 상세 페이지 보기`}>
                  <div className="project-card-period">
                    <span>{project.period}</span>
                  </div>
                  <div className="project-card-name">
                    <h3>{project.title}</h3>
                  </div>
                  <div className="project-thumbnail">
                    {project.thumbnail ? (
                      <Image
                        src={assetPath(project.thumbnail)}
                        alt={`${project.title} 프로젝트 썸네일`}
                        fill
                        sizes="(max-width: 700px) 100vw, 50vw"
                      />
                    ) : (
                      <span>THUMBNAIL<br />COMING SOON</span>
                    )}
                  </div>
                  <div className="project-card-summary">
                    <p>{project.subtitle}</p>
                    <div className="project-card-outcome">
                      <span>KEY OUTCOME</span>
                      <strong>{project.achievement}</strong>
                    </div>
                    <div className="project-card-bottom">
                      <div className="tags">{project.tags.slice(0, 3).map(tag => <span key={tag}>{tag}</span>)}</div>
                      <span className="project-detail-link">Link <ArrowUpRight /></span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <SectionTitle title="Contact" />
        <div className="container">
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
