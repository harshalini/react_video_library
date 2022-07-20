import { Navbar, Sidebar, VideoList, FilterChips } from "../components/allComp"
export const VideoListing = () => {
    document.title = "Vivir Videos | Explore"
    return (
        <>
            <Navbar />
            <div className="videolist-container">
                <Sidebar />
                <FilterChips />
                <VideoList />
            </div>
        </>
    )
}