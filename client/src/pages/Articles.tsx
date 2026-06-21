import { BlueprintLayout, BlueprintCorner } from "@/components/BlueprintLayout";

const articles = [
  {
    tag: "/Tag",
    date: "May 2026",
    title: "Article title : a very long title that is imported",
    body: "This is a placeholder description for an imported article. It offers a short preview of the piece — what it explores, why it matters, and what a reader should take away — before they decide to dive into the full write-up.",
  },
  {
    tag: "/Tag",
    date: "May 2026",
    title: "Article title : a very long title that is imported",
    body: "This is a placeholder description for an imported article. It offers a short preview of the piece — what it explores, why it matters, and what a reader should take away — before they decide to dive into the full write-up.",
  },
  {
    tag: "/Tag",
    date: "May 2026",
    title: "Article title : a very long title that is imported",
    body: "This is a placeholder description for an imported article. It offers a short preview of the piece — what it explores, why it matters, and what a reader should take away — before they decide to dive into the full write-up.",
  },
];

export function Articles(): JSX.Element {
  return (
    <BlueprintLayout>
      {/* ── TITLE BLOCK ── */}
      <section
        style={{
          position: "relative",
          border: "1px solid rgba(0,83,224,0.18)",
          padding: "32px 28px",
          marginBottom: 40,
        }}
      >
        <BlueprintCorner position="tl" />
        <BlueprintCorner position="tr" />
        <BlueprintCorner position="bl" />
        <BlueprintCorner position="br" />

        <div
          className="mono"
          style={{
            position: "absolute",
            top: -10,
            left: 20,
            background: "#020035",
            padding: "0 8px",
            color: "#4d8fff",
            fontSize: 9,
            letterSpacing: "0.15em",
            opacity: 0.7,
          }}
        >
          § ARTICLES
        </div>

        <h1
          className="heading-font"
          style={{
            fontSize: "clamp(40px, 8vw, 80px)",
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: "-0.01em",
            color: "#c0c7d3",
            margin: 0,
          }}
          data-testid="text-articles-title"
        >
          Articles
        </h1>

        {/* Dimension annotation line */}
        <div style={{ marginTop: 18, display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 8, height: 1, background: "#4d8fff", opacity: 0.5 }} />
          <span
            className="mono"
            style={{ color: "#4d8fff", fontSize: 9, letterSpacing: "0.15em", opacity: 0.6 }}
          >
            WRITING · NOTES · ESSAYS
          </span>
          <div
            style={{
              flex: 1,
              height: 1,
              background: "linear-gradient(to right, rgba(77,143,255,0.4), transparent)",
            }}
          />
        </div>
      </section>

      {/* ── ARTICLE LIST ── */}
      <section style={{ maxWidth: 744, position: "relative" }}>
        {articles.map((article, i) => (
          <article
            key={i}
            style={{ marginBottom: i === articles.length - 1 ? 0 : 44 }}
            data-testid={`article-${i}`}
          >
            <div className="bp-article-head">
              <span
                className="heading-font"
                style={{
                  color: "#1b52d7",
                  fontSize: 15,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
                data-testid={`text-article-tag-${i}`}
              >
                {article.tag}
              </span>
              <span
                className="mono"
                style={{
                  color: "#777a90",
                  fontSize: 12,
                  letterSpacing: "0.05em",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
                data-testid={`text-article-date-${i}`}
              >
                {article.date}
              </span>
            </div>

            <h2
              className="heading-font"
              style={{
                color: "#c0c7d3",
                fontSize: "clamp(22px, 3.5vw, 30px)",
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: "0.01em",
                margin: "10px 0 10px",
              }}
              data-testid={`text-article-title-${i}`}
            >
              {article.title}
            </h2>

            <p
              className="body-font"
              style={{ color: "#777a90", fontSize: 15, lineHeight: 1.65, margin: 0 }}
              data-testid={`text-article-body-${i}`}
            >
              {article.body}
            </p>

            {i !== articles.length - 1 && (
              <div className="blueprint-divider" style={{ marginTop: 44 }} />
            )}
          </article>
        ))}
      </section>
    </BlueprintLayout>
  );
}
