import { useState, useEffect } from 'react'
import { BASE_URL, API_KEY} from '../global'
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
    const getGenres = async () => {
      const response = await axios.get(`${BASE_URL}/genres?key=${API_KEY}`)
      setGenres(response.data.results)
    }
    getGenres()
  }, [])

  const getSearchResults = async (e) => {
    e.preventDefault()
    const response = await axios.get(
      `${BASE_URL}/games?key=${API_KEY}&search=${searchQuery}`
    )
    setSearchResults(response.data.results)
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
        {searched && <h2>Search Results</h2>}
        <section className="search-results container-grid">
          {searched && searchResults.map((result) => (
            <Link 
            to={`games/${result.id}`}
            key={result.id}
            >
              <GameCard 
              result={result}
              name={result.name}
              released={result.released}
              image={result.background_image}
              />
            </Link>
          ))}
        </section>
      </div>
      <div className="genres">
        <h2>Genres</h2>
        <section className="container-grid">
          {genres.map((genre) => (
            <div>
              <GenreCard 
              key ={genre.id}
              image={genre.image_background}
              name={genre.name}
              />
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Home
