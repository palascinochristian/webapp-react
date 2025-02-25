import { Link } from "react-router";

export default function Logo() {
  return (
    <Link to="/" className="h-50">
      <img src="../logo.png" className="h-50" alt="Movies 138 Logo" />
    </Link>
  );
}
