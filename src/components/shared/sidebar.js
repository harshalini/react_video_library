import { Link } from "react-router-dom"
export const Sidebar = () => {
    const sidebarPages = [
        {
            page: "Home",
            icon: "home",
            link: "/"
        },
        {
            page: "Explore",
            icon: "compass",
            link: "/videoListing"
        },
        {
            page: "Watch later",
            icon: "film",
            link: "/watchLater"
        },
        {
            page: "Liked videos",
            icon: "heart",
            link: "/likes"
        },
        {
            page: "History",
            icon: "history",
            link: "/"
        }
    ]
    return (
        <div className="flex-div">
        <aside className="lib-sidebar">
            <ul>
                {sidebarPages.map(({page, icon, link}) => (
                    <Link to = {`${link}`}><li><i className = {`sidebar-icon fas fa-${icon}`}></i><span>{page}</span></li></Link>
                ))}
            </ul>
        </aside>
        </div>
    )
}