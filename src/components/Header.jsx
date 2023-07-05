import { Link } from 'react-router-dom'
import Home from '../pages/Home'

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  )
}

export default Header
