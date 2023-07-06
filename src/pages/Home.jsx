import { useState, useEffect } from 'react'
import Search from '../components/Search'
import axios from 'axios'
import GameCard from '../components/GameCard'
import GenreCard from '../components/GenreCard'
import { BASE_URL, API_KEY } from '../globals'

const Home = () => {
  const [genres, setGenres] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  const getGenres = async () => {
    const response = await axios.get(
      `https://api.rawg.io/api/genres?key=${API_KEY}`
    )
    console.log(response.data.results)
    setGenres(response.data.results)
  }
  useEffect(() => {
    getGenres()
  }, [])

  const getSearchResults = async (e) => {
    e.preventDefault()
    const response = await axios.get(
      `${BASE_URL}/api/games?key=${API_KEY}&search=${searchQuery}`
    )
    setSearchResults(response.data.results)
    toggleSearched(true)
    console.log(response)
  }

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  return (
    <div>
      <div className="search">
        <Search
          onSubmit={getSearchResults}
          onChange={handleChange}
          value={searchQuery}
        />
        <h2>Search Results</h2>
        <section className="search-results container-grid">
          {searched &&
            searchResults.map((search) => (
              <GameCard
                name={search.name}
                rating={search.rating}
                image={search.background_image}
              />
            ))}
        </section>
      </div>
      <div className="genres">
        <h2>Genres</h2>
        <section className="container-grid">
          {genres.map((genre) => (
            <GenreCard
              image={genre.image_background}
              name={genre.name}
              gamesCount={genre.gamesCount}
            />
          ))}
        </section>
      </div>
    </div>
  )
}

export default Home
