import { Navbar, Sidebar } from "../components/allComp"
import { useWatchLater } from "../contexts/watchLater-context"
import { VideoCard } from "../components/allComp"
import { ComposeFun } from "../utils"
export const WatchLater = () => {
    const { videoState: { watchLater } } = useWatchLater()
    const watchVideoList = ComposeFun(watchLater);
    return (
        <div>
            <Navbar />
            <Sidebar />
            <h1 className="heading">Watch Later</h1>
            {watchVideoList?.length !== 0 ?
                <div className="videos-grid">
                    {watchVideoList?.map((video) => (
                        <VideoCard {...video} />
                    ))}
                </div>
                :
                <h2 className="empty-heading">Add videos that you can watch later!</h2>
            }
        </div>
    )
}