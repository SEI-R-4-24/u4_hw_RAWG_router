import { useEffect, useState } from 'react'
import axios from 'axios'
import Search from '../components/Search'
import GameCard from '../components/GameCard'
import GenreCard from '../components/GenreCard'
import { API_KEY } from '../globals'

const Home = () => {
  const [genres, setGenres] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, setSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    getGenres()
  }, [])

  const getGenres = async () => {
    const result = await axios.get(
      `https://api.rawg.io/api/genres?key=${API_KEY}`
    )
    setGenres(result.data.results)
  }

  const getSearchResults = async (event) => {
    event.preventDefault()
    const result = await axios.get(
      `https://api.rawg.io/api/games?search=${searchQuery}&key=${API_KEY}`
    )
    setSearchResults(result.data.results)
    setSearchQuery('')
    setSearched(true)
  }

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  return (
    <div>
      <div className="search">
        <Search
          value={searchQuery}
          onChange={handleChange}
          onSubmit={getSearchResults}
        />
        <h2>Search Results</h2>
        <section className="search-results container-grid">
          {searched &&
            searchResults.map((searchResult) => (
              <GameCard
                key={searchResult.id}
                onClick={getGenres}
                image={searchResult.background_image}
                name={searchResult.name}
                rating={searchResult.rating}
              />
            ))}
        </section>
      </div>
      <div className="genres">
        <h2>Genres</h2>
        <section className="container-grid">
          {genres.map((genre) => (
            <GenreCard
              key={genre.id}
              name={genre.name}
              image={genre.image_background}
              gamesCount={genre.games_count}
              onClick={getGenres}
            />
          ))}
        </section>
      </div>
    </div>
  )
}

export default Home
