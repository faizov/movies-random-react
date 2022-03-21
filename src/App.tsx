import { useState, useEffect } from "react";
import { onValue } from "firebase/database";
import dataMovies from './services/firebase'

import { TMovies } from './types'
import { Content, Menu } from "./components";
import "./style.scss";  

const aipiMovieId = `https://imdb-api.com/en/API/Posters/${process.env.REACT_APP_API_TOKEN}/`

export default function App() {
  const [randomMovie, setRandomMovie] = useState<TMovies>();
  const [id, setId] = useState<string>();
  const [poster, setPoster] = useState<string>()

  useEffect(() => {
    onValue(dataMovies, (snapshot) => {
      const data = snapshot.val();
      const movie = data[Math.floor(Math.random() * 250)]
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
      
    });
  }, [])

  useEffect(() => {
    fetch(aipiMovieId+id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const poster = data.posters[0]?.link
        setPoster(poster)
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
