import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import GameCard from '../components/GameCard'
const API_KEY = import.meta.env.VITE_RAWG_KEY

const ViewGames = () => {

  const [games, setGames] = useState([])

  let { genreId } = useParams()

  useEffect(() => {
    let isCancelled = false
    const getGamesByGenre = async () => {
      const response = await axios.get(
        `https://api.rawg.io/api/games?page_size=40&genres=${genreId}&key=${API_KEY}`
      )
      if (!isCancelled) {
        setGames(response.data.results)
      }
    }
    getGamesByGenre()
    return () => {
      isCancelled = true
    }
  }, [genreId])

  return (
    <div className="container-grid">
      {games.map((game) => (
        <Link to={`/games/details/${game.id}`} key={game.id}>
          <GameCard

            {...game}
            image={game.background_image}
          />
        </Link>
      ))}
    </div>
  )
}

export default ViewGames