import { c as create_ssr_component, h as add_attribute, e as escape } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let article;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ article } = data);
  return `<form action="?/updateArticle" method="POST" class="card m-2 p-4"><h3 class="card-header" data-svelte-h="svelte-1jdgmno">Update Article</h3> <label for="title" data-svelte-h="svelte-zzbvbu">Title</label> <input type="text" id="title" name="title" class="input"${add_attribute("value", article.title, 0)}> <label for="content" data-svelte-h="svelte-xqeh5o">Content</label> <textarea id="content" name="content" class="textarea">${escape(article.content, false)}</textarea> <button type="submit" class="btn btn-success" data-svelte-h="svelte-by84u0">Save Update</button></form>`;
});
export {
  Page as default
};
