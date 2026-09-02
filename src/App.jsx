 import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Translator from "./pages/Translator";
import RandomString from "./pages/RandomString";

function App() {
   return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* NAVBAR */}
      <Navbar />

      {/* PAGES */}
      <main className="mx-auto max-w-7xl px-6 pb-14 pt-20">

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/translate"
            element={<Translator />}
          />

          <Route
            path="/random"
            element={<RandomString />}
          />

        </Routes>

      </main>

    </div>
  );
}

export default App;