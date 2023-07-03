import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from '../components/Search'
import GameCard from '../components/GameCard'
import GenreCard from '../components/GenreCard'
import { Link } from 'react-router-dom'

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
      `https://api.rawg.io/api/genres?key=${import.meta.env.VITE_RAWG_KEY}`
    )
    setGenres(response.data.results)
  }

  const getSearchResults = async (e) => {
    e.preventDefault()
    let response = await axios.get(
      `https://api.rawg.io/api/games?key=${
        import.meta.env.VITE_RAWG_KEY
      }&search=${searchQuery}`
    )
    console.log(response)
    setSearchResults(response.data.results)
    toggleSearched(true)
    setSearchQuery('')
  }

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  return (
    <div>
      <Search
        onSubmit={getSearchResults}
        value={searchQuery}
        onChange={handleChange}
      />
      {searched ? (
        <div className="search">
          <h2>Search Results</h2>
          <section className="search-results container-grid">
            {searchResults.map((result) => (
              <Link to={`/games/details/${result.id}`}>
                <GameCard
                  id={result.id}
                  image={result.background_image}
                  name={result.name}
                  rating={result.rating}
                  // onClick={onClick}
                />
              </Link>
            ))}
          </section>
        </div>
      ) : (
        ''
      )}
      <div className="genres">
        <h2>Genres</h2>
        <section className="container-grid">
          {genres.map((genre) => (
            <Link to={`/view/games/${genre.id}`}>
              <GenreCard
                id={genre.id}
                image={genre.image_background}
                name={genre.name}
                gamesCount={genre.games_count}
                // onClick={onClick}
              />
            </Link>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Home
