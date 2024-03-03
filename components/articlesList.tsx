'use client'
import { IArticle } from "@/interfaces";
import Link from "next/link";
import toFormatDate from "@/utils/toFormatDate";

const ArticlesList = ({ articles }: { articles: IArticle[] }) => {
  setTimeout(() => {
    window.location.reload();
  }, 60000);

  return (
    <ul>
      {articles.map((article: IArticle) => (
        <li
          className="group my-8 px-6 py-4 m-2 border-2 border-emerald-800 hover:cursor-pointer hover:border-emerald-600 active:border-emerald-600 duration-300"
          key={article.id}
        >
          <Link href={`/articles/${article.id}`}>
            <div>
              <h2
                className="mb-4 text-xl sm:text-2xl border-b-2 border-emerald-800 group-hover:border-emerald-600 group-active:border-emerald-600 duration-100"
              >
                {article.title}
              </h2>
              <div
                className="flex gap-4 sm:gap-16 text-xs sm:text-sm justify-end"
              >
                <p>Score: {article.score}</p>
                <p>by {article.by}</p>
                <p>{toFormatDate(article.time)}</p>
              </div>

            </div>
          </Link>
        </li>

      ))}

    </ul>

  )
}

export default ArticlesList;