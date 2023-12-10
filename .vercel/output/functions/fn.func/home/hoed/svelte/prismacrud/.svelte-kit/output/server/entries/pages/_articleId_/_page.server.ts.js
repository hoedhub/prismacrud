import { p as prisma } from "../../../chunks/prisma.js";
import { f as fail, e as error } from "../../../chunks/index.js";
const load = async ({ params }) => {
  const getArticle = async () => {
    const article = await prisma.article.findUnique({
      where: {
        id: Number(params.articleId)
      }
    });
    if (!article) {
      throw error(404, "Article not found");
    }
    return article;
  };
  return {
    article: getArticle()
  };
};
const actions = {
  updateArticle: async ({ request, params }) => {
    const { title, content } = Object.fromEntries(await request.formData());
    try {
      await prisma.article.update({
        where: {
          id: Number(params.articleId)
        },
        data: {
          title,
          content
        }
      });
    } catch (err) {
      console.error(err);
      return fail(500, { message: "Could not update article" });
    }
    return {
      status: 200
    };
  }
};
export {
  actions,
  load
};
