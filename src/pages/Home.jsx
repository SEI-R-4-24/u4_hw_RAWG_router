import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from '../components/Search'
import GameCard from '../components/GameCard'
import GenreCard from '../components/GenreCard'
import { API_KEY } from '../globals'
import { Link } from 'react-router-dom'

const Home = () => {
  const [genres, setGenres] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const getGenres = async () => {
      let response = await axios.get(
        `https://api.rawg.io/api/genres?key=${API_KEY}`
      )
      setGenres(response.data.results)
    }
    getGenres()
  }, [])

  const getSearchResults = async (e) => {
    e.preventDefault()
    let response = await axios.get(
      `https://api.rawg.io/api/games?search=${searchQuery}&key=${API_KEY}`
    )
    setSearchResults(response.data.results)
    toggleSearched(true)
  }

  const handleChange = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div>
      <div className="search">
        <Search
          value={searchQuery}
          onSubmit={getSearchResults}
          onChange={handleChange}
        />
        <h2>Search Results</h2>
        <section className="search-results container-grid">
          {searched &&
            searchResults.map((searchResult) => (
              <Link to={`/games/details/${searched.id}`} key={searched.id}>
                <GameCard
                  key={searchResult.id}
                  onClick={setGenres}
                  image={searchResult.background_image}
                  name={searchResult.name}
                  rating={searchResult.rating}
                />
              </Link>
            ))}
        </section>
      </div>
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
