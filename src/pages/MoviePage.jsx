import axios from "../api/axios";
import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";

export default function MoviePage() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const nav = useNavigate();

  const fetchMovie = () => {
    axios
      .get(`/movies/${id}`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        if (err.status === 404) {
          nav("/404");
        }
      });
  };

  useEffect(fetchMovie, [id, nav]);

  const { title, director, genre, release_year, abstract, reviews } = movie;
  return (
    <div className="container mx-auto p-6 text-white bg-blue-900 p-4 rounded-lg shadow-lg mt-4">
      <h2 className="text-2xl font-bold mb-2">Film</h2>
      <h1 className="text-4xl font-bold">{title}</h1>
      <h2 className="text-xl">Director: {director}</h2>
      <h3 className="text-lg ">Genre: {genre}</h3>
      <p> Release Year: {release_year}</p>
      <div className="mt-4 bg-gray-800 p-4 rounded-lg shadow-lg">
        {abstract}
      </div>

      <h2 className="text-2xl font-bold mt-6">Reviews</h2>
      {reviews?.length > 0 ? (
        <ul className="mt-4 space-y-4">
          {reviews.map((review) => (
            <li
              key={review.id}
              className="bg-gray-800 p-4 rounded-lg shadow-lg"
            >
              <strong>{review.name}</strong> - ⭐ {review.vote}/5
              <p className="mt-2">{review.text}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400">No reviews yet.</p>
      )}
    </div>
  );
}
