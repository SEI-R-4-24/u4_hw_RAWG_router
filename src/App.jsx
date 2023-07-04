import './styles/App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import GameDetails from './pages/GameDetails'
import ViewGames from './pages/ViewGames'


const App = () => {
  return (
    <div className='App'>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/games/:gameId" element={<GameDetails/>} />
        <Route path="/games" element={<ViewGames/>} />
      </Routes>
    </main>
  </div>
  )
}
export default App
