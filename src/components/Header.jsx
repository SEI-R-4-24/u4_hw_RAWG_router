import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className="header">
      <Link to="/">Home</Link> &nbsp;
      <Link to="/about">About</Link>
    </header>
  )
}

export default Header
