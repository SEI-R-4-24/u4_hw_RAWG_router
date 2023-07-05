import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components'
import { Home, About, ViewGames, GameDetails } from './pages'

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/games/details/:gameId" element={<GameDetails />} />
          <Route path="/games/:genreId" element={<ViewGames />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

// Other component imports here

//...

//...
