
//This will not change as the API will always be constant
const apiCall = "https://api.themoviedb.org/3/discover/tv?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false"; 
const imageBaseURL = "https://image.tmdb.org/t/p/w500";
const searchAPI = 'https://api.themoviedb.org/3/search/tv?&api_key=04c35731a5ee918f014970082a0088b1&query=';
const creatingIMGTag = document.createElement('img'); 
const form = document.getElementById("form"); 
const search = document.getElementById("search"); 


form.addEventListener('submit', (e) => {
  e.preventDefault(); 
  const searchWord = search.value; 
  if (searchWord) {
      getTVShows(searchAPI+ searchWord); 
      search.value =''; 
  }
})


async function getTVShows(url) {
    const response = await fetch(url);
    const information = await response.json(); 
    
    getPosters(information.results);
    RatingStars(information); 
}


function getPosters(tvShows) {
  
  //clear main
  main.innerHTML=''; 
  
  let html = ''; 
      let counter = 0; 
      tvShows.forEach((tvShow) =>  {
        counter = counter + 1; 
        if (tvShow.poster_path != null) {
          html += '<div class = "movie"><img src = "https://image.tmdb.org/t/p/w500/'+tvShow.poster_path+'"><div id = "starsForMovies'+counter+'" class ="rating"></div></div>';
        }
        
      });

      document.getElementById("main").innerHTML = html; 
    }


/*function RatingStars(information) {

        let counter = 0; 

        information.results.forEach((tvShow) => {

          counter = counter + 1; 
          



          if (tvShow.vote_average > 9.4) {
            const creatingIMGTag = document.createElement('img'); 
            creatingIMGTag.src = "stars/5.png"; 
            document.querySelector("#starsForMovies" + counter).append(creatingIMGTag);
          }
          if (tvShow.vote_average > 8.4 && tvShow.vote_average < 9.5) {
            const creatingIMGTag = document.createElement('img'); 
            creatingIMGTag.src = "stars/45.png"; 
            document.querySelector("#starsForMovies" + counter).append(creatingIMGTag);
          }
          if (tvShow.vote_average > 7.4 && tvShow.vote_average < 8.5) {
            const creatingIMGTag = document.createElement('img'); 
            creatingIMGTag.src = "stars/4.png"; 
            document.querySelector("#starsForMovies" + counter).append(creatingIMGTag);
          }
          if (tvShow.vote_average > 6.4 && tvShow.vote_average < 7.5) {
            const creatingIMGTag = document.createElement('img'); 
            creatingIMGTag.src = "stars/35.png"; 
            document.querySelector("#starsForMovies" + counter).append(creatingIMGTag);
          }
        



         // const creatingParagraphTag = document.createElement("P"); 
        //  creatingParagraphTag.innerText = (""+tvShow.vote_average+""); 
        //  document.body.appendChild(creatingParagraphTag);
    
        });
      }
      */
      //console.log(tvShow.vote_average)

  /*information.results.forEach((tvShow) => {
   const creatingIMGTag = document.createElement('img'); 
   creatingIMGTag.src = imageBaseURL + tvShow.poster_path; 
   document.body.appendChild(creatingIMGTag);
   });*/
		
//function getRatingStars(information) {
  
  /*information.results.forEach((tvShow) => {
   const creatingParagraphTag = document.createElement("H1"); 
   const t = document.createTextNode(tvShow.voter_average); 
   creatingParagraphTag.appendchild(t); 
   document.body.appendChild(creatingParagraphTag); */
   
   
  // creatingParagraphTag.textContent = tvShow.voter_average; 
  // document.body.appendChild(creatingParagraphTag);
 //  });
  





getTVShows(apiCall); 


