import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../components/Globals'
import GameCard from '../components/GameCard'

const ViewGames = (props) => {
  let { genreId } = useParams()
  const [genreIdx, setGenreId] = useState(genreId)
  const [games, setGames] = useState([])

  useEffect(() => {
    const getGamesByGenre = async () => {
      const genresResponse = await axios.get(`${BASE_URL}/games?key=${import.meta.env.VITE_RAWG_KEY}&page_size=40&genres=${genreIdx}`)
      setGames(genresResponse.data.results)
    }

    getGamesByGenre()
  }, [])

  return (
    <div className="container-grid">
      {games.map((game) => (
        <div key={game.id}>
          <Link to={`/games/details/${game.id}`}>
            <GameCard name={game.name} image={game.background_image} rating={game.rating} />
          </Link>
        </div>
      ))}

    </div>
  )
}

export default ViewGames
