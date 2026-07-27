"use client";

import { useState } from "react";
import { MenuIcon } from "./Icons";

const nav = [
  ["About", "#about"],
  ["Projects", "#projects"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState<"KOR" | "EN">("KOR");
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const texturePath = `${basePath}/images/45-degree-fabric-dark.png`;
  return (
    <header className="site-header">
      <span className="header-texture" style={{ backgroundImage: `url("${texturePath}")` }} aria-hidden="true" />
      <div className="nav-wrap">
        <a className="wordmark" href={`${basePath}/#top`} aria-label="김유라 포트폴리오 홈">YOURZ</a>
        <nav className={open ? "nav-links open" : "nav-links"} aria-label="주요 메뉴">
          {nav.map(([label, href]) => (
            <a key={href} href={`${basePath}/${href}`} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a href={`${basePath}/playground/`} onClick={() => setOpen(false)}>Playground</a>
          <a href={`${basePath}/#contact`} onClick={() => setOpen(false)}>연락처</a>
          <div className="language-toggle mobile-language" aria-label="언어 선택">
            {(["KOR", "EN"] as const).map(item => (
              <button type="button" className={language === item ? "active" : ""} aria-pressed={language === item} key={item} onClick={() => setLanguage(item)}>{item}</button>
            ))}
          </div>
        </nav>
        <nav className="nav-group" aria-label="주요 메뉴">
          {nav.map(([label, href]) => <a key={href} href={`${basePath}/${href}`}>{label}</a>)}
          <a href={`${basePath}/playground/`}>Playground</a>
        </nav>
        <div className="language-toggle" aria-label="언어 선택">
          {(["KOR", "EN"] as const).map(item => (
            <button type="button" className={language === item ? "active" : ""} aria-pressed={language === item} key={item} onClick={() => setLanguage(item)}>{item}</button>
          ))}
        </div>
        <button className="menu-button" type="button" aria-label={open ? "메뉴 닫기" : "메뉴 열기"} aria-expanded={open} onClick={() => setOpen(!open)}>
          <MenuIcon open={open} />
        </button>
      </div>
    </header>
  );
}
