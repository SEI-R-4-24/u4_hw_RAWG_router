import { Routes, Route } from 'react-router-dom'
import GameDetails from './pages/GameDetails'
import Header from './components/Header'
import ViewGames from './pages/ViewGames'
import About from './pages/About'
import Home from './pages/Home'
import './styles/App.css'

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games/details/:gameId" element={<GameDetails />} />
          <Route path="/games" element={<ViewGames />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
