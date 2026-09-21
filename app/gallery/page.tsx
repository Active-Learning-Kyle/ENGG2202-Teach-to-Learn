import type { Metadata } from "next";
import Image from "next/image";
import SiteShell from "../components/site-shell";
import SdgMosaic from "../components/sdg-mosaic";
import { imagePath } from "../lib/image-path";

export const metadata: Metadata = {
  title: "Student Projects",
  description:
    "Explore ENGG2202 engineering projects through their open repositories, evidence and learning stories.",
  alternates: { canonical: "https://active-learning-kyle.github.io/ENGG2202-Teach-to-Learn/gallery/" },
};

const projects = [
  {
    title: "Solar Weather Station",
    description:
      "A solar-powered station that reveals how heat, light, particles and wind vary across campus—turning local measurements into evidence for greener decisions.",
    image: "/images/teach-to-learn/solar-weather-station-cover.png",
    href: "https://github.com/Active-Learning-Kyle/solar-weather-station",
    sdgs: [
      { number: "07", title: "Affordable and Clean Energy", image: "/images/teach-to-learn/sdg/goal-07.png" },
      { number: "09", title: "Industry, Innovation and Infrastructure", image: "/images/teach-to-learn/sdg/goal-09.png" },
      { number: "13", title: "Climate Action", image: "/images/teach-to-learn/sdg/goal-13.png" },
    ],
  },
];

const projectPlatforms = [
  {
    name: "GitHub",
    category: "Open-source repositories",
    description: "Search real project repositories with code, documentation, CAD files and development history.",
    href: "https://github.com/topics/open-source-hardware",
    logo: "/images/project-platforms/github.svg",
    background: "linear-gradient(135deg, #111827 0%, #334155 100%)",
  },
  {
    name: "Hackster.io",
    category: "Hardware & IoT projects",
    description: "Explore practical electronics, embedded systems and IoT builds with parts, code and instructions.",
    href: "https://www.hackster.io/projects",
    logo: "/images/project-platforms/hackster.svg",
    background: "linear-gradient(135deg, #075985 0%, #0ea5e9 100%)",
  },
  {
    name: "Arduino Project Hub",
    category: "Arduino project library",
    description: "Find accessible builds with components, circuit diagrams, code and step-by-step guidance.",
    href: "https://projecthub.arduino.cc/",
    logo: "/images/project-platforms/arduino.svg",
    background: "linear-gradient(135deg, #006b73 0%, #00979d 100%)",
  },
  {
    name: "Hackaday.io",
    category: "Project logs & prototypes",
    description: "Browse ambitious maker projects, engineering experiments and detailed development logs.",
    href: "https://hackaday.io/projects",
    logo: "/images/project-platforms/hackaday.svg",
    background: "linear-gradient(135deg, #1f2937 0%, #dc2626 100%)",
  },
  {
    name: "OSHWA",
    category: "Certified open-source hardware",
    description: "Search hardware projects whose source files and open-source documentation have been certified.",
    href: "https://certification.oshwa.org/list.html",
    logo: "/images/project-platforms/oshwa.svg",
    background: "linear-gradient(135deg, #9a3412 0%, #f97316 100%)",
  },
  {
    name: "Adafruit Learning System",
    category: "Electronics project guides",
    description: "Use clear tutorials for sensors, microcontrollers, Raspberry Pi and electronics prototyping.",
    href: "https://learn.adafruit.com/",
    logo: "/images/project-platforms/adafruit.svg",
    background: "linear-gradient(135deg, #312e81 0%, #7c3aed 100%)",
  },
  {
    name: "SparkFun Learn",
    category: "Tutorials & hookup guides",
    description: "Learn how to use sensors, electronics and communication modules through practical examples.",
    href: "https://learn.sparkfun.com/tutorials/",
    logo: "/images/project-platforms/sparkfun.svg",
    background: "linear-gradient(135deg, #9f1239 0%, #e11d48 100%)",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

export default function StudentProjectsPage() {
  return (
    <SiteShell>
      <main>
        <section className="overflow-hidden border-b border-[#d9e6db] bg-white">
          <div className="mx-auto grid max-w-[90rem] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-10 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#4f765a]">Open engineering in practice</p>
              <h1 className="mt-5 text-6xl font-semibold leading-[0.92] tracking-[-0.055em] text-[#112e1d] sm:text-7xl lg:text-8xl">
                Student
                <span className="block text-[#318248]">Projects.</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-9 text-[#48614f]">
                Open a project to see its files, build instructions, tests and development history on GitHub.
              </p>
            </div>
            <SdgMosaic />
          </div>
        </section>

        <section className="mx-auto max-w-[90rem] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="flex flex-col gap-4 border-b border-[#d5e2d7] pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#57735e]">Project directory</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#153321]">Explore the decisions and evidence behind each project.</h2>
            </div>
            <p className="text-sm text-[#607566]">{projects.length} published project</p>
          </div>

          <div className="mt-10 grid gap-7 md:grid-cols-2">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-full flex-col overflow-hidden rounded-[1.8rem] border border-[#cfddcf] bg-white shadow-[0_24px_70px_-52px_rgba(15,60,32,0.42)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_-48px_rgba(15,60,32,0.48)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#dce9dc]">
                  <Image src={imagePath(project.image)} alt="Solar Weather Station prototype with its solar panel, cup anemometer and wind vane on a green rooftop" fill preload sizes="(min-width: 1280px) 30vw, (min-width: 768px) 48vw, 100vw" className="object-cover object-center transition duration-700 group-hover:scale-[1.035]" />
                  <div className="absolute left-5 top-5 flex gap-2" aria-label="Related Sustainable Development Goals">
                    {project.sdgs.map((sdg) => (
                      <div key={sdg.number} className="relative h-14 w-14 overflow-hidden rounded-xl border-2 border-white bg-white shadow-[0_10px_28px_-12px_rgba(0,0,0,0.65)] sm:h-16 sm:w-16" title={`SDG ${sdg.number}: ${sdg.title}`}>
                        <Image src={imagePath(sdg.image)} alt={`SDG ${sdg.number}: ${sdg.title}`} fill sizes="64px" className="object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-8 lg:p-9">
                  <h3 className="text-3xl font-semibold tracking-[-0.035em] text-[#153321] sm:text-[2rem]">{project.title}</h3>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-[#506456]">{project.description}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-9 text-base font-bold text-[#226439]">
                    View GitHub repository
                    <ArrowIcon />
                  </span>
                </div>
              </a>
            ))}

            <div className="flex min-h-[24rem] flex-col justify-center rounded-[1.8rem] border border-dashed border-[#acc2b0] bg-[#edf4ed] p-7 text-[#34543e] sm:min-h-[31rem]">
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#afc6b3] bg-white text-xl">+</span>
                <p className="mt-8 text-xs font-bold uppercase tracking-[0.15em] text-[#67806d]">Project directory</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#173823]">More projects will be added here.</h3>
                <p className="mt-4 text-sm leading-7 text-[#526a58]">
                  A project appears in the directory when its repository and release materials are ready for public use.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="project-resources" className="scroll-mt-24 border-t border-[#d5e2d7] bg-[#edf4ed] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[90rem]">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#57735e]">Find a project to explore</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#153321] sm:text-4xl">
                Open-source project platforms
              </h2>
              <p className="mt-4 text-base leading-8 text-[#526a58]">
                Browse these libraries to find an existing project you can build, understand or adapt.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {projectPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-[22rem] flex-col overflow-hidden rounded-[1.55rem] border border-[#cbd9cd] bg-white shadow-[0_20px_55px_-44px_rgba(15,60,32,0.5)] transition duration-300 hover:-translate-y-1 hover:border-[#8eb095] hover:shadow-[0_26px_65px_-40px_rgba(15,60,32,0.5)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#318248] lg:last:col-start-2"
                >
                  <div
                    className="relative flex h-40 items-center justify-center overflow-hidden p-9"
                    style={{ background: platform.background }}
                  >
                    <div className="absolute -right-8 -top-12 h-36 w-36 rounded-full border border-white/15" aria-hidden="true" />
                    <div className="absolute -bottom-16 -left-8 h-44 w-44 rounded-full border border-white/10" aria-hidden="true" />
                    <Image
                      src={imagePath(platform.logo)}
                      alt={`${platform.name} logo`}
                      width={170}
                      height={64}
                      sizes="170px"
                      className="relative h-14 w-auto max-w-[11rem] object-contain transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#66806d]">{platform.category}</p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#173823]">{platform.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#526a58]">{platform.description}</p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-bold text-[#226439]">
                      Explore projects
                      <ArrowIcon />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
