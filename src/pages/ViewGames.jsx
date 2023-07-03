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
          games.map((game) => (
            <div key={game.id} className="card">
              <img src="" alt="poster" />
              <h4>{game.title}</h4>
              <button onClick={() => getGamesByGenre(game.id)}>GAME DETAILS</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ViewGames
