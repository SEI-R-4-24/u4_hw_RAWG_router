import { useEffect, useState } from 'react'
import axios from 'axios'
import GameCard from '../components/GameCard'
import { useParams } from 'react-router-dom'
import { API_KEY, BASE_URL } from '../globals'
import { Link } from 'react-router-dom'

const ViewGames = () => {
  const [games, setGames] = useState([])
  let { genreId } = useParams()

  const getGamesByGenre = async () => {
    let response = await axios.get(
      `${BASE_URL}/games?key=${API_KEY}&page_size=40&genres=${genreId}`
    )
    setGames(response.data.results)
  }

  useEffect(() => {
    getGamesByGenre()
  }, [genreId])

  // In the future. Watch for relative link paths
  return (
    <div className="container-grid">
      {games.map((game) => (
        <Link to={`../games/details/${game.id}`} key={game.id}>
          <GameCard
            key={game.id}
            game={game}
            name={game.name}
            image={game.background_image}
            rating={game.rating}
          />
        </Link>
      ))}
    </div>
  )
}

export default ViewGames
