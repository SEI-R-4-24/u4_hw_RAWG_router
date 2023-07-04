import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'

let esrb

const GameDetails = (props) => {
  const [gameDetails, setGameDetails] = useState({})
  let { gameId } = useParams()
  console.log(gameId)

  const getGameDetails = async () => {
    const response = await axios.get(
      `${BASE_URL}/games/${parseInt(gameId)}?key=${
        import.meta.env.VITE_RAWG_KEY
      }`
    )
    setGameDetails(response.data)
    console.log(response.data)
    esrb = response.data.esrb_rating.name
  }

  useEffect(() => {
    getGameDetails()
  }, [gameId])

  return (
    <div className="game-content">
      <div>
        <h1 style={{ textAlign: 'center' }}>
          {gameDetails.name} ({gameDetails.released})
        </h1>
      </div>
      <section className="image-container">
        <a href={gameDetails.website}>
          <img src={gameDetails.background_image} alt="" />
        </a>
      </section>
      <section className="details">
        <div className="flex-row space">
          <div>
            <h3>Rating: {gameDetails.rating}</h3>
          </div>
          <div>
            <h3>MetaCritic: {gameDetails.metacritic}</h3>
          </div>
          <div>
            <h3>ESRB Rating: {esrb}</h3>
          </div>
        </div>
        <div className="flex-col">
          <h3>Description:</h3>
          <p>{gameDetails.description_raw}</p>
        </div>
      </section>
    </div>
  )
}

export default GameDetails
