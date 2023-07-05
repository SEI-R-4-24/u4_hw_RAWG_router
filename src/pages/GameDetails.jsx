import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { API_KEY, BASE_PATH } from '../globals'

const GameDetails = () => {
  let { gameId } = useParams()
  const [gameDetails, setGameDetails] = useState({})

  useEffect(() => {
    const getGame = async () => {
      const response = await axios.get(
        `${BASE_PATH}games/${gameId}?key=${API_KEY}`
      )
      setGameDetails(response.data)
      console.log(gameDetails)
    }
    getGame()
  }, [])

  return (
    <div className="game-content">
      <h1>{gameDetails.name}</h1>
      <section className="image-container">
        <a href={gameDetails.website}>
          <img src={gameDetails.background_image} alt={gameDetails.name} />
        </a>
      </section>
      <section className="details">
        <div className="flex-row space">
          <h3>Released: {gameDetails.released}</h3>
          <h3>MetaCritic Score: {gameDetails.metacritic}</h3>
          <h3>Rating: {gameDetails.rating}</h3>
        </div>
        <div>
          <h3>Description</h3>
          <p>{gameDetails.description_raw}</p>
        </div>
      </section>
    </div>
  )
}

export default GameDetails
