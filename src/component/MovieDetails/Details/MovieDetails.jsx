import Cast from "../CastPage/Cast";
import Header from "../../Header/Header";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./movieDetail-style.css";

const MovieDetails = () => {
  const [MovieDetail, setMovieDetail] = useState([]);
  const [castDetails, setCastDetails] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${location.state.id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovieDetail(data));
    fetch(
      `https://api.themoviedb.org/3/movie/${location.state.id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setCastDetails(data.cast));
    // setGeneresArr(MovieDetail.genres)
  });

  const iconStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500${MovieDetail.backdrop_path})`
  };

  useEffect(() => {
    const generesFun = async () => {};

    generesFun();
  }, [MovieDetail]);

  const genres =
    MovieDetail.genres && MovieDetail.genres.length > 0
      ? MovieDetail.genres.map((item) => (
          <span key={item.id}>{item.name + " , "}</span>
        ))
      : "";

  return (
    <main>
      <Header />
      <div className="div-container">
        <br />
        <div className="grid-container">
          <div className="icon-div" style={iconStyle}></div>
          <div className="details-div">
            <p className="movie-title">{MovieDetail.title}</p>
            <p className="rating">Rating : {MovieDetail.vote_average}</p>
            <span className="flex">
              <button>{MovieDetail.runtime} min</button>
              <span>{genres}</span>
            </span>
            <p className="release-date">
              Release Date : {MovieDetail.release_date}
            </p>
          </div>
          <div className="overview-div">
            <p className="tittle">Overview</p>
            <p className="description">{MovieDetail.overview}</p>
          </div>
          <div className="img-div">
            <img
              src={`https://image.tmdb.org/t/p/w500${MovieDetail.poster_path}`}
              alt="img"
            />
          </div>
        </div>
      </div>
      <p className="cast-tittle">CAST</p>

      <div className="cast-container">
        {castDetails.map((item, ind) => {
          return <Cast prop={item} key={ind} />;
        })}
      </div>
    </main>
  );
};

export default MovieDetails;
