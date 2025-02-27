import { Link } from "react-router";

export default function Logo() {
  return (
    <Link to="/" className="h-35">
      <img
        src="../logo.png"
        className="h-45 aspect-square"
        alt="Movies 138 Logo"
      />
    </Link>
  );
}
