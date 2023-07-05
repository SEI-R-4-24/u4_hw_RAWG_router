import { useState, useEffect } from 'react'
import axios from 'axios'
import { API_KEY } from '../globals'
import Search from '../components/Search'
import GenreCard from '../components/GenreCard'
import GameCard from '../components/GameCard'

const Home = () => {
  const [genres, setGenres] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const getGenres = async () => {
      const response = await axios.get(
        `https://api.rawg.io/api/genres?key=${API_KEY}`
      )
      setGenres(response.data.results)
    }
    getGenres()
  }, [])

  const getSearchResults = async (e) => {
    const response = await axios.get(
      `https://api.rawg.io/api/games?key=${API_KEY}&search=${searchQuery}`
    )
    setSearchResults(response.data.results)
  }
  // const onClick = (e) => {
  //   e.preventDefault()
  //   toggleSearched()
  // }
  const handleChange = (e) => {
    e.preventDefault()
    getSearchResults()
  }
  const onChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const getGame = (gameId) => {
    toggleSearched(gameId)
  }

  return (
    <div>
      <div className="search">
        <Search
          handleChange={handleChange}
          onChange={onChange}
          searchQuery={searchQuery}
        />
        <h2>Search Results</h2>
        <GameCard
          searchResults={searchResults}
          getGame={getGame}
          searched={searched}
        />
      </div>

      <div className="genres">
        <h2>Genres</h2>
        <GenreCard genres={genres} />
      </div>
    </div>
  )
}

export default Home
