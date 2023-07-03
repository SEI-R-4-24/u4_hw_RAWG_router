import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import RAWG_KEY from '../globals'

const GameDetails = (props) => {
  let { gameId } = useParams()
  const [gameDetails, setGameDetails] = useState({})

  const getGameDetails = async () => {
    const response = await axios.get(
      `https://api.rawg.io/api/games/${gameId}?key=${RAWG_KEY}`
    )
    setGameDetails(response.data)
    console.log(gameDetails)
  }

  useEffect(() => {
    getGameDetails()
  }, [gameId])

  return (
    <div className="game-content">
      <section className="image-container">
        <div>
          <img src={gameDetails.background_image} alt="" />
        </div>
      </section>
      <section className="details">
        <div className="flex-row space"></div>
        <div>
          <h3>{gameDetails.name}</h3>
          <p>{gameDetails.description}</p>
        </div>
      </section>
    </div>
  )
}

export default GameDetails
