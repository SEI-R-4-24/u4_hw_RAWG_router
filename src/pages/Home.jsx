import { useState, useEffect } from 'react'
import { Search, GameCard, GenreCard } from '../components/'
import { API_KEY, BASE_PATH } from '../globals'
import axios from 'axios'

const Home = () => {
  const [genres, setGenres] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const getGenres = async () => {
      const response = await axios.get(`${BASE_PATH}genres?key=${API_KEY}`)
      // console.log(response.data.results)
      setGenres(response.data.results)
    }
    getGenres()
  }, [])

  const getSearchResults = async (e) => {
    e.preventDefault()
    const response = await axios.get(
      `${BASE_PATH}games?search=${searchQuery}&key=${API_KEY}`
    )
    setSearchResults(response.data.results)
    toggleSearched(true)
    setSearchQuery('')
  }

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  return (
    <div>
      <Search handleChange={handleChange} onSubmit={getSearchResults} />
      {searchResults.length > 0 ? (
        <div className="search">
          <h2>Search Results</h2>
          <section className="search-results container-grid">
            {searchResults.map((searchResult) => (
              <GameCard key={searchResult.id} game={searchResult} />
            ))}
          </section>
        </div>
      ) : null}

      <div className="genres">
        <h2>Genres</h2>
        <section className="container-grid">
          {genres.map((genre) => (
            <GenreCard genre={genre} key={genre.id} />
          ))}
        </section>
      </div>
    </div>
  )
}

export default Home
