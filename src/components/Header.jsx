import { Link } from "react-router-dom"

const Header = () => {

  return (
    <header>
      <nav>
      <h1 className="nav-header-left">STEAM</h1>
      <div >
      <img className='header-img' src ='https://img.icons8.com/?size=512&id=pOa8st0SGd5C&format=png'/>
      </div>
        <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About Us</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
