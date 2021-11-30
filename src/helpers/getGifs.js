export const getGifs = async (category) => {
    const URL = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=ZU0ogO0xJrPUCCqZ7q8Pdt9Y6qRo3251`;
    const resp = await fetch(URL);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    return gifs;
}