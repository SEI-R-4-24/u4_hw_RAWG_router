import { useState, useEffect } from "react"
import Search from "../components/Search"
import axios from "axios"
import GameCard from "../components/GameCard"
import GenreCard from "../components/GenreCard"

const Home = () => {
  const [genres, setGenres] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const getGenres = async () => {
      const response = await axios.get(
        `${BASE_URL}/api/genres?api_key=${import.meta.env.VITE_RAWG_KEY}`
      )
      setGenres(response.data.results)
    }
  }, [])

  useEffect(() => {
    const getSearchResults = async (e) => {
      e.preventDefault()
      const response = await axios.get(
        `${BASE_URL}/api/games?search=${searchQuery}?api_key=${
          import.meta.env.VITE_RAWG_KEY
        }`
      )
      toggleSearched(true)
      setSearchResults(response.data.results)
    }
    setSearchQuery("")
  }, [])

  const handleChange = (event) => {
    setSearchQuery(event.target.valule)
  }
  return (
    <div>
      <Search />
      <div className="search">
        <h2>Search Results</h2>
        <section className="search-results container-grid">
          {" "}
          {/* <GameCard toggleSearched={true} handleChange={handleChange} /> */}
        </section>
      </div>
      <div className="genres">
        <h2>Genres</h2>
        <section className="container-grid"></section>
      </div>
    </div>
  )
}

export default Home
