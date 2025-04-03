// Display favorite movies
const favoriteMovies = [
    { title: "Interstellar", rating: "⭐⭐⭐⭐⭐" },
    { title: "The Martian", rating: "⭐⭐⭐⭐" },
    { title: "Arrival", rating: "⭐⭐⭐⭐⭐" },
  ];
  
  document.getElementById("movieButton").addEventListener("click", function () {
    const movieList = document.getElementById("movieList");
    movieList.innerHTML = favoriteMovies
      .map(movie => `<p>${movie.title} - ${movie.rating}</p>`)
      .join('');
  });