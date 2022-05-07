import { Navbar, Sidebar, Genres } from "../components/allComp"
export const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="home-flex">
                <div className="lib-header">
                    <Sidebar />
                    <div className="header">
                        <img src="../assets/header-img.svg" className="header-img"></img>
                        <a><i className="explore-btn fas fa-play-circle"></i></a>
                    </div>
                </div>
                <div>
                    <Genres />
                </div>
            </div>
        </div>
    )
}