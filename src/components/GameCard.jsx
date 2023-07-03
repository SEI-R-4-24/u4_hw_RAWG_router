import { Link } from 'react-router-dom'


const GameCard = ({game}) => {
  
  return (
   
    <div className="card game-card">
      
      <Link to={`/games/details/${game.id}`}>
        <div className="img-wrapper">
          <img src={game.background_image} alt="" />
        </div>
        <div className="info-wrapper flex-col">{game.name}</div>
      </Link>
    </div>
    
  )
}

export default GameCard
