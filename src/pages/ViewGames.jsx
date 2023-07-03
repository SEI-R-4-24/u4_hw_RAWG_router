import { useState } from 'react'
import axios from 'axios'

const API_KEY = import.meta.env.VITE_RAWG_KEY

const ViewGames = () => {
  // console.log(props)
  const [genereId, setGenreId] = useState(null)
  const [games, setGames] = useState([])

  const getGamesByGenre = async () => {
    // let games = await axios.get(`https://api.rawg.io/api/genres=${}&key=${API_KEY}`)
    let genres = 
    console.log(games)
    // setGames()
  }

  return (
    <div className="main-div">
      <h4 className="games-h4">View All Games</h4>
      <div className="container-grid">
        {
          games.map((game) => (
            <div key={game.id} className="card">
              <img src='' alt="poster" />
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
