import { BlueprintLayout } from "@/components/BlueprintLayout";

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
      {/* ── ARTICLE LIST ── */}
      <section style={{ maxWidth: 744, position: "relative" }}>
        {articles.map((article, i) => (
          <article
            key={i}
            style={{ marginBottom: i === articles.length - 1 ? 0 : 44 }}
            data-testid={`article-${i}`}
            className="mb-[44px]">
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
