import { Link } from 'react-router-dom'

const GameCard = (props) => {
  return (
    <Link to={'/games/details/' + props.gameId}>
      <div className="card game-card">
        <div className="img-wrapper">
          <img src={props.image} alt="Game image"></img>
        </div>
        <div className="info-wrapper flex-col">
          <h3>{props.name}</h3>
          <p>{props.rating}</p>
        </div>
      </div>
    </Link>
  )
}

export default GameCard
