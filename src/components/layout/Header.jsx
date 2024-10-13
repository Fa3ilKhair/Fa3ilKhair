import Nav from "./Nav";
import Logo from "../smallComponents/Logo";

export default function Header() {
  return (
    <header className="sticky top-0 bg-white shadow-xl flex justify-center items-center py-4 px-6 w-full">
      <div className="border-blue-800 flex justify-between w-full px-6">
        <Logo taille="h-16" />
        <Nav />
      </div>
    </header>
  );
}
