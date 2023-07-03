import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import RAWG_KEY from '../globals'
import { NavLink } from 'react-router-dom'

const ViewGames = (props) => {
  let { genreId } = useParams()
  const [genereId, setGenreId] = useState(null)
  const [games, setGames] = useState([])

  const getGamesByGenre = async () => {
    const response = await axios.get(
      `https://api.rawg.io/api/games?page_size=40&genres=${genreId}&key=${RAWG_KEY}`
    )
    setGames(response.data.results)
  }

  useEffect(() => {
    getGamesByGenre()
  }, [genreId])

  return (
    <div className="container-grid">
      {games.map((game) => (
        <NavLink to={`/games/${game.id}`} key={game.id}>
          <div className="card">
            <img src={game.background_image} alt={game.name} />
            <p>{game.name}</p>
          </div>
        </NavLink>
      ))}
    </div>
  )
}

export default ViewGames
