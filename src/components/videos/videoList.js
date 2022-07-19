import { useVideo } from "../../contexts/allContext";
import { GetFilteredVideos, GetSearchedVideos } from "../../utils";
import { VideoCard } from "../allComp";

export const VideoList = () => {
    const { video } = useVideo();
    const compose = (...getVideo) => (video) => getVideo.reduce((data, getVideo) => getVideo(data), video)
    const filteredVideoList = compose(GetFilteredVideos, GetSearchedVideos)(video)
    return (
        <div>
            {filteredVideoList?.length !== 0 ?
                <div className="videos-grid">
                    {filteredVideoList.map((video) => (
                        <div key={video._id}>
                            <VideoCard {...video} />
                        </div>
                    ))}
                </div> : <h2 className="empty-heading">No video found, try different keyword</h2>
            }
        </div>
    )
}