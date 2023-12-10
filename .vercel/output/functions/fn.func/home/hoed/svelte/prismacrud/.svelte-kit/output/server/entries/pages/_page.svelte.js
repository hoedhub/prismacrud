import { c as create_ssr_component, f as each, e as escape } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let articles;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ articles } = data);
  return `<div class="grid p-2"><div><h2 data-svelte-h="svelte-10jv9r9">Articles</h2> ${each(articles, (article) => {
    return `<article class="card m-2 p-4"><header class="card-header">${escape(article.title)}</header> <p>${escape(article.content)}</p> <form action="${"?/deleteArticle&id=" + escape(article.id, true)}" method="POST"><button type="submit" class="btn outline btn-error" data-svelte-h="svelte-1308wmg">Delete Article</button></form> <button class="btn btn-warning" data-svelte-h="svelte-1m4j90o">Update Article</button> </article>`;
  })}</div> <form action="?/createArticle" method="POST" class="card m-2 p-4" data-svelte-h="svelte-1vfbjmm"><h3 class="card-header">New Article</h3> <label for="title">Title</label> <input type="text" id="title" name="title" class="input"> <label for="content">Content</label> <textarea id="content" name="content" class="textarea"></textarea> <button type="submit" class="btn btn-success">Add Article</button></form></div>`;
});
export {
  Page as default
};
