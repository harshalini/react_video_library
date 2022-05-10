import { useVideo } from "../../contexts/allContext";
import { GetFilteredVideos } from "../../filter-utils/genreFilter-util";
import { VideoCard } from "../allComp";
export const VideoList = () => {
    const { video } = useVideo();
    const compose = (...getVideo) => (video) => getVideo.reduce((data, getVideo) => getVideo(data), video)
    const filteredVideoList = compose(GetFilteredVideos)(video)

    return (
        <div className="videos-grid">
            {filteredVideoList.map((video) => (
                <VideoCard {...video} />
            ))}
        </div>
    )
}