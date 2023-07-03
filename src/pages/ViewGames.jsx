import { useState } from 'react'
import axios from 'axios'

const ViewGames = (props) => {
  const [genereId, setGenreId] = useState(null)
  const [games, setGames] = useState([])

  const getGamesByGenre = async () => {

  }

  return (
    <div className="main-div">
      <h4 className="games-h4">View All Games</h4>
      <div className="container-grid">
        {
          games.map((game) => {
            <div className="game-card" key={game.id}>
              <Link to={`${game.id}`}>
                <img src={game.background_image} alt={game.name} />
                <h5>{game.name}</h5>
              </Link>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default ViewGames
