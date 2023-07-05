import { useEffect, useState } from 'react'
import GameCard from '../components/GameCard'

const GameDetails = (props) => {
  const [gameDetails, setGameDetails] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const respDetails = await axios.get(
        `https://api.rawg.io/api/games/${game.id}?key=4e74bbf369144419ba52ca5cb6901271`
      )
      setGameDetails(respDetails.data.results)
    }
    fetchData()
  }, [game.id])

  return (
    <div className="game-content">
      <section className="image-container">
        <div></div>
      </section>
      <section className="details">
        <div className="flex-row space"></div>
        <div>
          <h3></h3>
        </div>
      </section>
    </div>
  )
}

export default GameDetails
