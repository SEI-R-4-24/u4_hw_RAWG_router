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
      console.log(response.data.results)
    }
    getGameDetails()
  }, [gameId])

  return (
    <div className="game-content">
      <h1 className="detail-h1">{gameDetails.name}</h1>
      <section className="image-container">
        <div>
          <img src={gameDetails.background_image} alt="" />
        </div>
      </section>
      <section className="details">
        <div className="flex-row space"></div>
        <div>
          <h3>Release Year: {gameDetails.released}</h3>
          <h3>Rating: {gameDetails.rating}</h3>
          <h3>{gameDetails.description_raw}</h3>
        </div>
      </section>
    </div>
  )
}

export default GameDetails
