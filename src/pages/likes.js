import { Navbar, Sidebar, VideoCard } from "../components/allComp";
import { useLike } from "../contexts/allContext";

export const LikesPage = () => {
    const { videoState: { liked } } = useLike();
    return (
        <div>
            <Navbar />
            <Sidebar />
            <h1 className="heading">Liked videos</h1>
            {liked.length !== 0 ?
                <div className="videos-grid">
                    {liked.map((video) => (
                        <VideoCard {...video} />
                    ))}
                </div>
                :
                <h2 className="empty-heading">Keep all your liked videos here!</h2>
            }
        </div>
    )
}