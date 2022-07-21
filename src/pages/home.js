import { Navbar, Sidebar, Genres } from "../components/allComp"
import { Link } from "react-router-dom"
import { MobileNavbar } from "../components/shared/navbar"
import { MobileNav } from "../components/shared/sidebar"
export const Home = () => {
    document.title = "Vivir Videos | Home"
    return (
        <div>
            <Navbar />
            <div className="home-flex">
                <div className="lib-header">
                    <Sidebar />
                    <div className="header">
                        <img src="../assets/header-img.svg" className="header-img"></img>
                        <Link to = "/videoListing"><i className="explore-btn fas fa-play-circle"></i></Link>
                    </div>
                </div>
                <div>
                    <Genres />
                </div>
            </div>
            <MobileNav />
        </div>
    )
}