import { useState, useEffect } from 'react'
import axios from 'axios'
import { API_KEY } from '../globals'
import Search from '../components/Search'

const Home = (props) => {
  const [genres, setGenres] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const getGenres = async () => {
      const response = await axios.get(
        `https://api.rawg.io/api/genres?key=${API_KEY}`
      )

      setGenres(response.data.results)
    }
    getGenres()
  }, [])

  const getSearch = async (e) => {
    const response = await axios.get(
      `https://api.rawg.io/api/games?key=${API_KEY}&search=${searchQuery}`
    )
    console.log(response.data.results)
    setSearchResults(response.data.results)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    getSearch()
  }
  const onChange = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div>
      <div className="search">
        <Search
          handleSubmit={handleSubmit}
          onChange={onChange}
          searchQuery={searchQuery}
        />
        <h2>Search Results</h2>
        <section className="search-results container-grid">
          {searchResults.map((game) => (
            <div className="card game-card">
              <div className="img-wrapper">
                <img src={game.background_image} alt="Game" />
              </div>
            </div>
          ))}
        </section>
      </div>

      <div className="genres">
        <h2>Genres</h2>
        <section className="container-grid">
          {genres.map((genre) => (
            <div className="card">
              <div className="img-wrapper" key={genre.id}>
                <img src={genre.image_background} alt="Genre" />
              </div>
              <div className="info-wrapper flex-row">
                <h3>{genre.name}</h3>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Home
