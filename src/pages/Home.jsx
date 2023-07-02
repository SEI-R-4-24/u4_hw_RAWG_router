import { useState, useEffect } from 'react'
import axios from 'axios'
import { API_KEY } from '../globals'

const Home = (props) => {
  const [genres, setGenres] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const showGenres = async () => {
      const response = await axios.get(
        `https://api.rawg.io/api/genres?key=${API_KEY}`
      )
      console.log(response)
      setGenres(response.data.results)
    }
    showGenres()
  }, [])

  const getSearchResults = async (e) => {
    e.preventDefault()
  }

  const handleChange = (event) => {}
  const onChange = (event) => {}
  const handleSubmit = (event) => {}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={props.value}
          placeholder="Search Games"
          onChange={props.onChange}
        ></input>
        <button type="submit">Search</button>
      </form>

      <div className="search">
        <h2>Search Results</h2>
        <section className="search-results container-grid"></section>
      </div>

      <div className="genres">
        <h2>Genres</h2>
        <section className="container-grid">
          {genres.map((genre) => (
            <div key={genre.name}>
              <h3>{genre.name}</h3>
              {/* <h3>{genre.games_count}</h3> */}
              {/* <h3>{genre.image_background}</h3> */}
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Home
