import { IDynamicArticleParams } from "@/interfaces";
import toFormatDate from "@/utils/toFormatDate";
import Link from "next/link";
import getItem from "@/utils/getItem";
import Comment from "@/components/comment";

const DynamicArticle = async ({ params: { id } }: IDynamicArticleParams) => {
  const article = await getItem(id);

  return (
    <main className="flex min-h-screen items-center flex-col justify-between p-6 sm:px-24 sm:py-12">
      <div key={article.id} className="flex flex-col gap-4">
        <Link
          href="/"
          className="hover:cursor-pointer text-4xl mb-4 sm:text-6xl self-center"
        >
          Hacker news!
        </Link>
        <h2 className="border-b-2 self-center border-emerald-800 text-xl sm:text-2xl">{article.title}</h2>
        <a href={article.url} className="active:text-emerald-500 hover:text-emerald-500 hover:coursor-pointer">{article.url}</a>
        <p>{article.text}</p>
        <div className="flex justify-between">
          <p>{toFormatDate(article.time)}</p>
          <p>by {article.by}</p>
        </div>
        <div className="flex flex-col gap-6 mt-4">
          <p>Comments: {article.descendants}</p>
          {!article.kids ? null : article.kids.map((id: string) => {
            return (<Comment key={id} id={id} />)
          })}</div>
      </div>

    </main>
  );
};

export default DynamicArticle;
