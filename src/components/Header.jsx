import Logo from "./Logo";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-gray-900 p-1 shadow-lg">
      <div className="container mx-auto flex justify-center items-center">
        <Logo />
      </div>
    </header>
  );
}
