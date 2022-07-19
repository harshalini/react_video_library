import { Navbar, Sidebar, VideoCard } from "../components/allComp";
import { useLike } from "../contexts/allContext";
import { ComposeFun } from "../utils";

export const LikesPage = () => {
    const { videoState: { liked } } = useLike();
    const likedVideoList = ComposeFun(liked);
    
    return (
        <div>
            <Navbar />
            <Sidebar />
            <h1 className="heading">Liked videos</h1>
            {likedVideoList?.length !== 0 ?
                <div className="videos-grid">
                    {likedVideoList?.map((video) => (
                        <VideoCard {...video} />
                    ))}
                </div>
                :
                <h2 className="empty-heading">Keep all your liked videos here!</h2>
            }
        </div>
    )
}