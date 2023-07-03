import axios from 'axios'
import { BASE_URL } from '../components/Globals'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const GameDetails = () => {
  let {gameId} = useParams()
  const [gameDetails, setGameDetails] = useState({})

  useEffect(() => {
    const getGameDetails = async () => {
      const response = await axios.get(`${BASE_URL}/games/${gameId}?key=${import.meta.env.VITE_RAWG_KEY}`)
      setGameDetails(response.data)
    }
    getGameDetails()
    
  }, [gameId])

  return (
    <div className="game-content">
      <h3>{gameDetails.name}</h3>
      <section className="image-container">
        <div>
          <img src={gameDetails.background_image} />
        </div>
      </section>
      <section className="details">
        <div className="flex-row space">
          <p><b>Released:</b> {gameDetails.released}</p>
          <p><b>MetaCritic Score:</b> {gameDetails.metacritic}</p>
          <p><b>Rating:</b> {gameDetails.rating}</p>
        </div>
        <div>
          <h3>
            <p>Description</p>
            <br/>
            {gameDetails.description_raw}
          </h3>
        </div>
      </section>
    </div>
  )
}

export default GameDetails
