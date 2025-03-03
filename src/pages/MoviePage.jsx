import axios from "../api/axios";
import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Stars from "../components/ui/Stars";
import { useLoadingContext } from "../contexts/Loading";

const initialFormData = {
  name: "",
  text: "",
  vote: 0,
};

export default function MoviePage() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const nav = useNavigate();
  const { setIsLoading } = useLoadingContext();

  const [formData, setFormData] = useState(initialFormData);

  const fetchMovie = () => {
    setIsLoading(true);
    axios
      .get(`/movies/${id}`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        if (err.status === 404) {
          nav("/404");
        }
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(fetchMovie, [id, nav]);

  const handleFormChange = (fieldName, fieldValue) => {
    setFormData((currentFormData) => {
      return {
        ...currentFormData,
        [fieldName]: fieldValue,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`/movies/${id}/reviews`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        setFormData(initialFormData);
        fetchMovie();
      });
  };

  const {
    title,
    director,
    genre,
    release_year,
    abstract,
    image,
    reviews,
    avg_vote,
  } = movie;

  return (
    <div className="container mx-auto p-3 text-white bg-blue-900 rounded-lg shadow-lg mt-4">
      <div className="flex flex-col md:flex-row gap-6">
        <div>
          <img
            className="w-80 rounded-lg shadow-lg "
            src={`http://localhost:3001/movies/${image}`}
            alt={title}
          />
        </div>
        <div className="flex-grow">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="mt-4 mb-4">
            <Stars vote={avg_vote} />
          </p>
          <h2 className="text-xl mt-2">Director: {director}</h2>
          <h3 className="text-lg mt-1">Genre: {genre}</h3>
          <p className="mt-1">Release Year: {release_year}</p>

          <div className="mt-4 bg-gray-800 p-4 rounded-lg shadow-lg">
            <p>{abstract}</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-6">Reviews</h2>
      {reviews?.length > 0 ? (
        <ul className="mt-4 space-y-4">
          {reviews.map((review) => (
            <li
              key={review.id}
              className="bg-gray-800 p-4 rounded-lg shadow-lg"
            >
              <strong>{review.name}</strong> <Stars vote={review.vote} />
              <p className="mt-2">{review.text}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400">No reviews yet.</p>
      )}

      <h2 className="text-2xl font-bold mt-6">Add a Review</h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => handleFormChange("name", e.target.value)}
            className="mt-2 p-2 w-full rounded-lg bg-gray-700 text-white"
            required
          />
        </div>
        <div>
          <label
            htmlFor="vote"
            className="block text-sm font-medium text-gray-300"
          >
            Your Rating
          </label>
          <select
            id="vote"
            name="vote"
            value={formData.vote}
            onChange={(e) => handleFormChange("vote", e.target.value)}
            className="mt-2 p-2 w-full rounded-lg bg-gray-700 text-white"
            required
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="text"
            className="block text-sm font-medium text-gray-300"
          >
            Your Review
          </label>
          <textarea
            id="text"
            name="text"
            value={formData.text}
            onChange={(e) => handleFormChange("text", e.target.value)}
            className="mt-2 p-2 w-full rounded-lg bg-gray-700 text-white"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className="w-20 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
