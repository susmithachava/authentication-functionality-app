import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <ul className="nav">
      <Link to="/">
        <li className="nav-link">Home</li>
      </Link>
      <Link to="/about">
        <li className="nav-link">About</li>
      </Link>
    </ul>
  </nav>
)
export default Header
