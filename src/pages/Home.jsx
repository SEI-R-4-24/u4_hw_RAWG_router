import { useEffect, useState } from 'react'
import Search from '../components/Search'
import axios from 'axios'
import GameCard from '../components/GameCard'
import GenreCard from '../components/GenreCard'
import { API_KEY } from '../globals'

const Home = () => {
  const [genres, setGenres] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const getGenres = async () => {
    const response = await axios.get(
      `https://api.rawg.io/api/genres?key=${API_KEY}`
    )
    setGenres(response.data.results)
  }

  const getSearchResults = async (e) => {
    e.preventDefault()
  }

  const handleChange = (event) => {}

  useEffect(() => {
    getGenres()
  }, [])

  return (
    <div>
      <div className="search">
        <h2>Search Results</h2>
        <section className="search-results container-grid"></section>
      </div>
      <div className="genres">
        <h2>Genres</h2>
        <section className="container-grid">
          {genres.map((genre) => (
            <div key={genre.id} className="card">
              <div className="img-wrapper">
                <img src={genre.image_background} alt={genre.name} />
              </div>
              <div className="info-wrapper flex-row">
                <h3>{genre.name}</h3>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Home
