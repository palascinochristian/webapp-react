import { Link } from "react-router";
import Stars from "./Stars";

export default function MovieCard({ image, title, vote, link }) {
  return (
    <Link
      to={link}
      className="bg-gray-800 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 flex flex-col"
    >
      <div className="h-120">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={`http://localhost:3001/movies/${image}`}
          alt={title}
        />
      </div>
      <h2 className="text-lg font-semibold mt-3 text-center">{title}</h2>
      <Stars vote={Number(vote)} />
    </Link>
  );
}
