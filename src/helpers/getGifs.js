export const getGifs = async( category ) => {
    const apiKey = 'plBzcPxA0YD6D5UTV90QJnBKzaZmVla9';
    const url = `http://api.giphy.com/v1/gifs/search?api_key=${ apiKey }&q=${ encodeURI(category) }&lang=es&limit=10`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}