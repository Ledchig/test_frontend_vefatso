import { IArticle } from "@/interfaces/index";
import toFormatDate from "@/utils/toFormatDate";
import Link from "next/link";

const get100LastNews = async () => {
  try {
      const response = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty');
      const ids = await response.json();
      const last100Ids = ids.slice(0, 100);
      const articlesPromises = last100Ids.map(async (id: number) => {
          const articleResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
          return articleResponse.json();
      });

      const articles = await Promise.all(articlesPromises);
      return articles;

  } catch (err: any) {
      throw new Error('Error fetching news', err);
  }
};

const Home = async () => {
  const articles = await get100LastNews();

  return (
    <main className="flex min-h-screen items-center flex-col justify-between p-24">
      <div>
        <h1>
          Hacker news!
        </h1>
      </div>
      <div>
        {articles.map((article: IArticle) => (
          <Link key={article.id} href={`/articles/${article.id}`}>
            <div className="my-8">
              <h2 className="self-center mb-4">{article.title}</h2>
              <div className="flex me-auto gap-8">
                <p>{article.id}</p>
                <p>Score: {article.score}</p>
                <p>by {article.by}</p>
                <p>{toFormatDate(article.time)}</p>
              </div>

            </div>
          </Link>
        ))}
      </div>
      <div>
        <button>More news</button>
      </div>
    </main>
  );
};

export default Home;