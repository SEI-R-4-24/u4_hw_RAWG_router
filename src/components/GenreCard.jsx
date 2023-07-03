import { Link } from 'react-router-dom'
import axios from 'axios'

const GenreCard = (props) => {

  return (
    <div className="card" onClick={props.onClick}>
      <div className="img-wrapper">
        <img className="game-image" src={genre.image_background} alt={genre.name} />
      </div>
      <div className="info-wrapper flex-col">
        <h3>{props.name}</h3>
        <p>{props.gamesCount}</p>
      </div>
      <Link to="/viewgames">
        <button className="backButton">BACK</button>
      </Link>
    </div>
  )
}

export default GenreCard
