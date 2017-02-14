const getFromAPI = function(endpoint, query) {
    const url = new URL(`https://api.spotify.com/v1/${endpoint}`);
    Object.keys(query).forEach(key => url.searchParams.append(key, query[key]));
    return fetch(url).then(response => {
        if (!response.ok) {
            return Promise.reject(response.statusText);
        }
        return response.json();
    });
};


let artist;
const getArtist = name => {
    const query = {
        q: "Celine Dion",
        limit: 1,
        type: "artist"
    }

    return getFromAPI("search", query).then(result =>{
      artist = result.artists.items[0];
      return artist;  
    }).catch(error => {console.log("WHAT THE HELL IS THIS", error)});
};