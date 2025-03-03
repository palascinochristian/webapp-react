import { FaSpinner } from "react-icons/fa";

export default function Loader() {
  return (
    <div className="flex justify-center m-3">
      <FaSpinner className="animate-spin text-3xl" />
    </div>
  );
}
