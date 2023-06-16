import { useState } from 'react'

const Home = () => {
  const [genres, setGenres] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const getGenres = async () => {

  }

  const getSearchResults = async (e) => {
    e.preventDefault()
  }

  const handleChange = (event) => {

  }

  return (
    <div>
      <div className="search">
        <h2>Search Results</h2>
        <section className="search-results container-grid">

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
