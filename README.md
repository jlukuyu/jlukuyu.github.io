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
- `research.json`: research projects and partner links.
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
