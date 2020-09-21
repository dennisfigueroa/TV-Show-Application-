
//This will not change as the API will always be constant
const apiCall = "https://api.themoviedb.org/3/discover/tv?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false"; 

//Grab the relevant TV Shows and return .json(ified) object that we will parse through to populate tv shows/posters 
async function getTVShows(apiCall) {
    const response = await fetch(apiCall);
    const information = await response.json(); 
    console.log(information); 

    return information; 
    
}



getTVShows(); 

