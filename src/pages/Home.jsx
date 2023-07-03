import { useState } from 'react'
import axios from 'axios'
import Search from '../components/Search'
import GameCard from '../components/GameCard'


const API_KEY = import.meta.env.VITE_RAWG_KEY

const Home = () => {
  const [genres, setGenres] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const getGenres = async () => {

  }

  const getSearchResults = async (e) => {
    e.preventDefault()
    let results = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${searchQuery}`)
    console.log(results)
    setSearchResults(results.data.results)
  }

  const handleChange = (e) => {
    // e.preventDefault()
    setSearchQuery(e.target.value)
  }


  return (
    <div>
      <div className="search">
        <Search 
        onSubmit={getSearchResults}
        onChange={handleChange}
        value={searchQuery}
        />
        <h2>Search Results</h2>
        <section className="search-results container-grid">
          <div>
            {
              searchResults.map((searchResult) => {
                  return (<GameCard 
                    game={searchResult}
                  />)
              })
            }
          </div>
        </section>
      </div>
      <div className="genres">
        <h2>Genres</h2>
        <section className="container-grid">

        </section>
      </div>
    </div>
  )
}

export default Home
