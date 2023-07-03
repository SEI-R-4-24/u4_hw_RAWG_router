import { NavLink } from 'react-router-dom'
const Nav = () => {
  return (
    <header>
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Nav
