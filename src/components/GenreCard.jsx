import { Link } from 'react-router-dom'

const GenreCard = (props) => {
  return (
    <Link to={'/view/games/' + props.genreId}>
      <div className="card">
        <div className="img-wrapper">
          <img src={props.image} alt="Genre image"></img>
        </div>
        <div className="info-wrapper flex-col">
          <h3>{props.name}</h3>
          <p>{props.gamesCount}</p>
        </div>
      </div>
    </Link>
  )
}

export default GenreCard
