import Link from "next/link";

const destinations = [
  ["Start a Project", "/start", "Choose your starting point", "Independence framework · project resources · candidate + BOM"],
  ["Develop", "/engg2202", "Build, test and improve", "Progress reviews · evidence loop · Student Guide"],
  ["Green Technology", "/sdgs", "Connect to a real need", "Contexts · SDGs · evidence for environmental claims"],
  ["Projects", "/gallery", "Learn from existing work", "Open repositories · examples · reusable contributions"],
  ["Assessment", "/assessment", "Make your learning visible", "Progress · reports · demonstration · professional practice"],
  ["About", "/about", "Find course details", "Meetings · location · course context"],
];

export default function CourseMap() {
  return <section aria-labelledby="course-map-heading" className="border-b border-[#d7e4d9] bg-[#eef6ec] px-5 py-14 sm:px-8 lg:px-10">
    <div className="mx-auto max-w-[90rem]">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#52765c]">Find your next step</p>
      <h2 id="course-map-heading" className="mt-3 text-3xl font-semibold tracking-tight">One project. A place for every question.</h2>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{destinations.map(([title, href, action, detail]) => <Link key={href} href={href} className="rounded-2xl border border-[#cadbcd] bg-white p-6 transition hover:border-[#4f925f] hover:shadow-sm">
        <span className="text-sm font-bold text-[#52765c]">{title} ↗</span><h3 className="mt-3 text-xl font-semibold">{action}</h3><p className="mt-2 text-sm leading-6 text-[#526858]">{detail}</p>
      </Link>)}</div>
    </div>
  </section>;
}
