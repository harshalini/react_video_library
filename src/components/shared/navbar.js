export const Navbar = () => {
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
              <span className="login-btn"><a>login</a></span>
            </li>
          </ul>
      </nav>
      </div>
    )
}