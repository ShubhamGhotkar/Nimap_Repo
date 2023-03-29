import { Link } from "react-router-dom";
import "./card-style.css";

const Card = ({ prop }) => {
  return (
    <div className="card-container">
      <Link to="/moviedetails" state={prop}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${prop.poster_path}`}
          alt="img"
        />
      </Link>
      <p className="tittle">{prop.title}</p>
      <p className="movie-rating" style={{ color: "red" }}>
        Rating : {prop.vote_average}
      </p>
    </div>
  );
};

export default Card;
