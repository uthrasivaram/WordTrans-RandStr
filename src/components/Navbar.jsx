import { NavLink } from "react-router-dom";

// import Home from "./pages/Home.jsx";
// import Translator from "./pages/Translator.jsx";
// import RandomString from "./pages/RandomString.jsx";

function Navbar() {
  const linkClass = ({ isActive }) =>
    `font-medium transition-colors duration-200 ${
      isActive
        ? "text-green-500"
        : "text-gray-300 hover:text-green-400"
    }`;

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-lg">
      <div className="mx-auto flex h-15 max-w-7xl items-center justify-between px-6">

        <NavLink
          to="/"
          className="text-xl font-bold text-white"
        >
          Word<span className="text-green-500">Trans</span>
        </NavLink>

        <nav className="flex text-md items-center gap-6">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/translate" className={linkClass}>
            Translator
          </NavLink>

          <NavLink to="/random" className={linkClass}>
            Random strings
          </NavLink>
        </nav>

        <button className="rounded-lg bg-green-500 px-5 py-2 font-semibold text-blue-900">
          Welcome
        </button>

      </div>
    </header>
  );
}


export default Navbar;