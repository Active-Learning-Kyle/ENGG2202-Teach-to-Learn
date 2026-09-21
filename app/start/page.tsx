import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "../components/site-shell";

export const metadata: Metadata = {
  title: "Start a Project",
  description:
    "Find a realistic engineering project to learn from, choose an appropriate degree of independence, and prepare a first build for ENGG2202.",
  alternates: {
    canonical:
      "https://active-learning-kyle.github.io/ENGG2202-Teach-to-Learn/start/",
  },
};

const independenceSteps = [
  {
    step: "01",
    title: "Guided Reproduction",
    short: "Build what is already well documented.",
    copy:
      "A project already provides most of the code, CAD, wiring, BOM or build instructions. Your job is to make it work, debug it, understand it and verify what it does.",
    actions: "Build → Debug → Understand → Verify",
    width: "lg:w-[76%]",
    offset: "lg:ml-0",
  },
  {
    step: "02",
    title: "Reconstruct & Complete",
    short: "Fill in meaningful missing engineering work.",
    copy:
      "A useful reference exists, but some important pieces are missing. You may need to create code, CAD, electronics, documentation or integration work yourself.",
    actions: "Find → Fill gaps → Integrate → Explain",
    width: "lg:w-[82%]",
    offset: "lg:ml-[6%]",
  },
  {
    step: "03",
    title: "Adapt & Extend",
    short: "Change a working baseline for a new need.",
    copy:
      "Start from something that works, then modify it for a different context, requirement or performance goal. Compare the new version with the baseline.",
    actions: "Understand → Modify → Compare → Validate",
    width: "lg:w-[88%]",
    offset: "lg:ml-[12%]",
  },
  {
    step: "04",
    title: "Independent Development",
    short: "Own most of the engineering decisions.",
    copy:
      "Begin mainly from a problem, need or broad concept. Your team researches existing work, defines requirements, selects the architecture, integrates the system and iterates.",
    actions: "Define → Research → Design → Integrate → Iterate",
    width: "lg:w-[94%]",
    offset: "lg:ml-[18%]",
  },
];

const projectResources = [
  {
    name: "GitHub",
    label: "Open-source repositories",
    href: "https://github.com/topics",
    copy:
      "Best for real repositories: code, version history, issues, documentation, licences and sometimes CAD or BOM files.",
    tag: "Best overall",
  },
  {
    name: "Hackster.io",
    label: "Hardware & IoT projects",
    href: "https://www.hackster.io/projects",
    copy:
      "Practical embedded, electronics, IoT and hardware projects with build notes, components and code.",
    tag: "Hardware",
  },
  {
    name: "Arduino Project Hub",
    label: "Beginner-friendly builds",
    href: "https://projecthub.arduino.cc/",
    copy:
      "A good place to find documented projects with components, wiring, code and step-by-step build information.",
    tag: "Easy to start",
  },
  {
    name: "Hackaday.io",
    label: "Engineering & maker projects",
    href: "https://hackaday.io/projects",
    copy:
      "Useful for more ambitious projects, development logs, prototypes and engineering experiments.",
    tag: "More advanced",
  },
  {
    name: "OSHWA Directory",
    label: "Certified open-source hardware",
    href: "https://certification.oshwa.org/directory.html",
    copy:
      "Search documented open-source hardware projects by category, including electronics, robotics, environmental work and 3D printing.",
    tag: "Open hardware",
  },
];

const learningResources = [
  {
    name: "Adafruit Learning System",
    href: "https://learn.adafruit.com/",
    copy: "High-quality electronics, sensors, Raspberry Pi and embedded-system tutorials.",
  },
  {
    name: "SparkFun Learn",
    href: "https://learn.sparkfun.com/tutorials/",
    copy: "Technical tutorials for sensors, electronics, communication and prototyping.",
  },
];

const aiTools = [
  { name: "ChatGPT", href: "https://chatgpt.com/" },
  { name: "Gemini", href: "https://gemini.google.com/" },
  { name: "DeepSeek", href: "https://chat.deepseek.com/" },
];

const searchIdeas = [
  "environmental monitoring",
  "smart irrigation",
  "flood monitoring",
  "energy monitoring",
  "solar tracking",
  "material recycling",
  "smart greenhouse",
  "urban sensing",
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

function ExternalArrow() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path d="M6 3h7v7" />
      <path d="m13 3-8 8" />
      <path d="M11 9v4H3V5h4" />
    </svg>
  );
}

export default function StartProjectPage() {
  return (
    <SiteShell>
      <main>
        <section className="overflow-hidden bg-[#0f3420] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-[90rem] gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b8d8bf]">
                ENGG2202 · Start a Project
              </p>
              <h1 className="mt-5 text-5xl font-semibold leading-[0.94] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                Build on
                <span className="block text-[#d7f43c]">what already exists.</span>
              </h1>
            </div>
            <div className="max-w-2xl lg:justify-self-end">
              <p className="text-lg leading-9 text-white/80">
                Engineering rarely starts from a blank page. Find useful work,
                understand it, choose a realistic starting point and begin making
                something you can test.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#find-projects"
                  className="inline-flex items-center gap-2 rounded-full bg-[#d7f43c] px-5 py-3 text-sm font-bold text-[#17351f]"
                >
                  Find project resources <ArrowIcon />
                </a>
                <a
                  href="#independence"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/8 px-5 py-3 text-sm font-bold text-white"
                >
                  Choose a starting point <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="independence"
          className="scroll-mt-24 border-b border-[#d7e4d9] bg-[#f7faf6] px-5 py-16 sm:px-8 lg:px-10 lg:py-24"
        >
          <div className="mx-auto max-w-[90rem]">
            <div className="grid gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#57745e]">
                  Project Independence Ladder
                </p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-[#143421] sm:text-5xl">
                  Start with the amount of support you need.
                </h2>
              </div>
              <div className="max-w-2xl lg:justify-self-end">
                <p className="text-base leading-8 text-[#526858]">
                  These are not grade levels. They describe how much engineering
                  work is already provided at the starting point. You can move
                  upward as your project and confidence develop.
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-[2rem] border border-[#cadbcd] bg-white p-5 sm:p-8 lg:p-10">
              <div className="grid gap-3">
                {independenceSteps.map((item, index) => (
                  <article
                    key={item.step}
                    className={`relative overflow-hidden rounded-[1.45rem] border p-5 sm:p-6 ${item.width} ${item.offset} ${
                      index === independenceSteps.length - 1
                        ? "border-[#b9d72e] bg-[#d7f43c]"
                        : "border-[#d5e2d7] bg-[#f8fbf7]"
                    }`}
                  >
                    <div className="grid gap-4 sm:grid-cols-[auto_1fr] sm:items-start">
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-full text-xs font-bold ${
                          index === independenceSteps.length - 1
                            ? "bg-[#173f28] text-white"
                            : "bg-[#e6f0e7] text-[#52705d]"
                        }`}
                      >
                        {item.step}
                      </span>
                      <div>
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-5">
                          <h3 className="text-xl font-semibold text-[#173823] sm:text-2xl">
                            {item.title}
                          </h3>
                          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#52705d]">
                            {item.actions}
                          </p>
                        </div>
                        <p className="mt-2 font-semibold text-[#31573d]">
                          {item.short}
                        </p>
                        <p className="mt-3 max-w-4xl text-sm leading-7 text-[#526858]">
                          {item.copy}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-[#153f27] p-5 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#b9d8bf]">
                    Moving upward
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white/78">
                    Student engineering ownership increases as fewer design
                    decisions are provided.
                  </p>
                </div>
                <div className="rounded-2xl bg-[#eef6ec] p-5 text-[#244a30]">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#64806b]">
                    Remember
                  </p>
                  <p className="mt-2 text-sm leading-7">
                    A more independent starting point does not automatically mean
                    a higher grade. Quality, understanding, evidence and value
                    added still matter.
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-4 rounded-2xl border border-[#d7e4d9] bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold text-[#173823]">
                    Not sure how much scaffolding your team may need?
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#607566]">
                    Use Engineering Compass as a reflection tool, not as a score
                    or assignment of ability.
                  </p>
                </div>
                <a
                  href="https://active-learning-kyle.github.io/engineering-compass/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-[#b9cfbf] px-5 py-3 text-sm font-bold text-[#214b31]"
                >
                  Open Engineering Compass <ExternalArrow />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="find-projects"
          className="scroll-mt-24 bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-24"
        >
          <div className="mx-auto max-w-[90rem]">
            <div className="grid gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#57745e]">
                  Find something worth building
                </p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-[#143421] sm:text-5xl">
                  Start from real engineering work.
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-8 text-[#526858] lg:justify-self-end">
                Use these platforms to find projects, repositories and reference
                designs. Open the original source and inspect what is actually
                available before deciding.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {projectResources.map((resource) => (
                <a
                  key={resource.name}
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-[15rem] flex-col rounded-[1.6rem] border border-[#d4e1d6] bg-[#f9fbf8] p-6 transition hover:-translate-y-1 hover:border-[#8db596] hover:bg-white"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full bg-[#e8f2e8] px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[#52705d]">
                      {resource.tag}
                    </span>
                    <ExternalArrow />
                  </div>
                  <h3 className="mt-7 text-2xl font-semibold tracking-[-0.03em] text-[#173823]">
                    {resource.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#4f765a]">
                    {resource.label}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[#526858]">
                    {resource.copy}
                  </p>
                </a>
              ))}
            </div>

            <div className="mt-6 rounded-[1.6rem] border border-[#d4e1d6] bg-[#eef6ec] p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#57745e]">
                Search ideas for Green Technology
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {searchIdeas.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#c8d8ca] bg-white px-3.5 py-2 text-sm font-semibold text-[#31573d]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm leading-7 text-[#526858]">
                Combine a topic with terms such as <strong>open source</strong>,{" "}
                <strong>GitHub</strong>, <strong>ESP32</strong>,{" "}
                <strong>Arduino</strong>, <strong>Raspberry Pi</strong>,{" "}
                <strong>BOM</strong>, <strong>CAD</strong> or{" "}
                <strong>prototype</strong>.
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {learningResources.map((resource) => (
                <a
                  key={resource.name}
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-5 rounded-[1.5rem] border border-[#d4e1d6] bg-white p-5 transition hover:border-[#8db596]"
                >
                  <div>
                    <p className="font-semibold text-[#173823]">{resource.name}</p>
                    <p className="mt-1 text-sm leading-6 text-[#607566]">
                      {resource.copy}
                    </p>
                  </div>
                  <ExternalArrow />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#d7e4d9] bg-[#eef6ec] px-5 py-16 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-[90rem]">
            <div className="grid gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#57745e]">
                  Check before you choose
                </p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#143421]">
                  Four questions are enough to start.
                </h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ["Buildable", "Can we realistically build a first version with our time, budget and facilities?"],
                  ["Understandable", "Is there enough information for us to learn how the system works?"],
                  ["Modifiable", "Is there meaningful engineering work we can complete, change or improve?"],
                  ["Testable", "Can we collect evidence to judge whether our work actually works?"],
                ].map(([title, copy]) => (
                  <article
                    key={title}
                    className="rounded-[1.45rem] border border-[#d4e1d6] bg-white p-5"
                  >
                    <h3 className="text-lg font-semibold text-[#173823]">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#526858]">{copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#153f27] px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-20">
          <div className="mx-auto grid max-w-[90rem] gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b9d8bf]">
                Stuck? Use AI as a thinking assistant
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
                Ask a better next question.
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/72">
                AI can help you search, explain, challenge assumptions and
                troubleshoot. It does not replace checking the original project,
                datasheet, experiment or safety requirement.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {aiTools.map((tool) => (
                  <a
                    key={tool.name}
                    href={tool.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-4 py-2.5 text-sm font-bold"
                  >
                    {tool.name} <ExternalArrow />
                  </a>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Find", "What kinds of open-source projects should I search for around this topic? Give me useful search terms."],
                ["Check", "What assumptions am I making about cost, safety, access, difficulty and testing?"],
                ["Understand", "Explain this component, code or mechanism, then tell me what I should verify myself."],
                ["Troubleshoot", "Here is what we expected and what happened. Give several possible causes and the smallest tests that could distinguish them."],
              ].map(([title, copy]) => (
                <article
                  key={title}
                  className="rounded-[1.45rem] border border-white/12 bg-white/6 p-5"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#d7f43c]">
                    {title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/78">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-[90rem] rounded-[2rem] border border-[#cadbcd] bg-[#f7faf6] p-7 sm:p-9 lg:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#57745e]">
              Bring one candidate forward
            </p>
            <div className="mt-5 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#143421]">
                  Before the next project discussion, choose one project your team would seriously consider building.
                </h2>
              </div>
              <div className="grid gap-3 text-sm leading-7 text-[#526858] sm:grid-cols-2">
                {[
                  "Project link and what it does",
                  "Why your team is interested",
                  "What engineering work already exists",
                  "What you would need to build",
                  "Main components / preliminary BOM",
                  "What you might complete, change or improve",
                  "Biggest uncertainty or risk",
                  "The smallest first version you could try",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4f925f]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/engg2202"
                className="inline-flex items-center gap-2 rounded-full bg-[#173f28] px-5 py-3 text-sm font-bold text-white"
              >
                See how projects develop <ArrowIcon />
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 rounded-full border border-[#b9cfbf] bg-white px-5 py-3 text-sm font-bold text-[#214b31]"
              >
                Explore course projects <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
