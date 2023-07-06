import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import ViewGames from './pages/ViewGames'
import GameDetails from './pages/GameDetails'

const App = () => {
  return (
    <div>
      <div className="nav">
        <Header />
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/view/games/:genreId" element={<ViewGames />} />
          <Route path="/games/details" element={<GameDetails />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
