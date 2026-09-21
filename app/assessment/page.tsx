import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "../components/site-shell";
import { AssessmentInformation } from "../about/course-information";

export const metadata: Metadata = {
  title: "Assessment",
  description: "How ENGG2202 recognises engineering understanding, evidence, contribution and professional practice.",
  alternates: { canonical: "https://active-learning-kyle.github.io/ENGG2202-Teach-to-Learn/assessment/" },
};

export default function AssessmentPage() {
  return <SiteShell><main id="main-content">
    <section className="mx-auto max-w-[90rem] px-5 py-12 sm:px-8 lg:px-10">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#52765c]">Assessment</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Make your engineering learning visible.</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-[#526858]">Your starting point does not determine your grade. Show what you understand, the engineering value you add, and the evidence behind your decisions.</p>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-[#526858]">Checkpoints are progress reviews, not sequential permission gates. Use Moodle for confirmed deadlines, rubrics and submission links. The existing assessment weights are retained in this preview.</p>
      <Link href="/engg2202" className="mt-5 inline-block font-bold text-[#226439]">See what to bring to progress reviews →</Link>
    </section>
    <AssessmentInformation />
  </main></SiteShell>;
}
