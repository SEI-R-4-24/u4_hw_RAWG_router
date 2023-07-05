import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_KEY, BASE_URL } from '../globals'

const GameDetails = () => {
  const [gameDetails, setGameDetails] = useState({})

  let { gameId } = useParams()

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
      <section className="image-container">
        <img src={gameDetails.background_image} alt={gameDetails.name} />
      </section>
      <section className="details">
        <div className="flex-row space">
          <h3>Rating: {gameDetails.rating}</h3>
          <h3>Release Date: {gameDetails.released}</h3>
        </div>
        <div>
          <h3>Description:</h3>
          {gameDetails.description_raw}
        </div>
      </section>
    </div>
  )
}

export default GameDetails
