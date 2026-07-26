"use client";

import { useState } from "react";
import { MenuIcon } from "./Icons";

const nav = [
  ["소개", "#about"],
  ["프로젝트", "#projects"],
  ["문서", "#reports"],
  ["웹사이트", "#websites"],
  ["연락처", "#contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <a className="wordmark" href="#top" aria-label="김유라 포트폴리오 홈">
          YK<span>.</span>
        </a>
        <nav className={open ? "nav-links open" : "nav-links"} aria-label="주요 메뉴">
          {nav.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
        <button className="menu-button" type="button" aria-label={open ? "메뉴 닫기" : "메뉴 열기"} aria-expanded={open} onClick={() => setOpen(!open)}>
          <MenuIcon open={open} />
        </button>
      </div>
    </header>
  );
}
