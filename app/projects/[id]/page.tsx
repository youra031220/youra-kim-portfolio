import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { LinkButton } from "@/components/LinkButton";
import { projects } from "@/data/portfolio";

export function generateStaticParams() {
  return projects.map(project => ({ id: project.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find(item => item.id === id);
  return project ? {
    title: `${project.title} | 김유라 포트폴리오`,
    description: project.subtitle,
  } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find(item => item.id === id);
  if (!project) notFound();

  return (
    <>
      <Header />
      <main className="project-detail-page">
        <div className="project-detail-bar">
          <div className="container">
            <Link href="/#projects">← Featured Projects</Link>
            <span>{project.index}</span>
          </div>
        </div>

        <article className="container project-detail">
          <header className="project-detail-hero">
            <p>{project.subtitle}</p>
            <h1>{project.title}</h1>
            <strong>{project.achievement}</strong>
          </header>

          <div className="project-detail-meta">
            <div><span>PERIOD</span><p>{project.period}</p></div>
            <div><span>ROLE</span><p>{project.role}</p></div>
          </div>

          <div className="project-detail-content">
            <section>
              <span>PROBLEM</span>
              <h2>문제 정의</h2>
              <p>{project.problem}</p>
            </section>
            <section>
              <span>WHAT I DID</span>
              <h2>수행 내용</h2>
              <ol>{project.actions.map(action => <li key={action}>{action}</li>)}</ol>
            </section>
            <section>
              <span>RESULT</span>
              <h2>결과</h2>
              <p>{project.result}</p>
            </section>
          </div>

          <footer className="project-detail-footer">
            <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            <div className="project-links">{project.links.map(link => <LinkButton key={link.label} item={link} />)}</div>
          </footer>
        </article>
      </main>
    </>
  );
}
