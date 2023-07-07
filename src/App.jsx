import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import GameDetails from './pages/GameDetails'
import ViewGames from './pages/ViewGames'
import './styles/App.css'

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="game/Details/:gameId" element={<GameDetails />} />
          <Route path="games" element={<ViewGames />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
