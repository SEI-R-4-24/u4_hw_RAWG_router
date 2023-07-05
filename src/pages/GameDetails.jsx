import { useEffect, useState } from 'react'
import axios from 'axios'
import { API_KEY } from '../globals'

const GameDetails = (props) => {
  const [gameDetails, setGameDetails] = useState('')
  const [gameId, setGameId] = useState(null)

  useEffect(() => {
    const showGame = async () => {
      const response = await axios.get(
        `https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`
      )
      console.log(response.data.results)
      setGameDetails(response.data.results)
    }
    showGame()
  }, [gameId])

  return (
    <div className="game-content">
      <section key={gameDetails.id} className="image-container">
        <img alt="Background" src={game.background_image} />
        <div></div>
      </section>
      <section className="details">
        <h3>{gameDetails.released}</h3>
        {/* <h3>{game.metacritic}</h3>
        <h3>{game.rating}</h3> */}
        <div className="flex-row space"></div>
        <div>
          <h3></h3>
        </div>
      </section>
    </div>
  )
}

export default GameDetails
