"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { imagePath } from "../lib/image-path";

const roles = [
  {
    code: "ECPF",
    name: "Problem Framer",
    keywords: "Analytical · calm · evidence-led",
    description: "You look closely at what is happening before deciding what should be solved.",
    image: "problem-framer.png",
    accent: "#416dab",
    ink: "#ffffff",
  },
  {
    code: "ECPN",
    name: "Project Navigator",
    keywords: "Structure · route · priorities",
    description: "You turn a promising direction into a route that people can realistically follow.",
    image: "project-navigator.png",
    accent: "#252a2d",
    ink: "#ffffff",
  },
  {
    code: "ECTC",
    name: "Team Connector",
    keywords: "Warmth · connection · communication",
    description: "You help different people, ideas, and technical contributions work together.",
    image: "team-connector.png",
    accent: "#d1aa3d",
    ink: "#ffffff",
  },
  {
    code: "ECPB",
    name: "Practical Builder",
    keywords: "Hands-on · tools · making",
    description: "You learn quickly when an idea becomes something you can assemble, test, and improve.",
    image: "practical-builder.png",
    accent: "#c9712b",
    ink: "#ffffff",
  },
  {
    code: "ECPE",
    name: "Prototype Explorer",
    keywords: "Experiment · iterate · improve",
    description: "You use prototypes and tests to learn what should change next.",
    image: "prototype-explorer.png",
    accent: "#4f8b64",
    ink: "#ffffff",
  },
  {
    code: "ECST",
    name: "Solution Storyteller",
    keywords: "Expression · narrative · clarity",
    description: "You make an engineering solution understandable, credible, and relevant to its audience.",
    image: "solution-storyteller.png",
    accent: "#7052a0",
    ink: "#ffffff",
  },
] as const;

export default function EngineeringRoleGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [autoActive, setAutoActive] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    let interval: number | undefined;
    let showing = false;

    const stop = () => {
      if (interval) window.clearInterval(interval);
      interval = undefined;
      showing = false;
      setAutoActive(false);
    };
    const start = () => {
      if (interval || hoveredIndex !== null) return;
      const tick = () => {
        showing = !showing;
        setAutoActive(showing);
      };
      tick();
      interval = window.setInterval(tick, 5800);
    };
    const observer = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0.28 },
    );
    observer.observe(grid);
    return () => {
      stop();
      observer.disconnect();
    };
  }, [hoveredIndex]);

  return (
    <div ref={gridRef} className="compass-role-grid mt-6 grid gap-3 sm:grid-cols-2">
      {roles.map((role, index) => {
        const revealed = hoveredIndex === index || (hoveredIndex === null && autoActive);
        return (
          <button
            key={role.code}
            type="button"
            className={`compass-role-card ${revealed ? "is-revealed" : ""}`}
            style={{ "--role-accent": role.accent, "--role-ink": role.ink } as React.CSSProperties}
            aria-label={`${role.name}: ${role.description}`}
            onPointerEnter={(event) => event.pointerType !== "touch" && setHoveredIndex(index)}
            onPointerLeave={() => setHoveredIndex(null)}
            onFocus={() => setHoveredIndex(index)}
            onBlur={() => setHoveredIndex(null)}
          >
            <span className="compass-role-default" aria-hidden="true">
              <span className="text-[0.65rem] font-bold tracking-[0.16em] text-[#d7f43c]">0{index + 1}</span>
              <strong>{role.name}</strong>
            </span>
            <span className="compass-role-reveal" aria-hidden="true">
              <span className="compass-role-copy">
                <span>{role.code} · ENGINEERING ROLE</span>
                <strong>{role.name}</strong>
                <b>{role.keywords}</b>
                <small>{role.description}</small>
              </span>
              <Image
                src={imagePath(`/images/engineering-compass/roles/${role.image}`)}
                alt=""
                width={1280}
                height={1280}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 90vw"
                className="compass-role-character"
              />
            </span>
          </button>
        );
      })}
    </div>
  );
}
