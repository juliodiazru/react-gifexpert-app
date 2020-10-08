export const obtenerGifs = async (categoria) => {
    const apiKey = 'iGYRvoGaVbOyxTyXFGAJ1IxVDIdYW0VZ';
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=${apiKey}`;
    const response = await fetch(url);
    const { data } = await response.json();
    const imagen = data.map((i) => {
        return {
            id: i.id,
            title: i.title,
            url: i.images.downsized_medium.url
        }
    });
    return imagen;
}