import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Search from '../components/Search'
import GameCard from '../components/GameCard'
import GenreCard from '../components/GenreCard'
const API_KEY = import.meta.env.VITE_RAWG_KEY

const Home = () => {
  const [genres, setGenres] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')


  useEffect(() => {
    const getGenres = async() => {
      const response = await axios.get(
        `https://api.rawg.io/api/genres?key=${API_KEY}`
      )
      setGenres(response.data.results)
    }
    getGenres()
  }, [])

  const getSearchResults = async (e) => {
    e.preventDefault()
    const response = await axios.get(
      `https://api.rawg.io/api/games?search=${searchQuery}&key=${API_KEY}`
    )
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
          value={searchQuery}
          onChange={handleChange}
          onSubmit={getSearchResults}
        />
        {searched && (
          <div>
            <h1>Search Results</h1>
            <section className="search-results container-grid">
              {searchResults.map((result) => (
                <Link to={`/games/details/${result.id}`} key={result.id}>
                  <GameCard
                    {...result}
                    image={result.background_image}
                  />
                </Link>
              ))}
            </section>
          </div>
        )}
      </div>
      <div className="genres">
        <h1>Genres</h1>
        <section className="container-grid">
          {genres.map((genre) => (
            <Link to={`/view/games/${genre.id}`} key={genre.id}>
              <GenreCard
                name={genre.name}
                image={genre.image_background}
                {...genre}
              />
            </Link>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Home
