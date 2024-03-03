import ArticlesList from "@/components/articlesList";

export const revalidate = 50;

const get100LastNews = async () => {
  const response = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty');
  if (!response.ok) {
    throw new Error('Error fetching articles')
  }
  const ids = await response.json();
  const last100Ids = ids.slice(0, 100);
  const articlesPromises = last100Ids.map(async (id: number) => {
    const articleResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
    return articleResponse.json();
  });

  const articles = await Promise.all(articlesPromises);
  return articles;
};

const Home = async () => {
  const articles = await get100LastNews();
  console.log(articles[0]);

  return (
    <main className="flex min-h-screen items-center flex-col justify-between p-24">
      <div>
        <h1 className="text-6xl">
          Hacker news!
        </h1>
      </div>
      <div>
        <ArticlesList articles={articles} />
      </div>
      <div>
        <button>More news</button>
      </div>
    </main>
  );
};

export default Home;