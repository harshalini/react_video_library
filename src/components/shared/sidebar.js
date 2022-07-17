import { NavLink } from "react-router-dom"
import { v4 as uuid } from "uuid"
export const Sidebar = () => {
    const sidebarPages = [
        {
            _id: uuid(),
            page: "Home",
            icon: "home",
            link: "/"
        },
        {
            _id: uuid(),
            page: "Explore",
            icon: "compass",
            link: "/videoListing"
        },
        {
            _id: uuid(),
            page: "Watch later",
            icon: "film",
            link: "/watchLater"
        },
        {
            _id: uuid(),
            page: "Liked videos",
            icon: "heart",
            link: "/likes"
        },
        {
            _id: uuid(),
            page: "History",
            icon: "history",
            link: "/history"
        },
        {
            _id: uuid(),
            page: "Playlists",
            icon: "film",
            link: "/playlist"
        }
    ]
    const activeStyle = ({isActive}) => ({
        color: isActive? "var(--default-pink)": "none",
      })
    
    return (
        <div className="flex-div">
            <aside className="lib-sidebar">
                <ul>
                    {sidebarPages.map(({ page, icon, link, _id }) => (
                        <li key={_id}>
                        <NavLink 
                        style={activeStyle}
                        to={`${link}`}>
                                <i className={`sidebar-icon fas fa-${icon}`}></i>
                                <span>{page}</span>
                        </NavLink>
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    )
}