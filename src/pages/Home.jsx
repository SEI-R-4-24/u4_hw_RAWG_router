import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../components/Globals'
import { Link } from 'react-router-dom'
import GenreCard from '../components/GenreCard'
import Search from '../components/Search'
import SearchResultsSection from '../components/SearchResultsSection'

const Home = () => {
  const [genres, setGenres] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
  const getGenres = async () => {
    const genresResponse = await axios.get(`${BASE_URL}genres?key=${import.meta.env.VITE_RAWG_KEY}`)
    setGenres(genresResponse.data.results)
  }
  getGenres()
}, [])

  const getSearchResults = async (e) => {
    e.preventDefault()
    const searchResponse = await axios.get(`${BASE_URL}games?key=${import.meta.env.VITE_RAWG_KEY}&search=${searchQuery}`)
    setSearchResults(searchResponse.data.results)
    toggleSearched(true)
    setSearchQuery('')
  }

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const onClick = (event) => {

  }

  let searchResultsSection

  if (searched) {
    if (searchResults.length === 0) {
    searchResultsSection = <div className="search-message"><h2>No games matching search criteria found.</h2></div>
    } else {
    searchResultsSection = <SearchResultsSection searchResults={searchResults} />
    }
  }

  return (
    <div>
      <div className="search">
        <Search onSubmit={getSearchResults} onChange={handleChange} value={searchQuery} />
        {searchResultsSection}
      </div>
      <div className="genres">
        <h2>Genres</h2>
        <section className="container-grid">
          {genres.map((genre)=>(
            <div key={genre.id}>
              <Link to={`/view/games/${genre.id}`}>
                <GenreCard image={genre.image_background} name={genre.name} gamesCount={genre.games_count} onClick={onClick} />
              </Link>
            </div>
        ))}
        </section>
      </div>
    </div>
  )
}

export default Home
