const getItem = async (id: string) => {
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
    const item = await response.json();
    return item;
};

export default getItem;