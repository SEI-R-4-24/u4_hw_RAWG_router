import { Link } from "react-router-dom"

const GenreCard = ({ genre }) => {

  return (
    <div className="card">
      <div className="img-wrapper">
        <img className="gmae-image" src={genre.image_background} alt={genre.name} />
      </div>
      <div className="info-wrapper flex-col">
        <h3>{genre.name}</h3>
        <p>Games: {genre.games_count}</p>
      </div>
      <Link to="/viewgames">
        <button className="backButton">Back</button>
      </Link>
    </div>
  )
}

export default GenreCard
