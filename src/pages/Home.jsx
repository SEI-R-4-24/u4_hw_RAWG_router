import { useEffect, useState } from 'react'
import axios from 'axios'
import Search from '../components/Search'
import { BASE_URL } from '../globals'
import GenreCard from '../components/GenreCard'
import { Link } from 'react-router-dom'
import GameCard from '../components/GameCard'

const Home = () => {
  const [genres, setGenres] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const getGenres = async () => {
    const response = await axios.get(
      `${BASE_URL}/genres?key=${import.meta.env.VITE_RAWG_KEY}`
    )
    setGenres(response.data.results)
  }

  useEffect(() => {
    getGenres()
  }, [])

  const getSearchResults = async () => {
    const response = await axios.get(
      `${BASE_URL}/games?search=${searchQuery}&key=${
        import.meta.env.VITE_RAWG_KEY
      }`
    )
    setSearchResults(response.data.results)
    console.log(response.data.results)
    toggleSearched(true)
    setSearchQuery('')
  }

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const search = (e) => {
    e.preventDefault()
    getSearchResults()
  }

  return (
    <div>
      <div className="search">
        <Search
          search={search}
          handleChange={handleChange}
          value={searchQuery}
        />
        {searched && (
          <div>
            <h2>Search Results</h2>
            <section className="search-results container-grid">
              {searchResults.map((game) => (
                <Link key={game.id} to={`/games/details/${game.id}`}>
                  <GameCard
                    image={game.background_image}
                    name={game.name}
                    rating={game.rating}
                  />
                </Link>
              ))}
            </section>
          </div>
        )}
      </div>
      <div className="genres">
        <h2>Genres</h2>
        <section className="container-grid">
          {genres.map((genre) => (
            <Link key={genre.id} to={`view/games/${genre.id}`}>
              <GenreCard
                image={genre.image_background}
                name={genre.name}
                gamesCount={genre.games_count}
                key={genre.id}
              />
            </Link>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Home
