import { useState } from "react"
import { NavLink } from "react-router-dom"
import { v4 as uuid } from "uuid"

const sidebarPages = [
    {
        _id: uuid(),
        page: "Explore",
        icon: "compass",
        link: "/videoListing"
    },
    {
        _id: uuid(),
        page: "Watch later",
        icon: "clock",
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

export const Sidebar = () => {
    const activeStyle = ({ isActive }) => ({
        color: isActive ? "var(--default-pink)" : "none",
    })
    return (
        <div className="flex-div">
            <aside className="lib-sidebar">
                <ul>
                    <li>
                        <NavLink style={activeStyle} to="/">
                            <i className="sidebar-icon fas fa-home"></i>
                            <span>Home</span>
                        </NavLink>
                    </li>
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

export const MobileNav = () => {
    const [activeIcon, setActiveIcon] = useState("active: false")
    const activeStyle = ({ isActive }) => ({
        className: isActive? `home-link act`: `home-link`
    })
    
    return (
    <div className="mobile-nav">
        <ul className="mobile-pages">
            {sidebarPages.map(({ icon, link, _id }) => (
                <li key={_id}>
                    <NavLink
                        to={`${link}`}
                        className={({isActive}) => isActive ? "home-link act": "home-link" }
                        >
                       <i 
                       className={`sidebar-icon fas fa-${icon}`}></i>
                    </NavLink>
                </li>
            ))}
        </ul>
    </div>
    )

}