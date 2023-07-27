
export const getGifs = async(category) => {
    const url =  `https://api.giphy.com/v1/gifs/search?api_key=N5eypH6gHRrjR4dG5CnqFDdcE7Qc7789&q=${ category }&limit=10`;
    const resp = await fetch( url );//respuesta asincrona de la peticion a la API
    const { data } = await resp.json();// se desestructura la repsuesta y se extrae la data en un Json
    
    const gifs = data.map( img => ({//extraemos los datos que nesecitamos para nuestra app y se alamcenan en el siguiente objeto
      id: img.id,//id
      title: img.title,//titulo
      url: img.images.downsized_medium.url//url de la imagen
    }));
    
    return gifs;
  }