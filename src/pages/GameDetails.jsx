import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const GameDetails = (props) => {
  let { gameId } = useParams()

  const [gameDetails, setGameDetails] = useState({})

  useEffect(() => {
    const getGame = async () => {
      let response = await axios.get(
        `https://api.rawg.io/api/games/${parseInt(gameId)}?key=${
          import.meta.env.VITE_RAWG_KEY
        }`
      )
      console.log(response)
      setGameDetails(response.data)
    }

    getGame()
  }, [gameId])

  return (
    <div className="game-content">
      <section className="image-container">
        <div>
          <h1>{gameDetails.name}</h1>
          <img src={gameDetails.background_image} alt="poster" />
        </div>
      </section>
      <section className="details">
        <div className="flex-row space">
          <h3>Released: {gameDetails.released}</h3>
          <h3>Metacritic Score: {gameDetails.metacritic}</h3>
          <h3>Rating: {gameDetails.rating}</h3>
        </div>
        <div>
          <h3>Description</h3>
          {gameDetails.description_raw}
        </div>
      </section>
    </div>
  )
}

export default GameDetails
