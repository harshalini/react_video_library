import { NavLink } from "react-router-dom"
import { useAuth } from "../../contexts/authContext"
export const Navbar = () => {
  const {authUser, logOutHandler} = useAuth();
  return (
    <div className="navbar">
      <div className="logo">
        <a>vivir</a>
      </div>
      <div className="search-input">
        <input type="text" placeholder="Watch something" className="search-bar"></input>
      </div>
      <nav>
        <ul>
          <li>
          {authUser.isUserLoggedIn? <button className="logout-btn" onClick={logOutHandler}>logout</button> : <NavLink to="/login" className="page-links login-btn">Login</NavLink>}
          </li>
        </ul>
      </nav>
    </div>
  )
}