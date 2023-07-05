import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_KEY } from '../globals'
import GameCard from '../components/GameCard'

const ViewGames = (props) => {
  const [games, setGames] = useState([])
  const { genreId } = useParams()

  useEffect(() => {
    getGamesByGenre()
  }, [genreId])

  const getGamesByGenre = async () => {
    const result = await axios.get(
      `https://api.rawg.io/api/games?page_size=40&genres=${genreId}&key=${API_KEY}`
    )
    setGames(result.data.results)
  }

  return (
    <div className="container-grid">
      {games &&
        games.map((game) => (
          <GameCard
            key={game.id}
            gameId={game.id}
            image={game.background_image}
            name={game.name}
            rating={game.rating}
          />
        ))}
    </div>
  )
}

export default ViewGames
