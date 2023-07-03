import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import GameCard from '../components/GameCard'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ViewGames = (props) => {
  let { genreId } = useParams()

  const [genereId, setGenreId] = useState(null)
  const [games, setGames] = useState([])

  const getGamesByGenre = async () => {
    let response = await axios.get(
      `https://api.rawg.io/api/games?key=${
        import.meta.env.VITE_RAWG_KEY
      }&page_size=40&genres=${parseInt(genreId)}
      `
    )
    console.log(response)
    setGames(response.data.results)
  }

  useEffect(() => {
    getGamesByGenre()
  }, [])

  return (
    <div className="container-grid">
      {games.map((game) => (
        <Link to={`/games/details/${game.id}`}>
          <GameCard
            id={game.id}
            image={game.background_image}
            name={game.name}
            rating={game.rating}
            // onClick={onClick}
          />
        </Link>
      ))}
    </div>
  )
}

export default ViewGames
