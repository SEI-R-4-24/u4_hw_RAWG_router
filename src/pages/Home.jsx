import { useEffect, useState } from 'react'
import Search from '../components/Search'
import axios from 'axios'
import GameCard from '../components/GameCard'
import GenreCard from '../components/GenreCard'
import { Link } from 'react-router-dom'

const Home = () => {
  const [genres, setGenres] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, setSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const respGenre = await axios.get(
        'https://api.rawg.io/api/genres?key=4e74bbf369144419ba52ca5cb6901271'
      )

      setGenres(respGenre.data.results)
    }
    fetchData()
  }, [])

  const getGenres = async () => {
    setGenres(genres)
  }

  const getSearchResults = async (e) => {
    e.preventDefault()
    const respSearch = await axios.get(
      `https://api.rawg.io/api/games?key=4e74bbf369144419ba52ca5cb6901271&search=${searchQuery}`
    )
    setSearchResults(respSearch.data.results)
    setSearched(true)
    setSearchQuery('')
  }

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  return (
    <div>
      <div className="search">
        <Search
          onSubmit={getSearchResults}
          value={searchQuery}
          onChange={handleChange}
        />
        {searched && (
          <div>
            <h2>Search Results</h2>
            <section className="search-results container-grid">
              {searchResults.map((game) => (
                <Link key={game.id} to={`/view/games/${game.id}`}>
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
      <h2>Genres</h2>
      <div className="genres">
        {genres.map((genre) => (
          <Link to={`/view/games/${genre.id}`} key={genre.id}>
            <GenreCard
              name={genre.name}
              image={genre.image_background}
              gameCount={genre.game_count}
            />
          </Link>
        ))}
        <section className="container-grid"></section>
      </div>
    </div>
  )
}

export default Home
