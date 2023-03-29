import "./cast-style.css";
const Cast = ({ prop }) => {
  return (
    <div className="cast-div">
      <img
        src={`https://image.tmdb.org/t/p/w500${prop.profile_path}`}
        alt="img"
      />
      <p className="name">{prop.name}</p>
      <p className="character">Character : {prop.character}</p>
    </div>
  );
};

export default Cast;
