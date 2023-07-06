import { useState, useEffect } from 'react'
import { BASE_URL, API_KEY } from '../globals'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Search from '../components/Search'
import GameCard from '../components/GameCard'
import GenreCard from '../components/GenreCard'

const Home = () => {
  const [genres, setGenres] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const getGenres = async () => {
    const response = await axios.get(`${BASE_URL}/api/genres?key=${API_KEY}`)
    console.log(response)
    setGenres(response.data.results)
  }
  useEffect(() => {
    getGenres()
  }, [])

  const getSearchResults = async (e) => {
    e.preventDefault()
    const response = await axios.get(
      `${BASE_URL}/games?key=${API_KEY}&search=${searchQuery}`
    )
    console.log(response)
    setSearchResults(response.data.results)
    setSearchQuery('')
    toggleSearched(true)
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
              <Link to={`/games/details/${search.id}`} key={search.id}>
                <GameCard
                  name={search.name}
                  rating={search.rating}
                  image={search.background_image}
                />
              </Link>
            ))}
        </section>
      </div>
      <div className="genres">
        <h2>Genres</h2>
        <section className="container-grid">
          {genres.map((genre) => (
            <GenreCard
              key={genre.id}
              image={genre.image_background}
              name={genre.name}
            />
          ))}
        </section>
      </div>
    </div>
  )
}

export default Home
