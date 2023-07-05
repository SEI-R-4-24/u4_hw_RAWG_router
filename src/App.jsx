import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import ViewGames from './pages/ViewGames'

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/games" element={<ViewGames />} /> */}
          {/* <Route path="" element={} /> */}
        </Routes>
      </main>
    </div>
  )
}

export default App
