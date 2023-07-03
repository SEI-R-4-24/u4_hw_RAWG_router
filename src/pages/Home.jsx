import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../components/Globals'
import { Link } from 'react-router-dom'
import GameCard from '../components/GameCard'
import GenreCard from '../components/GenreCard'
import Search from '../components/Search'

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

  }

  const handleChange = (event) => {

  }

  const genreOnClick = (event) => {
    alert(event.target)

  }

  return (
    <div>
      <div className="search">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <h2>Search Results</h2>
        <section className="search-results container-grid">

        </section>
      </div>
      <div className="genres">
        <h2>Genres</h2>
        <section className="container-grid">
          {genres.map((genre, idx)=>(
            <GenreCard cardId={idx} image={genre.image_background} name={genre.name} gamesCount={genre.games_count} />
         ))}
        </section>
      </div>
    </div>
  )
}

export default Home
