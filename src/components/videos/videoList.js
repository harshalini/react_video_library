import { useVideo } from "../../contexts/allContext";
import { GetFilteredVideos } from "../../filter-utils/genreFilter-util";
import { VideoCard } from "../allComp";
import { usePlaylist } from "../../contexts/playlist-context";

export const VideoList = () => {
    const { playListM } = usePlaylist()
    const { video } = useVideo();
    const compose = (...getVideo) => (video) => getVideo.reduce((data, getVideo) => getVideo(data), video)
    const filteredVideoList = compose(GetFilteredVideos)(video)
    return (
        <div className="videos-grid">
            {filteredVideoList.map((video) => (
                <div key={video._id}>
                <VideoCard {...video} />
                </div>
            ))}
        </div>
    )
}