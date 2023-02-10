// Write your JS code here
import {Link} from 'react-router-dom'

const Header = () => (
  <div>
    <Link to="/">
      <li>Home</li>
    </Link>
    <Link to="/about">
      <li>About</li>
    </Link>
  </div>
)
export default Header
