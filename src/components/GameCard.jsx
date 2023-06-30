import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

const GameCard = ({games}) => {
  let {id} = useParams()

  const [gameId, setGameId] = useState('')
  const [game, setGame] = useState(null)

  useEffect(() => {
    let selectedGame = games.find(
      (game) => game.id === parseInt(id)
    )
    setGame(selectedGame)
    let selectedGameId = games.find(
      (game) => game.id === parseInt(id)
    )
    setGameId(selectedGameId)
  })
  
  return (
    <div className="card game-card" onClick={games.onClick}>
      <div className="img-wrapper">
        <img src={games.image} alt={game.name} />
      </div>
      <div className="info-wrapper flex-col">
        <h3>{games.name}</h3>
      </div>
      <Link to="/viewgames">
        <button className='backButton'> Back </button>
      </Link>
    </div>
  )
}

export default GameCard
