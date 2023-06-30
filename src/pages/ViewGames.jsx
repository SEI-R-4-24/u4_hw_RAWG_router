import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL, API_KEY } from '../globals'

const ViewGames = (props) => {
  const [genreId, setGenreId] = useState(null)
  // const [games, setGames] = useState([])

  useEffect(() => {
    const getGamesByGenre = async () => {
      const response = await axios.get(`${BASE_URL}/genres?api_key=${API_KEY}`)

      console.log(response)
      setGenreId(response)
    }
    getGamesByGenre()
  })

  return <div className="container-grid"></div>
}

export default ViewGames
