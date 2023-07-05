import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const API_KEY = import.meta.env.VITE_RAWG_KEY

const GameDetails = (props) => {
  const [gameDetails, setGameDetails] = useState({})

  let { gameId } = useParams()

  useEffect(() => {
    let isCancelled = false
    const getGameDetails = async() => {
      const response = await axios.get(
        `https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`
      )
      if(!isCancelled) {
        setGameDetails(response.data)
      }
    }
    getGameDetails()
    return() => {
      isCancelled = true
    }
  }, [gameId])

  return (
    <div className="game-content">
      <div>
        <h1>{gameDetails.name}</h1>
      </div>
      <section className="image-container">
        <a href={gameDetails.website}>
          <img src={gameDetails.background_image} alt="Background" />
        </a>
      </section>
      <section className="details">
        <div className="flex-row game-details">
          <div className="detail">
            <h3>Released: {gameDetails.released}</h3>
          </div>
          <div className="detail">
            <h3>MetaCritic Score: {gameDetails.metacritic}</h3>
          </div>
          <div className="detail">
            <h3>Rating: {gameDetails.rating}</h3>
          </div>
        </div>
        <div className='flex-col'>
          <h3>Description</h3>
          <p>{gameDetails.description_raw}</p>
        </div>
      </section>
    </div>
  )
}

export default GameDetails
