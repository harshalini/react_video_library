import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"
import { useAuth, useSearch } from "../../contexts/allContext"

export const Navbar = () => {
  const { authUser, logOutHandler } = useAuth();
  const { dispatch } = useSearch();
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  
  const videoPath = (path === "/likes" || path === "/watchLater" || path === "/history")
  const [showSearch, setShowSearch] = useState(true)

  const clickSearch = (e) => {
    dispatch({ type: "SEARCH_VID", payload: e.target.value })
    if (!(videoPath || path === "/videoListing")) {
      navigate("/videoListing")
      dispatch({ type: "SEARCH_VID", payload: "" })
    }
  }

  useEffect(() => {
    if (path === "/login" || path === "/signup")
      setShowSearch(false)
  }, [path])

  const getPlaceHolder = () => videoPath? path.substring(1) : "explore"

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/" className="home-link">vivir</Link>
      </div>
      {showSearch && <div className="search-input">
        <input type="text" placeholder={`Search music videos in ${getPlaceHolder()}`}
          className="search-bar"
          onChange={(e) => clickSearch(e)}>
        </input>
      </div>}
      <nav>
        <ul>
          <li>
            {authUser.isUserLoggedIn ? <button className="logout-btn"
              onClick={logOutHandler}>
              logout
            </button> :
              <NavLink to="/login" className="page-links login-btn">Login</NavLink>}
          </li>
        </ul>
      </nav>
    </div>
  )
}