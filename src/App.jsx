import "./styles/App.css"
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import GameDetails from "./pages/GameDetails"
import GameCard from "./components/GameCard"
import About from "./pages/About"

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="games" element={<GameCard />} />
          <Route path="/games/details/:gameId" element={<GameDetails />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
