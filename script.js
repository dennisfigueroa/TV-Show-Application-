
//This will not change as the API will always be constant
const apiCall = "https://api.themoviedb.org/3/discover/tv?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false"; 

const imageBaseURL = "https://image.tmdb.org/t/p/w500";

const creatingIMGTag = document.createElement('img'); 

async function getTVShows() {
    const response = await fetch(apiCall);
    const information = await response.json(); 
    console.log(information); 
    
  
  /*information.results.forEach((tvShow) => {
   const creatingIMGTag = document.createElement('img'); 
   creatingIMGTag.src = imageBaseURL + tvShow.poster_path; 
   document.body.appendChild(creatingIMGTag);
   });*/
		
    return information; 
    
}

function getRatingStarts() {
  
}


getTVShows(); 

