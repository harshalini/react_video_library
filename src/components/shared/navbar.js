import { NavLink } from "react-router-dom"
import { useAuth } from "../../contexts/allContext"
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Navbar = () => {
  const { authUser, logOutHandler } = useAuth();
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/" className="home-link">vivir</Link>
      </div>
      <div className="search-input">
        <input type="text" placeholder="Watch something" className="search-bar"></input>
      </div>
      <nav>
        <ul>
          <li>
            {authUser.isUserLoggedIn ? <button className="logout-btn"
              onClick={() => {
                logOutHandler,
                  toast.success("Logged out successfully")
              }}>
              logout
            </button> :
              <NavLink to="/login" className="page-links login-btn">Login</NavLink>}
          </li>
        </ul>
      </nav>
    </div>
  )
}