# IDEAS Research Lab

Website for the Interdisciplinary Energy Analytics for Society Research Lab at the University of Washington.

Live site: https://jlukuyu.github.io/ideas-lab/

## Update through ChatGPT / Codex

Connect **jlukuyu/ideas-lab** in [Codex cloud](https://chatgpt.com/codex), create an environment for this repository, and describe the update you want. Review the changes and merge the pull request into main. GitHub Actions will rebuild and publish the website automatically.

Examples: “Add this paper to our publications”; “Add a team member with this photo and biography”; “Create a news post from these notes”; “Update our recruitment notice.”

[Official setup instructions](https://learn.chatgpt.com/docs/cloud)

## Content files

- `people.json`: principal investigator and PhD student names, biographies, profile links, photographs.
- `undergraduates.json`: current and past undergraduate researchers, programs, participation dates, and project links.
- `team-render.mjs`: team page layout with the full-group photograph and separate researcher sections.
- `students.json`: PhD student timelines, projects, outputs, links, and timeline images (keyed by the `slug` in `people.json`).
- `papers.json`: featured publication titles, authors, abstracts, links.
- `posts.json`: news titles, article text, images, and links.
- `homepage.json`: current homepage mission, research themes, approach, and slideshow captions/links.
- `updates.json`: dated news timeline and separately listed undated member profiles.
- `home.json`: original homepage source material.
- `projects.json`: canonical project pages, summaries, collaborators, publications, stories, and source links.
- `research.json`: original project source material and geographic engagement map.
- `opportunities.json`: student recruitment notice and contact details.
- `styles.css`: colors, typography, and responsive layout.
- `build.mjs`: page layouts, navigation, shared research themes.

Images are stored beside the content files. Additional JSON files preserve original source material for reference.

## Build

Requires Node.js 22.13 or newer. No dependencies or API keys are needed.

```sh
node build.mjs
```

The generated pages are in `out/`. Preview that directory using a static web server. GitHub Pages is configured through `.github/workflows/pages.yml`; pushes to main publish automatically.

Content was migrated from junelukuyu.com on September 9, 2026. Recruitment and project status reflect that source. The original Wix site and private jlukuyu.github.io repository are unchanged.

Wix comments, member login, and blog search are not included. One PDF mentioned in the NYC Climate Week article could not be downloaded from the source and needs the original file. External publication and partner links remain external.

## Student pages

Each PhD student in `people.json` has a stable `slug` and a page at `our-team/<slug>/`. Update their entry in `students.json` to add quarterly milestones, projects, outputs, and photographs. The timeline scrolls with the page and includes year navigation.

Timeline entries use `quarter`, numeric `year`, `title`, `activities`, and `links`; optional `status` marks scheduled work, and optional `image` has `src`, `alt`, and `caption`. Keep entries in chronological order. Links use `label` with either `route` (an internal page without leading or trailing slash) or `href` (an external URL or same-page anchor). Keep image files in the repository root. Projects have `id`, `title`, `description`, and `links`; outputs have `id`, `type`, `title`, `note`, and `links`.

Ahana Mukherjee's initial timeline was transcribed from the supplied *PhD Timeline_AMukherjee.docx* in September 2026. Preserve its quarter assignments; Autumn 2026 activities are scheduled, and the Spring 2026 manuscript is submitted, not published. Photos and the research poster link come from existing lab news content. Do not infer completion or invent links for unpublished outputs. Other student timelines are intentionally empty until supplied.

Example update request: “Add Ahana's Winter 2027 milestones and this publication link to her research timeline.”

## Project pages

Every record in `projects.json` generates `research/<slug>/` and a card on the Research page. Keep stable slugs. Edit overview paragraphs, partners, funding, publications, resources (stories/coverage), sources, and optional people (student slugs), team, approach, or image fields. Resource entries accept `title`, `kind`, `note`, and either `href` or `route`; omit both for an output without a public link. Student project records link to the canonical page using `projectSlug` and route links. Preserve student card IDs to retain existing timeline anchors.

SEER is connected to Ahana's machine learning-enabled power systems planning work per the site owner's instruction and Rhiza Research's collaborator listing. Its overview and approach are based on Rhiza Research and Climate Change AI's 2025 grant profile, with funding news dated April 29, 2026. Targets and tools under development must not be presented as completed releases. No SEER-specific paper or released dataset/code was verified when this page was prepared. The 2023 grid-loss project and its 2024 story are separate from SEER.

Other project pages retain the lab's existing project statuses and source details. Link publications only when their project relationship is established; topic similarity alone is insufficient.

## Homepage, gallery, and news

`home-render.mjs` renders the refreshed homepage and news timeline. `gallery.js` adds previous/next controls, keyboard arrows, and automatic slideshow playback every five seconds with a smooth crossfade. Hovering or hiding the page temporarily suspends playback; focusing the slides or navigating manually pauses it until Play is selected. Reduced-motion preferences disable automatic playback and transitions. Without JavaScript, the gallery remains horizontally scrollable.

Homepage wording draws on the supplied IDEAS Energy Equity presentation, CEI Community Engagement poster, and UW ECE Academic Review research overview. Source presentations and review documents are not published. The logo and group photograph were supplied by the lab; `integrator-2024-first-page.jpg` renders only the first page/spread of the supplied 2024 magazine feature. Its caption retains printed credits and links to the public article. The annual get-together photograph was also supplied by the lab. Other gallery photos were already part of the lab website.

News items contain `date` (ISO year, month, or day at the precision supported by the source), `dateLabel`, `kind`, `title`, `summary`, `source`, an optional `image`, and `route` or `href`. Multi-month activities retain their displayed date range; their sort key uses the final month. Do not invent exact dates for year-only recognitions or undated profiles. New external items were checked against UW, CMU-Africa, WRI, Climate Change AI, NextBillion, and Energy for Growth Hub sources in September 2026.

Undergraduate roster details were supplied by the lab in September 2026. An empty `end` marks a current researcher; populated end dates place entries in the past researcher section. Preserve supplied class years as historical descriptions. Hassan Dirif is the full name supplied for the researcher initially referred to as Hasan. Erin’s project links to the public Cofán Tribal Energy Resilience poster. Do not invent project assignments for researchers without one.

## Professional profiles and affiliations

PI affiliations are in `people.json` (`affiliations`: name, role, url, label). Board President is the owner-supplied current Spark Northwest title; the external board listing uses Board Chair. KCRC links to its organization profile because a dedicated June profile was not located; e-GUIDE links to its investigator listing.

Undergraduate entries support `profileUrl`, `latestUpdate`, `updateChecked`, and internal project `route` as well as external `href`. Public profile updates were checked in September 2026; Lillian’s LinkedIn explicitly references IDEAS and CEI. Biniyam’s UW scholarship profile and CEI report corroborate his UW computer science affiliation; his LinkedIn lists Adobe experience without a visible title/date, so no specific current job is inferred. Erin and Madelyn profiles match UW engineering and IDEAS respectively. Hassan’s profile/current role and Damion’s exact profile/current role remain unverified; do not link namesakes. Preserve lab participation dates separately from later updates.

News additions: Dartmouth keynote and mentorship use the official 2026 program and July 26–29 summit dates (sort key July 29). SETI plenary uses Duke EAP’s public session page confirming August 6, 2026, instead of the supplied SharePoint program. CRIFS is dated to the Evans announcement’s original publication date, October 19, 2023, rather than its 2026 modified timestamp; no exact panel day is inferred.

Affiliation logos are stored locally as `affiliation-*` assets, sourced from each organization’s official website (Energy for Growth Hub uses its original inline SVG). White logos use a dark backing for legibility. The undergraduate Beyond IDEAS updates and Eliane’s WRI feature were removed at the owner’s request; professional profile links remain.

Eliane and Kwame timelines were populated from the owner-supplied eliane.docx and kwame.docx in September 2026. Preserve month ranges for Eliane and quarter labels for Kwame. Public additions include the 2025 UW showcase, Eliane’s March 2026 CEI Vadari feature, and Kwame’s April 9, 2026 Energy for Growth Hub memo. Submitted manuscripts and unverified proceedings status must not be presented as publication. Eliane’s supplied July–September 2026 WRI internship is included only in her timeline, without restoring the removed homepage/news feature. The Energy for Growth Hub affiliation now uses the owner-supplied hub-logo.png, optimized as affiliation-growth.png.

## Research explorer

`research-render.mjs` displays funded and unfunded project accordions. `research-themes.json` defines the four themes; interdisciplinary methods apply across them. Each project has `fundingCategory`, `themes`, `subthemes`, and optionally `fundingPeriod` and `studentResearchers`. Funded.docx supplies seven funded projects and their stated grant periods, plus four unfunded studies. Remaining student projects without a documented funded-project link are listed as unfunded; student fellowships do not imply project funding. Grant periods are not completion claims. The Nairobi cooking entry includes the supplied Nairobi/Kigali electric-boiling scope.

`research-filters.js` enhances the native details elements with theme/subtheme filters and opens permalink targets. Without JavaScript all project accordions remain usable. New internal project links target research/#project-<slug>; existing standalone routes remain for saved URLs. Lucide icons are bundled locally under their ISC license in LUCIDE-LICENSE.

Research sponsor and partner logos and URLs are maintained in `research-organizations.json`; project memberships use `sponsorOrgs` and `partnerDetails` in `projects.json`. Student links remain separate in `people`.

## Geographic footprint

`research-locations.json` maps verified project slugs to countries. The Google My Maps embed is owned by the lab account: https://www.google.com/maps/d/edit?mid=188zJN6-owhrNxQi7twgEV-ER5ue5FGg. Import `ideas-research-footprint.kml` into its country layer. Keep map data and the accessible country/project list synchronized. Country markers are illustrative, not exact field locations. Regional projects without verified country assignments are not given inferred pins.

## Publication catalogue and shared design

`bibliography.json` contains the 30 publications supplied in the September 2026 Funded.docx, grouped as journal, conference, abstract, report, and policy. Source hyperlinks are preserved; policy links were verified on publisher sites. Citation counts are omitted because they change. `publications-render.mjs` and `publications.js` provide category navigation and progressive search. Project relationships use publication `projects` and reciprocal `publicationIds` on projects; do not infer a project relationship from topic similarity.

`modern.css` is the shared visual system loaded after legacy structural styles on every page. It standardizes sans-serif typography, heading sizes, cards, spacing, and responsive layouts. Research headline is a single desktop line and wraps on small screens.

Eliane’s timeline was revised from PhD Timeline_ElianeNirere.docx in September 2026. Its quarter-by-quarter chronology supersedes the earlier month ranges, including the Autumn 2025 Sarala Vadari milestone; the existing UW feature link is retained. The incomplete Winter 2025 fragment “Developing research project on community-based” was omitted without completing it by inference. Autumn 2026 WRI support is marked planned. Nigeria capacity work links to CORE, while developer engagement remains linked to the RRF project.

Project cards display green Ongoing and red Past badges from their existing `status`. Records still marked Research do not imply a confirmed lifecycle status. `thesisStudents` lists student slugs for thesis badges and linked names, derived from the supplied student project timelines. Per the owner, Eliane’s CORE Nigeria and Kigali kettle work are excluded; her Fiji and RRF work are included.
