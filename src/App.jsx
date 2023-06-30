import './styles/App.css'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL, API_KEY } from './globals'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import ViewGames from './pages/ViewGames'
import Search from './components/Search'
import GenreCard from './components/GenreCard'
import GameCard from './components/GameCard'

const App = () => {
  const [search, setSearch] = useState({
    name: ''
  })

  useEffect(() => {
    const getGames = async () => {
      const results = await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}&search=`
      )
      console.log(results)
      setSearch(results)
    }
    getGames()
  }, [])

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="" element={<Search search={search} />} />
          <Route path="" element={<ViewGames />} />
          <Route path="" element={<GenreCard />} />
          <Route path="" element={<GameCard />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
