import axios from "../api/axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    axios.get("/movies").then((res) => {
      setMovies(res.data);
    });
  };

  useEffect(fetchMovies, []);

  return (
    <>
      <h1> Movies List </h1>
      <hr></hr>
      {movies.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </>
  );
}
