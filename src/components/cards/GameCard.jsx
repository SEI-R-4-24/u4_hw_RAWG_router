import { Link } from 'react-router-dom'

const GameCard = (props) => {
  console.log(props)
  return (
    <div className="card game-card" onClick={props.onClick}>
      <Link to={`/games/details/${props.game.id}`}>
        <div className="img-wrapper">
          <img src={props.game.background_image} alt={props.game.name} />
        </div>
        <div className="info-wrapper flex-col">
          <h3>{props.game.name}</h3>
          <p>{props.game.rating}</p>
        </div>
      </Link>
    </div>
  )
}

export default GameCard
