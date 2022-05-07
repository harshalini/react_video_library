import { Navbar, Sidebar, VideoList, FilterChips } from "../components/allComp"
export const VideoListing = () => {
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