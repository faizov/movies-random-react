import { useState, useEffect } from "react";
import { Content, Menu } from "./components";
import "./style.scss";  
import { TMovies, TPoster } from './types'

import topMovies from './top250.json'

const aipiMovieId = `https://imdb-api.com/en/API/Posters/${process.env.REACT_APP_API_TOKEN}/`

export default function App() {
  const [randomMovie, setRandomMovie] = useState<TMovies>();
  const [id, setId] = useState<string | undefined>();
  const [poster, setPoster] = useState<string>()

  useEffect(() => {
    const movie = topMovies.items[Math.floor(Math.random() * 250)]

    const obj = {
      id: movie.id,
      title: movie.title,
      year: movie.year,
      imDbRating: movie.imDbRating,
    }

    if (movie) {
      setRandomMovie(obj)
      setId(movie.id)
    }
  }, [])

  

  useEffect(() => {
    fetch(aipiMovieId+id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPoster(data.posters[0].link)
      })
      .catch((error) => {
        console.error('error :>> ', error);
      });
  }, [id])

  const obj = {
    ...randomMovie,
    poster: poster
  }

  return (
    <>
      <Menu />
      {randomMovie ? <Content {...obj} /> : "Загрузка..."}
    </>
  );
}
