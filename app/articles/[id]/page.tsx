import { IDynamicArticleParams } from "@/interfaces";

const getArticle = async (id: any) => {
  const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
  const article = await response.json();
  return article;
};

const DynamicArticle = async ({ params: { id } }: IDynamicArticleParams) => {
  const article = await getArticle(id);

  return (
    <div key={article.id}>
        <a href={article.url}>{article.url}</a>
        <h2>{article.title}</h2>
        <p>{article.text}</p>
        <p>{article.time}</p>
        <p>{article.by}</p>
        <p>{article.descendants}</p>
        <p>{article.kids}</p>

    </div>
);
};

export default DynamicArticle;
