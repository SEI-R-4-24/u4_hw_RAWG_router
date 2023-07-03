import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <header>
      <nav className="nav">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/games">ALL GAMES</Link>
      </nav>
    </header>
  )
}

export default Header
