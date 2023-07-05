import { useEffect, useState } from 'react'
import { BASE_URL, API_KEY } from '../globals'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const GameDetails = () => {
  const [gameDetails, setGameDetails] = useState({})
  let { gameId } = useParams()

  useEffect(() => {
    const getGameDetails = async () => {
      const response = await axios.get(
        `${BASE_URL}/games/${gameId}?key=${API_KEY}`
      )
      setGameDetails(response.data)
    }
    getGameDetails()
  }, [gameId])

  return (
    <div className="game-content">
      <section className="image-container">
        <div>
          <h2>{gameDetails.name}</h2>
          <img src={gameDetails.background_image} alt="Game" />
        </div>
      </section>
      <section className="details">
        <div className="flex-row space"></div>
        <div>
          <p>Rating: {gameDetails.rating} </p>
          <p>Released: {gameDetails.released} </p>
          <p>Description: {gameDetails.description_raw} </p>
        </div>
      </section>
    </div>
  )
}

export default GameDetails
