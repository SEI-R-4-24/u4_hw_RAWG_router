import './styles/App.css'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL, API_KEY } from './globals'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import ViewGames from './pages/ViewGames'

const App = () => {
  const [search, setSearch] = useState({
    name: ''
  })
  const [games, SetGames] = useState('')

  // useEffect(() => {
  //   const getGames = async () => {
  //     const response = await axios.get(
  //       `https://api.rawg.io/api/genres?key=${API_KEY}`
  //     )
  //     console.log(response)
  //     setSearch(response.data.results)
  //   }
  //   getGames()
  // }, [])

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/view/games/:genreId"
            element={<ViewGames games={games} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
