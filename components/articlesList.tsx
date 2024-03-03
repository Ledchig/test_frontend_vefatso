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
        <li className="my-8 px-6 py-4 hover:cursor-pointer hover:shadow-[-2px_2px_6px] hover:shadow-white" key={article.id}>
          <Link href={`/articles/${article.id}`}>
            <div>
              <h2 className="mb-4 text-2xl">{article.title}</h2>
              <div className="flex gap-16">
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