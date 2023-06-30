import { Link } from "react-router-dom"

const Header = () => {


  return (
    <header>
      <nav className="nav">
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/viewgames"> View Games </Link>
      </nav>
    </header>
  )
}

export default Header
