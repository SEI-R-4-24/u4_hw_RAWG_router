import { useState, useEffect } from 'react'
import Search from '../components/Search'
import axios from 'axios'
import GameCard from '../components/GameCard'
import GenreCard from '../components/GenreCard'
import RAWG_KEY from '../globals'
import { Link } from 'react-router-dom'

const Home = () => {
  const [genres, setGenres] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, setSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const getGenres = async () => {
    const response = await axios.get(
      `https://api.rawg.io/api/genres?key=${RAWG_KEY}`
    )
    setGenres(response.data.results)
  }

  const getSearchResults = async (e) => {
    e.preventDefault()
    const response = await axios.get(
      `https://api.rawg.io/api/games?key=${RAWG_KEY}&search=${searchQuery}`
    )
    setSearchResults(response.data.results)
    setSearchQuery('')
    setSearched(true)
  }

  const handleChange = (e) => {
    setSearchQuery(e.target.value)
  }

  useEffect(() => {
    getGenres()
  }, [])

  return (
    <div>
      <div className="search">
        <Search
          getSearchResults={getSearchResults}
          handleChange={handleChange}
          inputVal={searchQuery}
        />
        {searched ? <h2>Search Results</h2> : ''}
        <section className="search-results container-grid">
          {searchResults.map((result) => (
            <Link to={`games/${result.id}`} key={result.id}>
              <div className="card">
                <img src={result.background_image} />
                <p>{result.name}</p>
              </div>
            </Link>
          ))}
        </section>
      </div>
      <div className="genres">
        <h2>Genres</h2>
        <section className="container-grid">
          {genres.map((genre) => (
            <Link to={`genre/${genre.id}`} key={genre.name}>
              <div className="card">
                <img src={genre.image_background} alt="" />
                {genre.name}
              </div>
            </Link>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Home
