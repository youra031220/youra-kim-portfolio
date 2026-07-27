"use client";

import { useEffect, useState } from "react";

type Theme = "romance" | "play";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("romance");

  useEffect(() => {
    const current = document.documentElement.dataset.theme;
    setTheme(current === "play" ? "play" : "romance");
  }, []);

  function selectTheme(nextTheme: Theme) {
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("youra-portfolio-theme", nextTheme);
    setTheme(nextTheme);
  }

  return (
    <div className="theme-toggle" role="group" aria-label="포트폴리오 색상 테마 선택">
      {(["romance", "play"] as const).map((option) => (
        <button
          key={option}
          type="button"
          className={`theme-option ${option}`}
          aria-label={`${option.toUpperCase()} 테마로 변경`}
          aria-pressed={theme === option}
          onClick={() => selectTheme(option)}
        >
          <span className={`theme-swatch ${option}`} aria-hidden="true" />
          <span>{option.toUpperCase()}</span>
          <i aria-hidden="true" />
        </button>
      ))}
    </div>
  );
}
