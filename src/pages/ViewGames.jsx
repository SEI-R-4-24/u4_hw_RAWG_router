import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { API_KEY, BASE_PATH } from '../globals'
import { GameCard } from '../components'

const ViewGames = (props) => {
  // const [genreId, setGenreId] = useState(null)
  let { genreId } = useParams()
  // console.log(genreId)
  const [games, setGames] = useState([])

  useEffect(() => {
    const getGamesByGenre = async () => {
      const response = await axios.get(
        `${BASE_PATH}games?page_size=40&genres=${genreId}&key=${API_KEY}`
      )
      setGames(response.data.results)
    }
    getGamesByGenre()
  }, [])

  return (
    <div className="container-grid">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  )
}

export default ViewGames
