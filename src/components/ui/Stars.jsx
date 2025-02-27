import { FaStar, FaRegStar } from "react-icons/fa";

export default function Stars({ vote }) {
  const starIcons = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= vote) {
      // stelline piene
      starIcons.push(<FaStar key={i} className="text-yellow-500" />);
    } else {
      // stelline vuote
      starIcons.push(<FaRegStar key={i} className="text-gray-400" />);
    }
  }

  return <div className="flex">{starIcons}</div>;
}
