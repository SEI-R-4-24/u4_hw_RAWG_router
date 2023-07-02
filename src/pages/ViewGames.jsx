import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL, API_KEY } from '../globals'

const ViewGames = (props) => {
  const [genreId, setGenreId] = useState()

  // useEffect(() => {
  //   const getGamesByGenre = async () => {
  //     const response = await axios.get(`${BASE_URL}/genres?api_key=${API_KEY}`)
  //     console.log(response.data.results)
  //     setGenreId(response.data.results)
  //   }
  //   getGamesByGenre()
  // })

  return
  // <div className="container-grid">
  //   {props.genres.map((genre) => (
  //     <div className="genres" key={genre.id}>
  //       <h1>{genre.name}</h1>
  //     </div>
  //   ))}
  // </div>
}

export default ViewGames
