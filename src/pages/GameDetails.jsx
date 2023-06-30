import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_KEY } from '../global'
import axios from 'axios'

const GameDetails = (props) => {
  let { id } = useParams()
  const [gameDetails, setGameDetails] = useState({})

  useEffect(() => {
    const getGame = async () => {
      let response = await axios.get(
        `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
      )
      setGameDetails(response.data)
    }
    getGame()
  }, [id])

  return (
    <div className="game-content">
      <section className="image-container">
        <div>
          <h1>{gameDetails.name}</h1>
          <img src={gameDetails.background_image} alt="" />
        </div>
      </section>
      <section className="details">
        <div className="flex-row space">
          <p>Released: {gameDetails.released}</p>
          <p>MetaCritic Score: {gameDetails.metacritic}</p>
          <p>Rating: {gameDetails.rating}</p>
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
