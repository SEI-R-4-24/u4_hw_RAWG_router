import './styles/App.css'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import ViewGames from './pages/ViewGames'
import Search from './components/Search'

const App = () => {
  const [search, setSearch] = useState({
    name: ''
  })
  const [games, SetGames] = useState('')

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
