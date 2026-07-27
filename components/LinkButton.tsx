import { ArrowUpRight } from "./Icons";
import type { LinkItem } from "@/data/portfolio";

export function LinkButton({ item, primary = false }: { item: LinkItem; primary?: boolean }) {
  if (!item.href) {
    return <span className={`link-button disabled ${primary ? "primary" : ""}`} aria-disabled="true" title="링크 추가 예정">
      {item.label}<span className="link-status">추가 예정</span>
    </span>;
  }
  const href = item.href.startsWith("/")
    ? `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${item.href}`
    : item.href;
  return <a className={`link-button ${primary ? "primary" : ""}`} href={href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" download={item.download}>
    {item.label}<ArrowUpRight />
  </a>;
}
