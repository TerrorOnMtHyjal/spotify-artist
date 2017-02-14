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



// let artist;
// const getArtist = name => {
//     const query = {
//         q: "Celine Dion",
//         limit: 1,
//         type: "artist"
//     }

//     return getFromAPI("search", query).then(result =>{
//       artist = result.artists.items[0];
//       //https://api.spotify.com/v1/artists/{id}/related-artists
//       return fetch(`https://api.spotify.com/v1/artists/${artist.id}/related-artists`).then(relatedResults => {
//           const parsed = relatedResults.json();
//           artist.related = parsed.artists;
//           console.log(parsed);
//           return artist;
//       });  
//     }).catch(error => {console.log("WHAT THE HELL IS THIS", error)});
// };