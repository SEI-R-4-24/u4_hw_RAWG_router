import { useState } from 'react'

const ViewGames = (props) => {
  const [genreId, setGenreId] = useState(null)
  const [games, setGames] = useState([])

  const getGamesByGenre = async () => {}

  return <div className="container-grid"></div>
}

export default ViewGames
