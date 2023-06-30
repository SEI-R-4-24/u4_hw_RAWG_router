import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { API_KEY } from '../global'
import GameCard from '../components/GameCard'

const ViewGames = (props) => {
  const [games, setGames] = useState([])

  let { id } = useParams()

  const getGamesByGenre = async () => {
    let response = await axios.get(
      `https://api.rawg.io/api/games?key=${API_KEY}&page_size=40&genres=${id}`
    )
    setGames(response.data.results)
  }

  useEffect(() => {
    getGamesByGenre()
  }, [id])

  return (
    <div className="container-grid">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  )
}

export default ViewGames
