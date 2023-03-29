import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PopularMovie from "./component/PopularMovie/PopularMovie";
import TopRatedMovie from "./component/TopRatedMovie/TopRatedMovie";
import UpcomingMovie from "./component/UpcomingMovie/UpcomingMovie";
import MovieDetails from "./component/MovieDetails/Details/MovieDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<PopularMovie />} />
          <Route path="/popular/:id" element={<PopularMovie />} />
          <Route path="/topratedmovie" element={<TopRatedMovie />} />
          <Route path="/upcomingmovie" element={<UpcomingMovie />} />
          <Route path="/moviedetails" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
