import { ReactNode } from "react";
import { Link, useLocation } from "wouter";

export function BlueprintCorner({
  position,
}: {
  position: "tl" | "tr" | "bl" | "br";
}) {
  const styles: Record<string, React.CSSProperties> = {
    tl: { top: 0, left: 0, borderWidth: "1.5px 0 0 1.5px" },
    tr: { top: 0, right: 0, borderWidth: "1.5px 1.5px 0 0" },
    bl: { bottom: 0, left: 0, borderWidth: "0 0 1.5px 1.5px" },
    br: { bottom: 0, right: 0, borderWidth: "0 1.5px 1.5px 0" },
  };
  return (
    <div
      style={{
        position: "absolute",
        width: 20,
        height: 20,
        borderColor: "rgba(0,83,224,0.7)",
        borderStyle: "solid",
        ...styles[position],
      }}
    />
  );
}

const navItems = [
  { label: "HOME", path: "/" },
  { label: "ARTICLES", path: "/articles" },
];

export function BlueprintLayout({ children }: { children: ReactNode }) {
  const [location] = useLocation();

  return (
    <main
      className="blueprint-grid"
      style={{ minHeight: "100vh", width: "100%", position: "relative" }}
    >
      {/* Page-level corner markers */}
      <BlueprintCorner position="tl" />
      <BlueprintCorner position="tr" />
      <BlueprintCorner position="bl" />
      <BlueprintCorner position="br" />

      {/* Top ruler annotation */}
      <div
        className="mono bp-side-label"
        style={{
          position: "absolute",
          top: 10,
          left: "50%",
          transform: "translateX(-50%)",
          color: "#4d8fff",
          fontSize: 9,
          letterSpacing: "0.18em",
          opacity: 0.4,
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        PORTFOLIO — REV.2026 — SHRUTHI ANDRU
      </div>

      {/* Left vertical label */}
      <div
        className="mono bp-side-label"
        style={{
          position: "fixed",
          left: 12,
          top: "50%",
          transform: "translateY(-50%) rotate(-90deg)",
          color: "#0053e0",
          fontSize: 9,
          letterSpacing: "0.2em",
          opacity: 0.35,
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        DESIGN · HCI · AI · ARCHITECTURE
      </div>

      {/* Right vertical label */}
      <div
        className="mono bp-side-label"
        style={{
          position: "fixed",
          right: 12,
          top: "50%",
          transform: "translateY(-50%) rotate(90deg)",
          color: "#0053e0",
          fontSize: 9,
          letterSpacing: "0.2em",
          opacity: 0.35,
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        SHEET 01 OF 01 · SCALE: NTS
      </div>

      <div className="bp-container">
        {/* ── HEADER / NAV ── */}
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 48,
          }}
        >
          <nav style={{ display: "flex", gap: 6, alignItems: "center" }}>
            {navItems.map((item) => {
              const isActive = location === item.path;
              return (
                <Link
                  key={item.label}
                  href={item.path}
                  className={isActive ? "nav-active" : "nav-inactive"}
                  aria-current={isActive ? "page" : undefined}
                  data-testid={`link-nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </header>

        {children}

        {/* ── FOOTER (matches Figma mock) ── */}
        <footer style={{ marginTop: 56 }}>
          <div style={{ height: 1, background: "#3a3767" }} />
          <div className="bp-footer-row">
            <p className="body-font bp-footer-tag" data-testid="text-footer-tagline">
              Designed with love, coffee, lots of cat videos, hot girl music &amp;
              channeling my inner Taylor Swift
            </p>
            <p className="body-font bp-footer-links">
              <a
                href="https://www.linkedin.com/in/shruthiandru"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-linkedin"
              >
                LinkedIn
              </a>
              <span className="sep">|</span>
              <a href="mailto:shruthiandru@gmail.com" data-testid="link-email">
                shruthiandru@gmail.com
              </a>
              <span className="sep">|</span>
              <span data-testid="text-footer-copyright">Shruthi Andru . 2026</span>
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
