import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/" className="Home">
          Home
        </Link>
        <Link to="/about" className="About">
          About
        </Link>
      </nav>
    </header>
  )
}

export default Header
