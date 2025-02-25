import axios from "../api/axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Home() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    axios.get("/movies").then((res) => {
      setMovies(res.data);
    });
  };

  useEffect(fetchMovies, []);

  return (
    <div className="container mx-auto p-6 text-white">
      <h1 className="text-4xl font-bold mb-4">Movies List</h1>
      <hr className="border-gray-600 mb-4" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <Link
            key={movie.id}
            to={`/movies/${movie.id}`}
            className="bg-gray-800 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
          >
            <h2 className="text-lg font-semibold">{movie.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
