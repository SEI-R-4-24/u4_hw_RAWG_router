import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL, API_KEY } from '../globals'
import { useParams } from 'react-router-dom'

const GameDetails = (props) => {
  const [gameDetails, setGameDetails] = useState({})
  const { gameId } = useParams()

  useEffect(() => {
    const getDetails = async () => {
      const response = await axios.get(
        `${BASE_URL}/games/${gameId}?key=${API_KEY}`
      )
      setGameDetails(response.data)
    }
    getDetails()
  }, [gameId])

  return (
    <div className="game-content">
      <div>
        <h1>{gameDetails.name}</h1>
      </div>
      <section className="image-container">
        <div>
          <img src={gameDetails.background_image} alt="Game Background" />
        </div>
      </section>
      <section className="details">
        <div className="flex-row space"></div>
        <div>
          <h3>Released: {gameDetails}</h3>
          <h3>MetaCritic Score: {gameDetails.metacritic}</h3>
          <h3>Rating: {gameDetails.rating}</h3>
        </div>
      </section>
    </div>
  )
}

export default GameDetails
