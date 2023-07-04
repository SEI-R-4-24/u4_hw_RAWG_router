import { useEffect, useState } from 'react'
import axios from 'axios'
import GameCard from '../components/GameCard'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../globals'
import { Link } from 'react-router-dom'

const ViewGames = (props) => {
  let { genreId } = useParams()
  let genreObj
  const [games, setGames] = useState([])
  const [genreName, setGenreName] = useState([])

  const getGamesByGenre = async () => {
    const response = await axios.get(
      `${BASE_URL}/games?page_size=40&genres=${parseInt(genreId)}&key=${
        import.meta.env.VITE_RAWG_KEY
      }`
    )
    setGames(response.data.results)
    console.log(response.data.results)
    genreObj = response.data.results[0].genres.find(
      (obj) => obj.id === parseInt(genreId)
    )
    console.log(genreObj)
    setGenreName(genreObj.name)
    console.log(genreName)
  }

  useEffect(() => {
    getGamesByGenre()
  }, [genreId])

  return (
    <div>
      <div className="genres">
        <h2>{genreName}</h2>
      </div>
      <div className="container-grid">
        {games.map((game) => (
          <Link key={game.id} to={`/games/details/${game.id}`}>
            <GameCard
              image={game.background_image}
              name={game.name}
              rating={game.rating}
              key={game.id}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ViewGames
