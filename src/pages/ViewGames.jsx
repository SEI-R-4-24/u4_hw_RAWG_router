import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GameCard from '../components/GameCard'
import axios from 'axios'
import { BASE_URL, API_KEY } from '../globals'

const ViewGames = (props) => {
  const { genreId } = useParams()
  const [games, setGames] = useState([])

  useEffect(() => {
    const getGamesByGenre = async () => {
      const response = await axios.get(
        `${BASE_URL}/games?key=${API_KEY}&genres=${genreId}`
      )
      setGames(response.data.results)
    }
    getGamesByGenre()
  }, [genreId])

  return (
    <div className="container-grid">
      {games.map((game) => (
        <GameCard
          key={game.id}
          image={game.background_image}
          name={game.name}
          rating={game.rating}
        />
      ))}
    </div>
  )
}

export default ViewGames
