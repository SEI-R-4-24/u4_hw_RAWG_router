import './styles/App.css'
import Header from './components/Header'
import About from './pages/About'
import GameDetails from './pages/GameDetails'
import Home from './pages/Home'
import ViewGames from './pages/ViewGames'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="games" element={<ViewGames />} />
          <Route path="/games/details/:gameId" element={<GameDetails />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
