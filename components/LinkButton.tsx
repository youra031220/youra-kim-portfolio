import { ArrowUpRight } from "./Icons";
import type { LinkItem } from "@/data/portfolio";

export function LinkButton({ item, primary = false }: { item: LinkItem; primary?: boolean }) {
  if (!item.href) {
    return <span className={`link-button disabled ${primary ? "primary" : ""}`} aria-disabled="true" title="링크 추가 예정">
      {item.label}<span className="link-status">추가 예정</span>
    </span>;
  }
  return <a className={`link-button ${primary ? "primary" : ""}`} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" download={item.download}>
    {item.label}<ArrowUpRight />
  </a>;
}
