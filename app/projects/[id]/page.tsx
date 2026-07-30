import type { Metadata } from "next";
import Image from "next/image";
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
  const otherProjects = projects.filter(item => item.id !== project.id).slice(0, 2);
  const assetPath = (path: string) =>
    path.startsWith("/") ? `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}` : path;

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

        <article className="project-detail">
          <header className="container project-detail-hero">
            <p>{project.subtitle}</p>
            <h1>{project.title}</h1>
            <strong>{project.achievement}</strong>
          </header>

          <div className={`container project-detail-visual ${project.thumbnail ? "" : "is-placeholder"}`}>
            {project.thumbnail ? (
              <Image
                src={assetPath(project.thumbnail)}
                alt={`${project.title} 프로젝트 대표 화면`}
                fill
                priority
                sizes="(max-width: 700px) 100vw, 1280px"
              />
            ) : (
              <div>
                <span>PROJECT VISUAL</span>
                <strong>{project.title}</strong>
              </div>
            )}
          </div>

          <section
            className="project-detail-meta"
            style={{ backgroundImage: `url("${assetPath("/images/stucco.png")}")` }}
          >
            <div className="container project-detail-meta-inner">
              <div><span>ROLE</span><p>{project.role}</p></div>
              <div><span>TIMELINE</span><p>{project.period}</p></div>
              <div><span>TEAM</span><p>팀 구성 정보 추가 예정</p></div>
              <div><span>KEY OUTCOME</span><p>{project.achievement}</p></div>
            </div>
          </section>

          <div className="container project-detail-content">
            <section className="project-detail-section">
              <h2 className="project-section-title">PROJECT OVERVIEW</h2>
              <p className="project-detail-copy">{project.problem}</p>
            </section>

            <section className="project-detail-section">
              <h2 className="project-section-title">PROJECT RECAP</h2>
              <ol className="project-process-list">
                {project.actions.map((action, index) => (
                  <li key={action}><span>{String(index + 1).padStart(2, "0")}</span><p>{action}</p></li>
                ))}
              </ol>
            </section>

            <section className="project-result-panel">
              <h2 className="project-section-title">LEARNINGS</h2>
              {project.learnings ? (
                <ul className="project-learning-list">
                  {project.learnings.map(learning => <li key={learning}>{learning}</li>)}
                </ul>
              ) : (
                <h2>{project.result}</h2>
              )}
            </section>

            <section className="project-detail-section project-resources">
              <div>
                <h2 className="project-section-title">SKILLS</h2>
                <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </div>
              <div>
                <h2 className="project-section-title">FILES & LINKS</h2>
                <div className="project-links">{project.links.map(link => <LinkButton key={link.label} item={link} />)}</div>
              </div>
            </section>

            <section className="other-projects">
              <h2 className="project-section-title">MORE PROJECTS</h2>
              <div className="other-project-grid">
                {otherProjects.map(item => (
                  <Link href={`/projects/${item.id}`} className="other-project-card" key={item.id}>
                    <div className={`other-project-image ${item.thumbnail ? "" : "is-placeholder"}`}>
                      {item.thumbnail ? (
                        <Image src={assetPath(item.thumbnail)} alt="" fill sizes="(max-width: 700px) 100vw, 50vw" />
                      ) : (
                        <span>{item.title}</span>
                      )}
                    </div>
                    <p>{item.subtitle}</p>
                    <h3>{item.title}</h3>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </article>
      </main>
    </>
  );
}
