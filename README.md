# IDEAS Research Lab

Website for the Interdisciplinary Energy Analytics for Society Research Lab at the University of Washington.

Live site: https://jlukuyu.github.io/ideas-lab/

## Update through ChatGPT / Codex

Connect **jlukuyu/ideas-lab** in [Codex cloud](https://chatgpt.com/codex), create an environment for this repository, and describe the update you want. Review the changes and merge the pull request into main. GitHub Actions will rebuild and publish the website automatically.

Examples: “Add this paper to our publications”; “Add a team member with this photo and biography”; “Create a news post from these notes”; “Update our recruitment notice.”

[Official setup instructions](https://learn.chatgpt.com/docs/cloud)

## Content files

- `people.json`: team names, biographies, profile links, photographs.
- `students.json`: PhD student timelines, projects, outputs, links, and timeline images (keyed by the `slug` in `people.json`).
- `papers.json`: featured publication titles, authors, abstracts, links.
- `posts.json`: news titles, article text, images, and links.
- `home.json`: homepage source content.
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
