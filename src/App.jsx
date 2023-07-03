import './styles/App.css'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import GameDetails from './pages/GameDetails'
import ViewGames from './pages/ViewGames'

const App = () => {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/games" element={<ViewGames />} />
          <Route path="/games/:gameId" element={<GameDetails />} />
          <Route path="/genre/:genreId" element={<ViewGames />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
