import { useState, useEffect } from "react";
import { Content, Menu } from "./components";
import "./style.scss";

const apiKey = {
    method: "GET",
    "headers": {
      "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
      "x-rapidapi-key": "ec4454b92amsh7588ecca818cd9cp17b177jsn3ba1009b4388"
    }
}

export default function App() {
  const [id, setId] = useState('');
  const [data, setData] = useState({});
  const [images, setImages] = useState('');

  useEffect(() => {
    const getMoviesId = () => {
      fetch(
        "https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-random-movies&page=1",
        apiKey
      )
        .then((response) => response.json())
        .then((data) => setId(data.movie_results.[Math.floor(Math.random() * data.movie_results.length)].imdb_id))
    }
    getMoviesId()
  }, []);

  useEffect(() => {
    const getData = async () => {
      fetch(`https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-movie-details&imdb=${id}`,
      apiKey
      )
      .then((response) => response.json())
      .then((data) => setData(data))
      
      await fetch(`https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-movies-images-by-imdb&imdb=${id}`,
      apiKey
      )
      .then((response) => response.json())
      .then((images) => setImages(images))
    }
    getData()
  }, [id]);
  console.log(data)
  return (
    <>
      <Menu />
      <Content data={data} images={images}/>
    </>
  );
}
