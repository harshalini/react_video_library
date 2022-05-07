export const Sidebar = () => {
    const sidebarPages = [
        {
            page: "Home",
            icon: "home"
        },
        {
            page: "Explore",
            icon: "compass"
        },
        {
            page: "Watch later",
            icon: "film"
        },
        {
            page: "Liked videos",
            icon: "heart"
        },
        {
            page: "History",
            icon: "history"
        }
    ]
    return (
        <div className="flex-div">
        <aside className="lib-sidebar">
            <ul>
                {sidebarPages.map(({page, icon}) => (
                    <a href="#"><li><i className = {`sidebar-icon fas fa-${icon}`}></i><span>{page}</span></li></a>
                ))}
            </ul>
        </aside>
        </div>
    )
}