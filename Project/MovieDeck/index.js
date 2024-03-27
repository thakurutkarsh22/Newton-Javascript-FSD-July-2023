// JS ->

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

async function fetchData() {
  const url =
    "https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=c13145a90d2d1748b8e9ec01e895106e";
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

// 2. Create the card.. input data ;  Retrun card

// 2. render the card .... input as all cards and render it "" RETURN : true.

// 4. Facilitator
fetchData();
