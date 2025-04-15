// import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePages from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import NotFoundPages from "./pages/NotFoundPage";
import Navigation from "./components/Navigation/Navigation";
// import Loader from "./components/Loader/Loader";
// import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

function App() {

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="*" element={<NotFoundPages />} />
      </Routes>
    </div>
  );
}

export default App;
