import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const navItems = [
  { label: "HOME", active: true },
  { label: "ARTICLES", active: false },
];

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
    detail:
      "Industry Sponsor, Mentor & Reviewer — Indiana University Studio Practice",
  },
];

const educationItems = [
  {
    title: "M.S Human Computer interaction & Design",
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
  },
  {
    title:
      "Graphical User Interface for Progressive Disclosure of Rich Metadata for Data Field Selection",
    detail: "P29333-US",
  },
];

const mentorshipItems = [
  {
    title: "AStudio NYU Design Studio",
    detail: "Industry Mentor",
  },
  {
    title: "Adobe Creative Apprenticeship",
    detail: "Mentor & Reviewer",
  },
  {
    title: "Adobe Creative Retreat",
    detail: "Mentor & Reviewer",
  },
];

export const PortfolioFrame = (): JSX.Element => {
  return (
    <main className="min-h-screen w-full bg-[#020035]">
      <div className="mx-auto flex min-h-screen w-full max-w-[1280px] justify-center px-6 py-10 sm:px-10 lg:px-16">
        <div className="w-full max-w-[860px]">
          <header className="mb-10 flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.label}
                type="button"
                variant="ghost"
                className={
                  item.active
                    ? "h-auto rounded-lg border-2 border-[#292929] bg-[#2500b2] px-3 py-[7px] font-component-m-medium text-[length:var(--component-m-medium-font-size)] font-[number:var(--component-m-medium-font-weight)] leading-[var(--component-m-medium-line-height)] tracking-[var(--component-m-medium-letter-spacing)] text-neutral-100 [font-style:var(--component-m-medium-font-style)] hover:bg-[#2500b2] hover:text-neutral-100"
                    : "h-auto rounded-lg bg-transparent px-3 py-[7px] font-component-m-medium text-[length:var(--component-m-medium-font-size)] font-[number:var(--component-m-medium-font-weight)] leading-[var(--component-m-medium-line-height)] tracking-[var(--component-m-medium-letter-spacing)] text-[#c0c7d3] [font-style:var(--component-m-medium-font-style)] hover:bg-transparent hover:text-[#c0c7d3]"
                }
              >
                {item.label}
              </Button>
            ))}
          </header>
          <section className="space-y-6">
            <h1 className="[font-family:'Inter',Helvetica] text-[56px] font-bold leading-none tracking-[0] text-[#c0c7d3] sm:text-[72px] lg:text-[108.2px]">
              Shruthi Andru
            </h1>
            <p className="[font-family:'Inter',Helvetica] text-[24px] font-bold leading-tight tracking-[0] sm:text-[30px] lg:text-[40.4px]">
              <span className="text-[#0053e0]">is a</span>
              <span className="text-[#777888]">&nbsp;</span>
              <span className="text-[#c0c7d3]">Designer</span>
              <span className="text-[#c0c6d4]">&nbsp;</span>
              <span className="text-[#0053e0]">designing for Designers</span>
            </p>
          </section>
          <section className="mt-12 max-w-[744px] [font-family:'Inter',Helvetica] text-[17.3px] tracking-[0]">
            <h2 className="font-semibold leading-[23px] text-[#1b52d7]">
              /At Present
            </h2>
            <p className="mt-1 font-normal leading-[23px] text-[#777a90]">
              She is currently{" "}
              <span className="font-semibold">
                designing harness infrastructure for legacy enterprise systems
              </span>{" "}
              at Adobe and is fighting an uphill battle for{" "}
              <span className="font-semibold">
                redefining the role of Design at Adobe
              </span>{" "}
              this new AI Era.
              <br />
              She serves as a bridge between Scientific research and
              Engineering,{" "}
              <span className="font-semibold">facilitating workshops</span> and{" "}
              <span className="font-semibold">consults with Product Teams</span>{" "}
              to improve their design processes through AI enablement.
              <br />
              She also serves on the grant panel committee at Adobe and
              regularly volunteers her time for Pro Bono design services. Mostly
              recently at
              <br />
              Outside of work, she regularly gives guest lectures in NYC and
              serves as an industry mentor sponsoring projects for various grad
              school&apos;s studio classes
            </p>
          </section>
          <section className="mt-12 max-w-[744px] [font-family:'Inter',Helvetica] text-[17.3px] tracking-[0]">
            <h2 className="font-semibold leading-normal text-[#1b52d7]">
              /Previously
            </h2>
            <p className="font-normal leading-normal text-[#777a91]">
              She had designed for AI Agents and experiences for Enterprise
              marketing workflows
            </p>
          </section>
          <section className="mt-8 max-w-[744px] [font-family:'Inter',Helvetica] text-[17.3px] tracking-[0]">
            <h2 className="font-semibold leading-normal text-[#1b52d7]">
              /Past Life
            </h2>
            <p className="font-normal leading-normal text-[#777a91]">
              An architect in a previous lifetime
            </p>
          </section>
          <section className="mt-16 grid grid-cols-1 gap-x-[42px] gap-y-10 md:grid-cols-[361px_341px]">
            <Card className="border-0 bg-transparent shadow-none">
              <CardContent className="p-0">
                <section className="flex flex-col gap-4">
                  <h3 className="[font-family:'Inter',Helvetica] text-[17.3px] font-semibold tracking-[0] text-[#1b52d7]">
                    Speaking Engagements
                  </h3>
                  <div className="flex flex-col gap-3">
                    {speakingEngagements.map((item) => (
                      <p
                        key={item.title}
                        className="[font-family:'Inter',Helvetica] text-[17.3px] font-normal leading-normal tracking-[0] text-[#777a91]"
                      >
                        <span className="font-medium">{item.title}</span>
                        <span> | </span>
                        <span className="font-light">{item.detail}</span>
                      </p>
                    ))}
                  </div>
                </section>
              </CardContent>
            </Card>
            <Card className="border-0 bg-transparent shadow-none">
              <CardContent className="p-0">
                <section className="flex flex-col gap-4">
                  <h3 className="[font-family:'Inter',Helvetica] text-[17.3px] font-semibold tracking-[0] text-[#1b52d7]">
                    Patents + Publications
                  </h3>
                  <div className="flex flex-col gap-3">
                    {patentsAndPublications.map((item) => (
                      <p
                        key={item.title}
                        className="[font-family:'Inter',Helvetica] text-[17.3px] font-normal leading-normal tracking-[0] text-[#777a91]"
                      >
                        <span className="font-medium">{item.title} </span>
                        <span className="font-light">| {item.detail}</span>
                      </p>
                    ))}
                    <p className="[font-family:'Inter',Helvetica] text-[17.3px] font-normal leading-normal tracking-[0] text-[#777a91]">
                      <span className="font-medium">
                        Interface Framework for Human-AI Collaboration within
                        Intelligent User Interface Ecosystems |
                      </span>{" "}
                      <span className="font-light">Preprint on Arxiv: </span>
                      <a
                        href="https://doi.org/10.48550/arXiv.2602.22343"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-light underline"
                      >
                        https://doi.org/10.48550/arXiv.2602.2234
                      </a>
                    </p>
                  </div>
                </section>
              </CardContent>
            </Card>
            <Card className="border-0 bg-transparent shadow-none">
              <CardContent className="p-0">
                <section className="flex flex-col gap-4">
                  <h3 className="[font-family:'Inter',Helvetica] text-[17.3px] font-semibold tracking-[0] text-[#1b52d7]">
                    Teaching
                  </h3>
                  <div className="flex flex-col gap-3">
                    {teachingItems.map((item) => (
                      <p
                        key={item.title}
                        className="[font-family:'Inter',Helvetica] text-[17.3px] font-normal leading-normal tracking-[0] text-[#777a91]"
                      >
                        <span className="font-medium">{item.title}</span>
                        <span> | </span>
                        <span className="font-light">{item.detail}</span>
                      </p>
                    ))}
                  </div>
                </section>
              </CardContent>
            </Card>
            <Card className="border-0 bg-transparent shadow-none md:mt-[-2px]">
              <CardContent className="p-0">
                <section className="flex flex-col gap-4">
                  <h3 className="[font-family:'Inter',Helvetica] text-[17.3px] font-semibold tracking-[0] text-[#1b52d7]">
                    Mentorship + Judging
                  </h3>
                  <div className="flex flex-col gap-3">
                    {mentorshipItems.map((item) => (
                      <p
                        key={item.title}
                        className="[font-family:'Inter',Helvetica] text-[17.3px] font-normal leading-normal tracking-[0] text-[#777a91]"
                      >
                        <span className="font-medium">{item.title}</span>
                        <span className="font-light"> | {item.detail}</span>
                      </p>
                    ))}
                  </div>
                </section>
              </CardContent>
            </Card>
            <Card className="border-0 bg-transparent shadow-none md:col-start-1">
              <CardContent className="p-0">
                <section className="flex flex-col gap-4">
                  <h3 className="[font-family:'Inter',Helvetica] text-[17.3px] font-semibold tracking-[0] text-[#1b52d7]">
                    Education
                  </h3>
                  <div className="flex flex-col gap-3">
                    {educationItems.map((item) => (
                      <p
                        key={item.title}
                        className="[font-family:'Inter',Helvetica] text-[17.3px] font-normal leading-normal tracking-[0] text-[#777a91]"
                      >
                        <span className="font-medium">{item.title}</span>
                        <span className="font-light"> | {item.detail}</span>
                      </p>
                    ))}
                  </div>
                </section>
              </CardContent>
            </Card>
          </section>
          <Separator className="mt-14 h-px max-w-[742px] bg-[#3a3767]" />
        </div>
      </div>
    </main>
  );
};
