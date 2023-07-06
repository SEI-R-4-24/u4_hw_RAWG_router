import { useState } from 'react'
import axios from 'axios'
import { Search } from 'react-router-dom'
import GameCard from '../components/GameCard'
import GenreCard from '../components/GenreCard'


const API_KEY = import.meta.env.VITE_RAWG_KEY

const Home = () => {
  const [genres, setGenres] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    getGenres()
  }, []
  )

  const getGenres = async () => {
    let genreResults = await axios.get('https://api.rawg.io/api/genres?key=${API_KEY}')
    console.log(genreResults.data.results)
    setGenres(genreResults.data.results)
  }

  const getSearchResults = async () => {
    let genreResults = await axios.get('https://api.rawg.io/api/genres?key=${API_KEY}&search=${searchQuery}')
    console.log(results)
    setSearchResults(results.data.results)
  }
  
  const handleChange = (evt) => {
    setSearchQuery(evt.target.value)
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
              searchResults.map((searchResults) => {
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
        <div>
          {
            genres.map((genre) => {
              return (<GenreCard
                genre={genre}
                />)
            })
          }
        </div>
        </section>
      </div>
    </div>
  )
}

export default Home
