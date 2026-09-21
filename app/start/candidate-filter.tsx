"use client";

import { useState } from "react";

const checks = [
  ["Buildable", "Can we build a small first version with our time, budget, parts and facilities?"],
  ["Understandable", "Can we explain how it works using the available code, diagrams and documentation?"],
  ["Modifiable", "What can we complete, change or investigate? Check the licence before reusing files."],
  ["Testable", "What measurement or repeatable test would show whether it works?"],
] as const;

export default function CandidateFilter() {
  const [selected, setSelected] = useState<string[]>([]);
  return (
    <div>
      <fieldset className="grid gap-3 sm:grid-cols-2">
        <legend className="mb-4 text-sm leading-7 text-[#526858]">Use this filter on one candidate. Tick each question you can answer with evidence; leave uncertainties open.</legend>
        {checks.map(([title, copy]) => (
          <label key={title} className={`flex cursor-pointer items-start gap-3 rounded-2xl border p-5 ${selected.includes(title) ? "border-[#4f925f] bg-[#e7f2df]" : "border-[#d4e1d6] bg-white"}`}>
            <input type="checkbox" className="mt-1 h-5 w-5 shrink-0 accent-[#173f28]" checked={selected.includes(title)} onChange={(event) => setSelected(event.target.checked ? [...selected, title] : selected.filter((item) => item !== title))} />
            <span><strong className="block text-lg text-[#173823]">{title}</strong><span className="mt-2 block text-sm leading-7 text-[#526858]">{copy}</span></span>
          </label>
        ))}
      </fieldset>
      <p role="status" className="mt-4 text-sm font-semibold text-[#31573d]">{selected.length} of 4 considered. {selected.length === 4 ? "Bring your evidence and remaining uncertainties to the discussion." : "An unanswered question is something to investigate, not a reason to stop."}</p>
      <p className="mt-2 text-xs text-[#526858]">Reflection only; these ticks are not submitted or saved when you leave this page.</p>
    </div>
  );
}
