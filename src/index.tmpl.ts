import type { PageData } from "lume/core.ts";

export default function ({ search }: PageData) {
  const posts = search.pages("type=year published=true");
  console.log(posts);
  return `
    <ul>
      ${posts
        .sort((a, b) => +b.data.title - +a.data.title)
        .map(
          (post) => `<h2><a href="${post.data.url}">${post.data.title}</a></h2>`
        )
        .join("")}
    </ul>
  `;
}
