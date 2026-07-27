"use client";

import { useState } from "react";
import { MenuIcon } from "./Icons";

const nav = [
  ["소개", "#about"],
  ["프로젝트", "#projects"],
  ["문서", "#reports"],
  ["웹사이트", "#websites"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const texturePath = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/45-degree-fabric-dark.png`;
  return (
    <header className="site-header">
      <span className="header-texture" style={{ backgroundImage: `url("${texturePath}")` }} aria-hidden="true" />
      <div className="nav-wrap">
        <a className="wordmark" href="#top" aria-label="김유라 포트폴리오 홈">YOURZ</a>
        <nav className={open ? "nav-links open" : "nav-links"} aria-label="주요 메뉴">
          {nav.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}>연락처</a>
        </nav>
        <nav className="nav-group" aria-label="주요 메뉴">
          {nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a className="header-cta" href="#contact">함께 이야기하기</a>
        <button className="menu-button" type="button" aria-label={open ? "메뉴 닫기" : "메뉴 열기"} aria-expanded={open} onClick={() => setOpen(!open)}>
          <MenuIcon open={open} />
        </button>
      </div>
    </header>
  );
}
