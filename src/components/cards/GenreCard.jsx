import { Link } from 'react-router-dom'

const GenreCard = (props) => {
  console.log(props)
  return (
    <div className="card">
      <Link to={`/games/${props.genre.id}`}>
        <div className="img-wrapper">
          <img src={props.genre.image_background} alt={props.genre.name} />
        </div>
        <div className="info-wrapper flex-col">
          <h3>{props.genre.name}</h3>
          <p>{props.genre.games_count}</p>
        </div>
      </Link>
    </div>
  )
}

export default GenreCard
