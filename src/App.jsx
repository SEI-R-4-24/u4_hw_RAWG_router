import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import GameDetails from './pages/GameDetails'
import Header from './components/Header'
import ViewGames from './pages/ViewGames'
import About from './pages/About'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<ViewGames />} />
          <Route path="/about" element={<About />} />
          <Route path="/games/details/:gameId" element={<GameDetails />} />
        </Routes>
      </main>
    </div>
  )
}

export default App