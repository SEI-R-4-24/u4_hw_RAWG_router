import { useState } from 'react'
import axios from 'axios'
import GameCard from '../components/GameCard'

const ViewGames = (props) => {
  const [genreId, setGenreId] = useState(null)
  const [games, setGames] = useState([])

  const getGamesByGenre = () => {
    const fetchData = async () => {
      const respGames = await axios.get(
        `https://api.rawg.io/api/games?page_size=40&genres=${genreId}`
      )
      setGenreId(respGames.data.results)
    }
    fetchData()
  }

  return <div className="container-grid">{getGamesByGenre}</div>
}

export default ViewGames
