import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Search from './components/Search'
import axios from 'axios'
import GameCard from './components/GameCard'
import GenreCard from './components/GenreCard'
import ViewGames from './pages/ViewGames'
import Home from './pages/Home'
import About from './pages/About'

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/header" element={<Header />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gamecard" element={<GameCard />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
