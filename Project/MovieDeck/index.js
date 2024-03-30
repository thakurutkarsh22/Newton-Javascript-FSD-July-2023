// JS ->

let currentPage = 1;
let MOVIE_LIST = [];

// ------------  Selectos -----------

const movieListContainer = document.getElementById("movie-list");

// Search bar Elements
const searchInputBoxElement = document.getElementById("search-input");
const searchButtonElement = document.getElementById("search-button");

// sorting option button selector
const sortByDateButtonElement = document.getElementById("sort-by-date");
const sortByRateButtonElement = document.getElementById("sort-by-rating");

// tab button Selector
const allTabButtonElement = document.getElementById("all-tab");
const favouritesTabButtonElement = document.getElementById("favourites-tab");

// pagination button selector
const prevButtonElement = document.getElementById("prev-button");
const nextButtonElement = document.getElementById("next-button");
const pageNumberButtonElement = document.getElementById("page-number-button");

//  ----- - - - - - - - - - -

// 1. FETCH THE DATA (IDEALLY USED GRAPH QL || FOR US we are getting all the data and then we are remapping it.)

function remapData(movieList = []) {
  const modifiedList = movieList.map((movieObj) => {
    return {
      id: movieObj.id,
      popularity: movieObj.popularity,
      voteAverage: movieObj.vote_average,
      title: movieObj.title,
      posterPath: movieObj.poster_path,
    };
  });

  return modifiedList;
}

async function fetchData(pageNumber, sortingOption) {
  let url = "";
  if (sortingOption) {
    url = `https://api.themoviedb.org/3/discover/movie?api_key=c13145a90d2d1748b8e9ec01e895106e&language=en-US&page=${pageNumber}&sort_by=popularity.desc`;
  } else {
    url = `https://api.themoviedb.org/3/movie/top_rated?api_key=c13145a90d2d1748b8e9ec01e895106e&language=en-US&page=${pageNumber}`;
  }

  const response = await fetch(url);
  const data = await response.json();

  console.log(data);
  const results = data["results"];
  const modifiedList = remapData(results); // slow

  MOVIE_LIST = modifiedList;
  return modifiedList;
}

// Render the Data

function renderMovies(movieList = []) {
  console.log(movieList);

  movieList.forEach((movie) => {
    const { id } = movie; //238
    const movieCardHTMLElement = createCardForMovie(movie); //
    movieListContainer.append(movieCardHTMLElement);

    // Add Lister For the Fav button
    // HERE cardContainerElement is GURANTEED INSIDE THE DOM
    // const favElement = document.getElementById(`favorites${id}`);
    const heartElement = document.getElementById(`icon${id}`);

    heartElement.addEventListener("click", (event) => {
      const movieIdILike = event.target.id;
      const isFavMovie = heartElement.classList.contains("fa-heart");
      if (isFavMovie) {
        // Make it UnFav

        removeMovieFromLocalStorage(movieIdILike);

        heartElement.classList.add("fa-heart-o");
        heartElement.classList.remove("fa-heart");
      } else {
        // MAKE IT FAV
        // set in local storage.

        setMoviesToLocalStorage(id);

        heartElement.classList.remove("fa-heart-o");
        heartElement.classList.add("fa-heart");
      }
    });

    // DETERMINE if Each Movie IS FAV OR NOT
    const favMovies = getMoviesToLocalStorage(); //[238, 248, 250]
    const isFavMovie = favMovies.includes(id); // true
    if (isFavMovie) {
      heartElement.classList.remove("fa-heart-o");
      heartElement.classList.add("fa-heart");
    }
  });
}

function createCardForMovie(movie) {
  const { id, title, popularity, posterPath, voteAverage } = movie;
  const imageLink = `https://image.tmdb.org/t/p/original/${posterPath}`;

  const cardContainerElement = document.createElement("div"); // RED CARD DIV
  cardContainerElement.id = id;
  cardContainerElement.classList.add("card");

  cardContainerElement.innerHTML = `
    <section>
      <img class="poster" src=${imageLink} alt="movie image"/>
    </section>
    <p class="title">
      ${title}
    </p>

    <section class="votes-favorites">

      <section class="votes">
        <p class="vote-count">Votes: ${voteAverage}</p>
        <p class="popularity-count">Polularity: ${popularity} </p>
      </section>


      <section style="cursor:pointer;" id="favorites${id}" class="favorites">
        <i id=icon${id} class="fa fa-heart-o" aria-hidden="true"></i>
      </section>

    </section>
  
  `;
  return cardContainerElement;
}

function clearMovies() {
  movieListContainer.innerHTML = "";
}

// 100% impure function
async function fecilitator(sortOptions = false) {
  const data = await fetchData(currentPage, sortOptions);
  clearMovies();
  renderMovies(data);

  allTabButtonElement.classList.add("active-tab");
}

fecilitator();

// PAGINATIONS

// -------------------- Click Listners -------------------

prevButtonElement.addEventListener("click", () => {
  currentPage--;
  fecilitator();

  pageNumberButtonElement.innerHTML = `CurrentPage: ${currentPage}`;

  // if (currentPage === 1) {
  //   prevButtonElement.disabled = true;
  // } else {
  //   prevButtonElement.disabled = false;
  // }
});

nextButtonElement.addEventListener("click", () => {
  currentPage++;
  fecilitator();
  pageNumberButtonElement.innerHTML = `CurrentPage: ${currentPage}`;

  // if (currentPage === 1) {
  //   nextButtonElement.disabled = false;
  // } else {
  //   nextButtonElement.disabled = true;
  // }
});

// SORTING OPTIONS
sortByRateButtonElement.addEventListener("click", () => {
  sortByRateButtonElement.classList.toggle("sort-button-active");

  if (sortByRateButtonElement.classList.contains("sort-button-active")) {
    fecilitator(true);
  } else {
    fecilitator(false);
  }
});

// TABS

function displayMoviesForSwitchTab(element) {
  // Which Page is BasicallyThere

  const id = element.id;
  if (id === "all-tab") {
    sortByRateButtonElement.style.display = "block";
    sortByDateButtonElement.style.display = "block";
    fecilitator();
  } else if (id === "favourites-tab") {
    clearMovies();

    const favMovieListIds = getMoviesToLocalStorage();

    const FavMovieList = MOVIE_LIST.filter((movie) => {
      const { id } = movie;
      return favMovieListIds.includes(id);
    });

    renderMovies(FavMovieList);
    // console.log(FavMovieList);

    sortByRateButtonElement.style.display = "none";
    sortByDateButtonElement.style.display = "none";
  } else {
    // We can add more tabs ..
  }
}

function switchTabs(event) {
  allTabButtonElement.classList.remove("active-tab");
  favouritesTabButtonElement.classList.remove("active-tab");

  const element = event.target;
  element.classList.add("active-tab");

  displayMoviesForSwitchTab(element);
}

allTabButtonElement.addEventListener("click", switchTabs);
favouritesTabButtonElement.addEventListener("click", switchTabs);

// TODO:
// FAVOURITES -> USE only Local Storage...

function setMoviesToLocalStorage(newFavMovie) {
  // 900
  const prevFavMovies = getMoviesToLocalStorage(); // [23, 240]
  const arrayOfFavMovies = [...prevFavMovies, newFavMovie]; // [23, 240,900 ]
  localStorage.setItem("favMovie", JSON.stringify(arrayOfFavMovies));
}

function getMoviesToLocalStorage() {
  const allFavMovieObj = JSON.parse(localStorage.getItem("favMovie"));
  if (!allFavMovieObj) {
    return [];
  } else {
    return allFavMovieObj;
  }
}

function removeMovieFromLocalStorage(id) {
  // ICON900
  const allFavMovieObj = getMoviesToLocalStorage(); // [23, 240, 900]
  const filterdMovies = allFavMovieObj.filter(
    (ids) => Number(ids) !== Number(String(id).substring(4))
  ); // [23, 240]
  localStorage.setItem("favMovie", JSON.stringify(filterdMovies));
}
