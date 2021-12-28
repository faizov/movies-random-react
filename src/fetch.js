export const movies = () => {
  fetch(
    "https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-random-movies&page=1",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
        "x-rapidapi-key": "ec4454b92amsh7588ecca818cd9cp17b177jsn3ba1009b4388"
      }
    }
  )
    .then((response) => response.json())
    .then((data) => setData(data.movie_results.[Math.floor(Math.random() * data.movie_results.length)]))
    .catch((err) => {
      console.error("Ошибка: ", err);
    });
}

