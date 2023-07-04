import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { API_KEY, BASE_URL } from '../global'

const GameDetails = () => {
  const [gameDetails, setGameDetails] = useState({})

  let { gameId } = useParams()

  useEffect(() => {
    const getDetails = async () => {
      const response = await axios.get(`${BASE_URL}/games/${gameId}?key=${API_KEY}`)
      setGameDetails(response.data)
    }
    getDetails()
  }, [gameId])

  return (
    <div className="game-content">
      <section className="game-container">
        <div className='image-container'>
          <img className='details-img' src = {gameDetails.background_image}/>
        </div>
        <div className="flex-row-space">
          <h1>{gameDetails.name}</h1>
          <div className='flex-row-space-column'>
            <h3>Released Date: {gameDetails.released}</h3>
            <h3>Rating: {gameDetails.rating}</h3>
          </div>
        </div>
        <br/>
        <div>
          {gameDetails.description_raw}
        </div>
      </section>
    </div>
  )
}

export default GameDetails
