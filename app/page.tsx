import Image from "next/image";
import { iArticle } from "@/interfaces/iArticle";
import get100LastNews from "@/utils/get100LastNews";
import toFormatDate from "@/utils/toFormatDate";

export default async function Home() {
  const news = await get100LastNews();
  console.log(news);
  const date = new Date();

  return (
    <main className="flex min-h-screen items-center flex-col justify-between p-24">
      <div>
        <h1>
          Hacker news!
        </h1>
      </div>
      <div>
        {news.map((article: iArticle) => (
          <div className="my-8" key={article.id}>
            <h2 className="self-center mb-4">{article.title}</h2>
            <div className="flex me-auto gap-8">
              <p>Score: {article.score}</p>
              <p>by {article.by}</p>
              <p>{toFormatDate(article.time)}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button>More news</button>
      </div>
    </main>
  );
}
