import { useState, useEffect } from 'react'
import Search from '../components/Search'
import GameCard from '../components/GameCard'
import GenreCard from '../components/GenreCard'
import axios from 'axios'
import { BASE_URL } from '../globals'

const Home = () => {
  const [genres, setGenres] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    getGenres()
  }, [])

  const getGenres = async () => {
    let response = await axios.get(
      `${BASE_URL}/genres?key=${import.meta.env.VITE_RAWG_KEY}`
    )
    setGenres(response.data.results)
  }

  const getSearchResults = async (e) => {
    e.preventDefault()
    toggleSearched(true)
    let response = await axios.get(
      `${BASE_URL}/games?key=${
        import.meta.env.VITE_RAWG_KEY
      }&search=${searchQuery}`
    )
    setSearchResults(response.data.results)
    setSearchQuery('')
  }

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  return (
    <div>
      <Search
        value={searchQuery}
        onClick={getSearchResults}
        onChange={handleChange}
      />
      {searched ? (
        <div className="search">
          <h2>Search Results</h2>
          <section className="search-results container-grid">
            {searchResults.map((result) => (
              <GameCard result={result} />
            ))}
          </section>
        </div>
      ) : null}
      <div className="genres">
        <h2>Genres</h2>
        <section className="container-grid">
        {genres.map((genre) => (
  <GenreCard key={genre.id} genre={genre} />
))}
        </section>
      </div>
    </div>
  )
}


export default Home
