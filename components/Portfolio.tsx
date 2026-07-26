"use client";

import Image from "next/image";
import { capabilities, profile, projects, reports, websites } from "@/data/portfolio";
import { Header } from "./Header";
import { LinkButton } from "./LinkButton";
import { FadeIn } from "./FadeIn";
import { ArrowDown, ArrowUpRight } from "./Icons";

function SectionTitle({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="section-heading">
    <p className="eyebrow">{eyebrow}</p>
    <div><h2>{title}</h2>{copy && <p>{copy}</p>}</div>
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
        <div className="hero-orbit" aria-hidden="true"><span /><span /><span /></div>
        <div className="container hero-grid">
          <FadeIn className="hero-copy">
            <p className="hero-kicker">FINANCE × DATA × AI × SERVICE</p>
            <h1>금융 데이터를<br /><em>서비스와 전략</em>으로<br />연결합니다.</h1>
            <p className="hero-intro">
              금융 도메인 지식과 데이터·AI 활용 역량을 바탕으로<br className="desktop-only" />
              문제를 발견하고 실제 서비스와 전략으로 구현하는 기획자입니다.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">프로젝트 보기<ArrowDown /></a>
              {profile.resume ? <a className="button secondary" href={profile.resume} download>이력서 다운로드</a> :
                <span className="button secondary disabled" aria-disabled="true">이력서 추가 예정</span>}
            </div>
          </FadeIn>
          <FadeIn className="hero-profile" delay={120}>
            <div className="monogram">YK</div>
            <div className="profile-line"><span>NAME</span><strong>{profile.nameKo} · {profile.nameEn}</strong></div>
            <div className="profile-line"><span>STUDY</span><strong>{profile.school}</strong></div>
            <div className="profile-line"><span>FOCUS</span><strong>금융 디지털 · AI 전략 · 데이터 분석</strong></div>
          </FadeIn>
        </div>
        <a className="scroll-cue" href="#about" aria-label="소개 섹션으로 이동"><span>SCROLL</span><i /></a>
      </section>

      <section id="about" className="section about">
        <div className="container">
          <SectionTitle eyebrow="01 · ABOUT" title="복잡한 문제를 발견하고, 실행 가능한 답으로 만듭니다." />
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
          <SectionTitle eyebrow="02 · FEATURED PROJECTS" title="데이터를 읽고, 기회를 설계한 프로젝트" copy="핵심 성과와 문제 해결 과정을 중심으로 정리했습니다." />
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

      <section id="reports" className="section reports">
        <div className="container">
          <SectionTitle eyebrow="03 · REPORTS & PROPOSALS" title="논리와 근거를 담은 문서" copy="연구보고서, 마케팅 제안서, 서비스 설계서를 모았습니다." />
          <div className="report-grid">
            {reports.map((report, i) => (
              <FadeIn className="report-card" key={report.title} delay={i * 60}>
                <div className="report-cover"><Image src={report.cover} alt={`${report.title} 표지 미리보기`} fill sizes="(max-width: 700px) 100vw, 25vw" /></div>
                <div className="report-info">
                  <span className="document-type">DOCUMENT · {report.date}</span>
                  <h3>{report.title}</h3><p>{report.description}</p>
                  <div className="report-actions">
                    <LinkButton item={{ label: "미리보기", href: report.file }} />
                    <LinkButton item={{ label: "다운로드", href: report.file, download: true }} />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="websites" className="section websites">
        <div className="container">
          <SectionTitle eyebrow="04 · WEBSITES" title="아이디어를 작동하는 화면으로" copy="직접 기획하고 구현한 웹 기반 서비스를 소개합니다." />
          <div className="website-grid">
            {websites.map(site => (
              <FadeIn className="website-card" key={site.title}>
                <div className="website-shot"><Image src={site.thumbnail} alt={`${site.title} 웹사이트 화면`} fill sizes="(max-width: 800px) 100vw, 60vw" /></div>
                <div className="website-info">
                  <span className="site-no">WEB PROJECT</span><h3>{site.title}</h3><p>{site.description}</p>
                  <dl><dt>담당 역할</dt><dd>{site.role}</dd></dl>
                  <div className="tags">{site.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <div className="project-links">
                    <LinkButton item={{ label: "사이트 방문", href: site.siteUrl }} primary />
                    <LinkButton item={{ label: "GitHub", href: site.githubUrl }} />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container contact-grid">
          <div><p className="eyebrow light">05 · CONTACT</p><h2>데이터에서 시작해,<br />사람이 쓰는 답을 만듭니다.</h2></div>
          <div className="contact-right"><p>금융과 기술 사이의 의미 있는 연결을 함께 만들고 싶습니다.</p>
            <div className="contact-links">{contactLinks.map(link => link.href ?
              <a key={link.label} href={link.href} target={link.label !== "Email" ? "_blank" : undefined} rel="noreferrer">{link.label}<ArrowUpRight /></a> :
              <span key={link.label}>{link.label}<small>추가 예정</small></span>)}
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer><div className="container"><span>© 2026 Youra Kim</span><span>FINANCE · DATA · AI · SERVICE</span></div></footer>
  </>;
}
