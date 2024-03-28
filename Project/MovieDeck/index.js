// JS ->

let currentPage = 1;

// Selectos

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

// 1. FETCH THE DATA

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
  const modifiedList = remapData(results);

  return modifiedList;
}

// Render the Data

function renderMovies(movieList = []) {
  // Something

  console.log(movieList);

  movieList.forEach((movie) => {
    const movieCardHTMLElement = createCardForMovie(movie);
    movieListContainer.append(movieCardHTMLElement);
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


      <section id="favorites" class="favorites">
        <i class="fa fa-heart" aria-hidden="true"></i>
        <i class="fa fa-heart-o" aria-hidden="true"></i>
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

function switchTabs(event) {
  allTabButtonElement.classList.remove("active-tab");
  favouritesTabButtonElement.classList.remove("active-tab");

  const element = event.target;
  element.classList.add("active-tab");
}

allTabButtonElement.addEventListener("click", switchTabs);
favouritesTabButtonElement.addEventListener("click", switchTabs);

// TODO:
// FAVOURITES -> USE only Local Storage...

function setMoviesToLocalStorage(newFavMovie) {
  const prevFavMovies = getMoviesToLocalStorage();
  const arrayOfFavMovies = [...prevFavMovies, newFavMovie];
  localStorage.setItem("favMovie", JSON.stringify(arrayOfFavMovies));
}

function getMoviesToLocalStorage() {
  const allFavMovieObj = JSON.parse(localStorage.getItem("favMovie"));
  if (
    allFavMovieString === null ||
    allFavMovieString === undefined ||
    allFavMovieString === ""
  ) {
    return [];
  } else {
    return allFavMovieObj;
  }
}

function removeMovieFromLocalStorage(id) {
  const allFavMovieObj = getMoviesToLocalStorage();
  const filterdMovies = allFavMovieObj.filter((movie) => movie.id != id);
  localStorage.setItem("favMovie", JSON.stringify(filterdMovies));
}
