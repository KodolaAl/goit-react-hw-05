
import { Routes, Route } from "react-router-dom";
import HomePages from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import NotFoundPages from "./pages/NotFoundPage/NotFoundPage";
import Navigation from "./components/Navigation/Navigation";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage"
import MovieCast from "./components/MovieCast/MovieCast";
import MovieReviews from "./components/MovieReviews/MovieReviews";

function App() {

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
        <Route path="cast" element={<MovieCast />} />
        <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPages />} />
      </Routes>
    </div>
  );
}

export default App;
