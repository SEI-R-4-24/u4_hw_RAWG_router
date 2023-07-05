import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_KEY } from '../globals'

const GameDetails = (props) => {
  const [gameDetails, setGameDetails] = useState({})

  const { gameId } = useParams()

  useEffect(() => {
    getGameById()
  }, [gameId])

  const getGameById = async () => {
    const response = await axios.get(
      `https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`
    )
    setGameDetails(response.data)
  }

  return (
    <div className="game-content">
      <h1>{gameDetails.name}</h1>
      <section className="image-container">
        <div>
          <img src={gameDetails.background_image}></img>
        </div>
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
