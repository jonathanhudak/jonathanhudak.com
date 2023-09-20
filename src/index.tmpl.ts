import type { PageData } from "lume/core.ts";

export default function ({ search }: PageData) {
  return ``;
  //   const posts = search.pages("type=year published=true");
  //   console.log(posts);
  //   return `
  //     <ul>
  //       ${posts
  //         .sort((a, b) => +b.data.title - +a.data.title)
  //         .map(
  //           (post) => `<h2>
  //             ${
  //               post.data.link
  //                 ? `<a href="${post.data.url}">${post.data.title}</a>`
  //                 : post.data.title
  //             }
  //           </h2>
  //           ${post.data.summary && `<p>${post.data.summary}</p>`}
  //           `
  //         )
  //         .join("")}
  //     </ul>
  //   `;
}
