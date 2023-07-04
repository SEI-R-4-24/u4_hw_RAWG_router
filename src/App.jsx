import "./styles/App.css"
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import GenreCard from "./components/GenreCard"
import GameCard from "./components/GameCard"
import About from "./pages/About"

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="gamecard" element={<GameCard games={games} />} />
          <Route path="genre" element={<GenreCard />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
