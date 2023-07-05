import { useEffect, useState } from 'react'
import Search from '../components/Search'
import axios from 'axios'
import GameCard from '../components/GameCard'
import GenreCard from '../components/GenreCard'
import { API_KEY, BASE_URL } from '../globals'
import { Link } from 'react-router-dom'

const Home = () => {
  const [genres, setGenres] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const getGenres = async () => {
    const response = await axios.get(`${BASE_URL}/genres?key=${API_KEY}`)
    setGenres(response.data.results)
  }

  const getSearchResults = async (evt) => {
    evt.preventDefault()
    const response = await axios.get(
      `${BASE_URL}/games?key=${API_KEY}&search=${searchQuery}`
    )
    setSearchResults(response.data.results)
    toggleSearched(true)
  }

  const handleChange = (evt) => {
    setSearchQuery(evt.target.value)
  }

  useEffect(() => {
    console.log(searchResults)
    getGenres()
  }, [])

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
            searchResults.map((result) => (
              <Link to={`games/details/${result.id}`} key={result.id}>
                <GameCard
                  key={result.id}
                  game={result}
                  name={result.name}
                  image={result.background_image}
                  rating={result.rating}
                />
              </Link>
            ))}
        </section>
      </div>
      <div className="genres">
        <h2>Genres</h2>
        <section className="container-grid">
          {genres.map((genre) => (
            <Link to={`view/games/${genre.id}`} key={genre.id}>
              <GenreCard
                key={genre.id}
                name={genre.name}
                image={genre.image_background}
                gamesCount={genre.games_count}
              />
            </Link>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Home
