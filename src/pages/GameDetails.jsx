import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { API_KEY, BASE_URL } from '../globals'

const GameDetails = (props) => {
  
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
      <div>
        <h1>{gameDetails.name}</h1>
      </div>
      <section className="image-container">
        <div>
          <img src={gameDetails.background_image} alt="Background Image" />
        </div>
      </section>
      <section className="details">
        <div className="flex-row space">
          <h3>Released: {gameDetails.released}</h3>
          <h3>Rating: {gameDetails.rating}</h3>
          <h3>Description: {gameDetails.description_raw}</h3>
        </div>
      </section>
    </div>
  )
}

export default GameDetails