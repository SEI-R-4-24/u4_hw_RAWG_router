import './styles/App.css'
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import GameDetails from './pages/GameDetails'
import ViewGames from './pages/ViewGames'

const App = () => {

  return (
    <div>
    <Header />
    <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="games/details/:gameId" element={<GameDetails />} />
          <Route path="view/games/:genreId" element={<ViewGames />} />
        </Routes>
    </main>
  </div>
  )
}

export default App
