import { iArticle } from "@/interfaces/iArticle";
/*
    Должна содержать:
        ссылку на новость
        заголовок новости
        дату
        автора
        счётчик количества комментариев
        список комментариев в виде дерева
    Корневые комментарии подгружаются сразу же при входе на страницу, вложенные - по клику на корневой
    На странице должна быть кнопка для принудительного обновления списка комментариев
    На странице должна быть кнопка для возврата к списку новостей
*/
const Article = (article: iArticle) => {
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
    )
}

export default Article;