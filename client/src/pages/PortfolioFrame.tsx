import { BlueprintLayout, BlueprintCorner } from "@/components/BlueprintLayout";

const speakingEngagements = [
  {
    title: "Trust By Design: A Framework for Human-AI Interaction Pattern",
    detail: "UXPA International Conference 2026",
  },
  {
    title: "Human Centered Design and Responsible AI Design",
    detail: "Featured Podcast Guest — Spotlight Sessions",
  },
  {
    title: "10 by 10, Lessons from a Non-Linear Career in Design",
    detail: "Invited Speaker — Cooper Hewitt, Smithsonian Design Museum",
  },
  {
    title: "AI for Designers",
    detail: "Panelist — Indiana University HCI/d Club",
  },
];

const teachingItems = [
  {
    title: "Studio Practice",
    detail: "Guest Lecturer — School of Visual Arts (SVA), NYC",
  },
  {
    title: "Interaction Design",
    detail: "Guest Lecturer — The Cooper Union, NYC",
  },
  {
    title: "Designing for Decision Fatigue",
    detail: "Industry Sponsor, Mentor & Reviewer — Indiana University Studio Practice",
  },
];

const educationItems = [
  {
    title: "M.S Human Computer Interaction & Design",
    detail: "Indiana University Bloomington",
  },
  {
    title: "Bachelor of Architecture",
    detail: "National Institute of Technology, Jaipur",
  },
];

const patentsAndPublications = [
  {
    title: "AI Assistant Context Awareness and UI Control",
    detail: "P14488-US",
    link: null,
  },
  {
    title: "Graphical User Interface for Progressive Disclosure of Rich Metadata for Data Field Selection",
    detail: "P29333-US",
    link: null,
  },
  {
    title: "Interface Framework for Human-AI Collaboration within Intelligent User Interface Ecosystems",
    detail: "Preprint on Arxiv",
    link: "https://doi.org/10.48550/arXiv.2602.22343",
  },
];

const mentorshipItems = [
  { title: "AStudio NYU Design Studio", detail: "Industry Mentor" },
  { title: "Adobe Creative Apprenticeship", detail: "Mentor & Reviewer" },
  { title: "Adobe Creative Retreat", detail: "Mentor & Reviewer" },
];

function AnnotationDot({ number }: { number: number }) {
  return (
    <span
      className="mono"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 18,
        height: 18,
        borderRadius: "50%",
        border: "1px solid rgba(0,83,224,0.6)",
        color: "#4d8fff",
        fontSize: 9,
        flexShrink: 0,
        marginRight: 8,
        opacity: 0.85,
      }}
    >
      {number}
    </span>
  );
}

function SectionLabel({ label, index }: { label: string; index: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
      <span
        className="mono"
        style={{
          color: "#4d8fff",
          fontSize: 9,
          letterSpacing: "0.15em",
          opacity: 0.6,
          minWidth: 24,
        }}
      >
        {index}
      </span>
      <h3
        className="heading-font"
        style={{
          color: "#0053e0",
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          margin: 0,
        }}
      >
        {label}
      </h3>
      <div
        style={{
          flex: 1,
          height: 1,
          background: "linear-gradient(to right, rgba(0,83,224,0.4), transparent)",
          maxWidth: 80,
        }}
      />
    </div>
  );
}

function ItemRow({ title, detail, link }: { title: string; detail: string; link?: string | null }) {
  return (
    <div
      style={{
        borderLeft: "1px solid rgba(0,83,224,0.3)",
        paddingLeft: 12,
        position: "relative",
        marginBottom: 12,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: -1,
          top: 0,
          width: 1,
          height: 10,
          background: "#0053e0",
        }}
      />
      <p
        className="body-font"
        style={{ margin: 0, color: "#c0c7d3", fontSize: 14, fontWeight: 500, lineHeight: 1.4 }}
      >
        {title}
      </p>
      <p
        className="mono"
        style={{ margin: "3px 0 0", color: "#5a6080", fontSize: 11, letterSpacing: "0.05em" }}
      >
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#4d8fff", textDecoration: "underline" }}
          >
            {detail}
          </a>
        ) : (
          detail
        )}
      </p>
    </div>
  );
}

export const PortfolioFrame = (): JSX.Element => {
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

        {/* Sheet ref tag */}
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
          § TITLE BLOCK
        </div>

        <h1
          className="heading-font"
          style={{
            fontSize: "clamp(52px, 10vw, 108px)",
            fontWeight: 700,
            lineHeight: 0.92,
            letterSpacing: "-0.01em",
            color: "#c0c7d3",
            margin: 0,
          }}
        >
          Shruthi
          <br />
          Andru
        </h1>

        <p
          className="heading-font"
          style={{
            fontSize: "clamp(18px, 3.5vw, 36px)",
            fontWeight: 400,
            marginTop: 16,
            lineHeight: 1.2,
            letterSpacing: "0.02em",
          }}
        >
          <span style={{ color: "#0053e0" }}>is a </span>
          <span style={{ color: "#c0c7d3", fontWeight: 600 }}>Designer</span>
          <span style={{ color: "#0053e0" }}> designing for Designers</span>
        </p>

        {/* Dimension annotation line */}
        <div
          style={{
            marginTop: 20,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <div style={{ width: 8, height: 1, background: "#4d8fff", opacity: 0.5 }} />
          <span className="mono" style={{ color: "#4d8fff", fontSize: 9, letterSpacing: "0.15em", opacity: 0.6 }}>PRODUCT DESIGNER · ADOBE INC.</span>
          <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, rgba(77,143,255,0.4), transparent)" }} />
        </div>
      </section>

      {/* ── BIO SECTIONS ── */}
      <section style={{ marginBottom: 36, position: "relative" }}>
        <div
          className="mono"
          style={{
            position: "absolute",
            top: -9,
            left: 0,
            background: "#020035",
            paddingRight: 8,
            color: "#4d8fff",
            fontSize: 9,
            letterSpacing: "0.15em",
            opacity: 0.6,
          }}
        >
          § NARRATIVE
        </div>
        <div
          style={{
            borderTop: "1px solid rgba(0,83,224,0.25)",
            paddingTop: 20,
          }}
        >
          <div style={{ marginBottom: 20 }}>
            <p
              className="heading-font"
              style={{
                color: "#1b52d7",
                fontSize: 15,
                fontWeight: 600,
                letterSpacing: "0.1em",
                margin: "0 0 6px",
                textTransform: "uppercase",
              }}
            >
              /At Present
            </p>
            <p
              className="body-font"
              style={{ color: "#777a90", fontSize: 15, lineHeight: 1.65, margin: 0 }}
            >
              She is currently{" "}
              <strong style={{ color: "#c0c7d3", fontWeight: 600 }}>
                designing harness infrastructure for legacy enterprise systems
              </strong>{" "}
              at Adobe and is fighting an uphill battle for{" "}
              <strong style={{ color: "#c0c7d3", fontWeight: 600 }}>
                redefining the role of Design at Adobe
              </strong>{" "}
              in this new AI Era.
              <br /><br />
              She serves as a bridge between Scientific research and Engineering,{" "}
              <strong style={{ color: "#c0c7d3", fontWeight: 600 }}>facilitating workshops between Scientific Research & Engineering</strong>{" "}
              and{" "}
              <strong style={{ color: "#c0c7d3", fontWeight: 600 }}>consults with Product Teams</strong>{" "}
              to improve their design processes through AI enablement.
              <br /><br />
              She also serves on the grant panel committee at Adobe and regularly volunteers her time for Pro Bono design services. Outside of work, she regularly gives guest lectures in NYC and serves as an industry mentor sponsoring projects for various grad school's studio classes.
            </p>
          </div>

          <div
            style={{ marginBottom: 20, paddingLeft: 20, borderLeft: "1px solid rgba(0,83,224,0.2)" }}
            className="pl-[0px]">
            <p
              className="heading-font"
              style={{
                color: "#1b52d7",
                fontSize: 15,
                fontWeight: 600,
                letterSpacing: "0.1em",
                margin: "0 0 4px",
                textTransform: "uppercase",
              }}
            >
              /Previously
            </p>
            <p className="body-font" style={{ color: "#777a90", fontSize: 15, lineHeight: 1.6, margin: 0 }}>
              She had designed for AI Agents and experiences for Enterprise marketing workflows.
            </p>
          </div>

          <div className="pl-[0px]" style={{ borderLeft: "1px solid rgba(0,83,224,0.1)" }}>
            <p
              className="heading-font"
              style={{
                color: "#1b52d7",
                fontSize: 15,
                fontWeight: 600,
                letterSpacing: "0.1em",
                margin: "0 0 4px",
                textTransform: "uppercase",
              }}
            >
              /Past Life
            </p>
            <p className="body-font" style={{ color: "#777a90", fontSize: 15, lineHeight: 1.6, margin: 0 }}>
              An architect in a previous lifetime.
            </p>
          </div>
        </div>
      </section>

      {/* ── GRID OF SECTIONS ── */}
      <section className="bp-section-grid">
        {/* Speaking Engagements */}
        <div>
          <SectionLabel label="Speaking Engagements" index="A1" />
          {speakingEngagements.map((item, i) => (
            <div key={i} style={{ display: "flex", marginBottom: 14 }}>
              <AnnotationDot number={i + 1} />
              <ItemRow title={item.title} detail={item.detail} />
            </div>
          ))}
        </div>

        {/* Patents + Publications */}
        <div>
          <SectionLabel label="Patents + Publications" index="A2" />
          {patentsAndPublications.map((item, i) => (
            <div key={i} style={{ display: "flex", marginBottom: 14 }}>
              <AnnotationDot number={i + 1} />
              <ItemRow title={item.title} detail={item.detail} link={item.link} />
            </div>
          ))}
        </div>

        {/* Teaching */}
        <div>
          <SectionLabel label="Teaching" index="B1" />
          {teachingItems.map((item, i) => (
            <div key={i} style={{ display: "flex", marginBottom: 14 }}>
              <AnnotationDot number={i + 1} />
              <ItemRow title={item.title} detail={item.detail} />
            </div>
          ))}
        </div>

        {/* Mentorship + Judging */}
        <div>
          <SectionLabel label="Mentorship + Judging" index="B2" />
          {mentorshipItems.map((item, i) => (
            <div key={i} style={{ display: "flex", marginBottom: 14 }}>
              <AnnotationDot number={i + 1} />
              <ItemRow title={item.title} detail={item.detail} />
            </div>
          ))}
        </div>

        {/* Education */}
        <div>
          <SectionLabel label="Education" index="C1" />
          {educationItems.map((item, i) => (
            <div key={i} style={{ display: "flex", marginBottom: 14 }}>
              <AnnotationDot number={i + 1} />
              <ItemRow title={item.title} detail={item.detail} />
            </div>
          ))}
        </div>
      </section>
    </BlueprintLayout>
  );
};
