"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { profile, projects, projectSkillMap, skillGroups } from "@/data/portfolio";
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
  const [likedProjects, setLikedProjects] = useState<string[]>([]);
  const [language, setLanguage] = useState<"KOR" | "EN">("KOR");
  return <>
    <Header language={language} onLanguageChange={setLanguage} />
    <main id="top">
      <section className="hero">
        <div className="container hero-grid">
          <FadeIn className={`hero-copy ${language === "EN" ? "hero-copy-en" : ""}`}>
            <div className="hero-language-content" key={language}>
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
                <p className="hero-en-study">currently studying Business Administration and Art &amp; Technology @ Sogang University.</p>
              </>}
              <div className="hero-actions">
                <a className="button primary" href="#projects">{language === "KOR" ? "프로젝트 보기" : "View projects"}<ArrowDown /></a>
              </div>
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
                    const selected = selectedSkills.includes(item)
                      || likedProjects.some(projectId => projectSkillMap[projectId]?.includes(item));
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
                <button
                  type="button"
                  className={`project-like ${likedProjects.includes(project.id) ? "is-liked" : ""}`}
                  aria-label={`${project.title} 좋아요`}
                  aria-pressed={likedProjects.includes(project.id)}
                  onClick={() => setLikedProjects(current =>
                    current.includes(project.id)
                      ? current.filter(id => id !== project.id)
                      : [...current, project.id]
                  )}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 20.5 10.55 19.18C5.4 14.5 2 11.42 2 7.65 2 4.57 4.42 2.15 7.5 2.15c1.74 0 3.41.81 4.5 2.09a6.02 6.02 0 0 1 4.5-2.09c3.08 0 5.5 2.42 5.5 5.5 0 3.77-3.4 6.85-8.55 11.54L12 20.5Z" />
                  </svg>
                </button>
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
                      <div className="tags">{(project.cardTags ?? project.tags.slice(0, 3)).map(tag => <span key={tag}>{tag}</span>)}</div>
                      {project.website ? (
                        <span
                          className="project-detail-link"
                          role="link"
                          tabIndex={0}
                          aria-label={`${project.title} 배포 사이트 새 탭에서 열기`}
                          onClick={(event) => {
                            event.preventDefault();
                            event.stopPropagation();
                            window.open(project.website, "_blank", "noopener,noreferrer");
                          }}
                          onKeyDown={(event) => {
                            if (event.key === "Enter" || event.key === " ") {
                              event.preventDefault();
                              event.stopPropagation();
                              window.open(project.website, "_blank", "noopener,noreferrer");
                            }
                          }}
                        >
                          <span>Link</span><ArrowUpRight />
                        </span>
                      ) : (
                        <span className="project-detail-link"><span>Link</span><ArrowUpRight /></span>
                      )}
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
            <div className="contact-socials" aria-label="Contact links">
              <a className="contact-social contact-social-github" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 .7A11.5 11.5 0 0 0 8.4 23c.6.1.8-.3.8-.6v-2.2c-3.4.7-4.1-1.4-4.1-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .7Z" />
                </svg>
              </a>
              <a className="contact-social contact-social-linkedin" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5.3 7.8H.7V23h4.6V7.8ZM3 1A2.7 2.7 0 1 0 3 6.4 2.7 2.7 0 0 0 3 1ZM23.3 14.3c0-4.6-2.5-6.8-5.8-6.8-2.7 0-3.9 1.5-4.5 2.5V7.8H8.4V23H13v-7.5c0-2 .4-4 2.9-4 2.4 0 2.5 2.3 2.5 4.1V23H23l.3-8.7Z" />
                </svg>
              </a>
              <a className="contact-social contact-social-email" href={`mailto:${profile.email}`} aria-label="Email">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
                </svg>
              </a>
            </div>
          </div>
          </div>
        </div>
      </section>
    </main>
    <footer>
      <div className="footer-masthead" aria-hidden="true">YOURZ</div>
      <div className="footer-signature">
        <div className="footer-signature-box">© 2026 by Youra Kim</div>
        <button
          className="footer-top-button"
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <svg className="footer-top-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 4 5 11l1.4 1.4 4.6-4.6V20h2V7.8l4.6 4.6L19 11l-7-7Z" />
          </svg>
        </button>
        <div className="footer-signature-box">built from scratch :)</div>
      </div>
    </footer>
  </>;
}
