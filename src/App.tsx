import { useState, useEffect } from "react";
import { Content, Menu } from "./components";
import "./style.scss";

const apiKey = {
    method: "GET",
    "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
    "x-rapidapi-key": "ec4454b92amsh7588ecca818cd9cp17b177jsn3ba1009b4388"
}

export default function App() {
  const [data, setData] = useState({});
  const [image, setImage] = useState({});

  useEffect(() => {
    const getMovies = async () => {
      fetch(
        "https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-random-movies&page=1",
        apiKey
      )
        .then((response) => response.json())
        .then((data) => setData(data.movie_results.[Math.floor(Math.random() * data.movie_results.length)]))
        .catch((err) => {
          console.error("Ошибка: ", err);
        });
    }
    getMovies()
  }, []);

  useEffect(() => {
    const getPoster = async () => {
      if (data) {
        return (
          fetch(`https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-movies-images-by-imdb&imdb=${data.imdb_id}`,
          apiKey
          )
          .then((response) => response.json())
          .then((image) => setImage(image))
        )
      }
      return console.log('Не пришла data')
    }
    getPoster()
  }, [data]);

  return (
    <>
      <Menu />
      <Content data={data} image={image.poster}/>
    </>
  );
}
