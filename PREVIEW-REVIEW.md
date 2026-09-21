# ENGG2202 v2 preview

Branch: `preview/engg2202-v2`. Based on `ad12c22f217ba86f72321a2df0e9f109bf0cfe87`. Main and the pre-existing local checkout were not edited.

## Site tree and scope

The incoming branch already had the seven navigation labels and a substantial Start page. Home still directed students to the old project journey; Assessment redirected to About; student-facing pages used Gate terminology. Start's independence cards ran from lowest to highest down the page, with the last card's width plus offset exceeding its container.

```text
Home /
├── Start a Project /start
│   ├── Project Independence Framework
│   ├── Project discovery and learning resources
│   ├── Buildable / Understandable / Modifiable / Testable
│   ├── Optional AI assistance
│   └── Class task: one candidate + preliminary BOM
├── Develop /engg2202
│   ├── Evidence loop and six progress reviews
│   ├── Contribution formats
│   └── Student Guide /guide → existing Notion guide
├── Green Technology /sdgs
├── Projects /gallery
├── Assessment /assessment
│   ├── Existing weights and assessment components
│   └── Written reports #reports
└── About /about
    └── Course context, meetings and location
```

Existing route names and development-stage anchors remain intact. About's old assessment/report anchors link to the new destination. Green Technology and Projects retain their content and visual design.

## What changed

- Home's primary action leads to Start. A clickable course map makes the information architecture visible.
- Start presents Independent Development at the top and Guided Reproduction at the foundation. Each card's width plus offset fits its container. The text explicitly explains increasing ownership and decreasing scaffolding, without tying independence to grades.
- The four-question candidate filter is keyboard-accessible and announces its count. It is a reflection aid, not an eligibility score; state is deliberately temporary and this is stated on the page.
- Search-topic chips open repository searches. Learning resources are separated from project discovery. The page distinguishes free browsing from open licensing and hardware costs.
- The class task is directly linked from the hero, with a 2/5/3-minute activity and explicit preliminary BOM fields. AI is optional, with source checking and disclosure of use.
- Assessment renders the existing shared assessment component directly, rather than redirecting to About. Existing percentages and report requirements are retained.
- Home, Develop, Guide, About and assessment copy use Checkpoints as progress reviews. The on-site planning pack is called Project Development Plan. This does not alter activity-specific safety requirements.
- Added skip navigation, mobile current-page semantics, consistent focus outlines, and Start/Assessment sitemap and export-audit coverage.

## Resource verification — 21 September 2026

Verified official project-discovery pages:

- [GitHub open-source hardware topic](https://github.com/topics/open-source-hardware)
- [Hackster projects](https://www.hackster.io/projects)
- [Arduino Project Hub](https://projecthub.arduino.cc/)
- [Hackaday.io projects](https://hackaday.io/projects)
- [OSHWA certified project list](https://certification.oshwa.org/list.html)
- [Adafruit Learning System](https://learn.adafruit.com/)
- [SparkFun tutorials](https://learn.sparkfun.com/tutorials/): direct automated fetch returned 403; verified through indexed official tutorial pages and [SparkFun's documentation entry point](https://www.sparkfun.com/documentation).

These are discovery resources, not blanket assurances that every project has a reusable licence, complete files, affordable components or validated performance. Inspect each candidate.

## Validation

- `npm run lint`: passed.
- `npm run build`: passed, including TypeScript and static export.
- Export audit: 11 HTML pages and 66 referenced assets checked; no broken internal page/asset paths.
- Browser inspection: all seven main destinations plus Student Guide loaded at phone width (390 px), with no document-width overflow or observed broken images. Desktop route checks also passed; Start inspected at tablet width (768 px) and desktop width (1440 px).
- Mobile navigation exposes all seven destinations. Keyboard activation opens it and follows Assessment without redirecting to About. Checklist keyboard activation updates the live count. The browser automation's pointer clicks did not reliably reach controls under emulation; keyboard interaction was verified instead.

## Next iteration

1. Review the retained schedule, weights and report language against the current Moodle course. This preview does not independently confirm course policy.
2. Update the external Notion guide and legacy `notion-prep` materials to match Checkpoint terminology; those were not changed here.
3. Expand Projects with a small set of individually evaluated candidates and actual BOMs. Current gallery content is intentionally retained.
4. Consider a downloadable candidate/BOM worksheet and shorter collapsible framework descriptions after classroom feedback. The checklist currently does not persist or submit responses.
5. The existing Home still uses a landscape path illustration. Its copy now describes revisitable progress reviews; replacing the illustration can wait for a later visual iteration.

## Local preview

Run `npm ci`, `npm run build`, then `npm run preview`. The preview server defaults to port 4173; this review used port 4182. The existing GitHub Pages workflow only deploys pushes to main; it was not triggered or changed.
