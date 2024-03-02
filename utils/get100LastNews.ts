const get100LastNews = async () => {
    try {
        const response = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty');
        const ids = await response.json();
        const last100Ids = ids.slice(0, 100);
        const newsPromises = last100Ids.map(async (id: number) => {
            const newsResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
            return newsResponse.json();
        });

        const news = await Promise.all(newsPromises);
        return news;

    } catch (err: any) {
        throw new Error('Error fetching news', err);
    }
};

export default get100LastNews;