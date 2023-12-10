import { p as prisma } from "../../chunks/prisma.js";
import { f as fail } from "../../chunks/index.js";
const actions = {
  createArticle: async ({ request }) => {
    const { title, content } = Object.fromEntries(await request.formData());
    try {
      await prisma.article.create({
        data: {
          title,
          content
        }
      });
    } catch (err) {
      console.error(err);
      return fail(500, { message: "Could not create article" });
    }
    return { status: 200 };
  },
  deleteArticle: async ({ url }) => {
    const id = url.searchParams.get("id");
    if (!id) {
      return fail(400, { message: "Invalid request" });
    }
    try {
      await prisma.article.delete({
        where: {
          id: Number(id)
        }
      });
    } catch (err) {
      console.error(err);
      return fail(500, { message: "Something went wrong deleting article" });
    }
    return {
      status: 200
    };
  }
};
const load = async () => {
  return {
    articles: await prisma.article.findMany()
  };
};
export {
  actions,
  load
};
