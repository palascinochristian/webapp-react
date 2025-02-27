import { Link } from "react-router";

export default function MovieCard({ movie }) {
  return (
    <Link
      to={`/movies/${movie.id}`}
      className="bg-gray-800 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 flex flex-col"
    >
      <div className="h-120">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={`http://localhost:3001/movies/${movie.image}`}
          alt={movie.title}
        />
      </div>
      <h2 className="text-lg font-semibold mt-3 text-center">{movie.title}</h2>
    </Link>
  );
}
