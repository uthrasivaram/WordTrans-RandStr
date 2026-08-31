 import { Routes, Route } from "react-router-dom";

import Home from "./components/Home"; 

function App() {
  return (
    <div className="">
      <Home />

      {/* <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/courses"
          element={<Courses />}
        />

        <Route
          path="/courses/:name"
          element={<CourseDetails />}
        />

        <Route
          path="/bootcamp"
          element={<Bootcamp />}
        />

        <Route
          path="/mentors"
          element={<Mentors />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/login"
          element={<Auth />}
        />

        <Route
          path="/signup"
          element={<Auth signup />}
        />
      </Routes> */}
    </div>
  );
}

export default App;