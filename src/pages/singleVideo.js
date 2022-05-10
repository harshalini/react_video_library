import { useParams } from "react-router-dom"
import { Sidebar, Navbar, VideoCard } from "../components/allComp";
import { useVideo } from "../contexts/videolist-context";
import { AiFillLike } from "react-icons/ai";
import { MdWatchLater, MdPlaylistAdd } from "react-icons/md";

export const SingleVideoPage = () => {
    const { videoId } = useParams();
    const { video } = useVideo();
    function getVideoDetails(video, videoId) {
        return video.find((mp4) => mp4._id === videoId);
    }
    const mp4 = getVideoDetails(video, videoId);
    const { title, views, creator, description, genre } = mp4;
    return (
        <div>
            <Navbar />
            <Sidebar />
            <h1 className="video-title">{title}</h1>
            <div className="iframe-container">
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="video-actions">
                <div>
                    <p>Views: {views}</p>
                </div>
                <div className="video-btns">
                    <button><AiFillLike /><span>Like</span></button>
                    <button><MdWatchLater /><span>Watch Later</span></button>
                    <button><MdPlaylistAdd /><span>Add to playlist</span></button>
                </div>
            </div>
            <div className="creator-and-desc">
                <p className="video-creator">From: {creator}</p>
                <p className="video-desc">{description}</p>
            </div>
            <div className="mustWatch-videos">
                <h2>Must Watch</h2>
                {video.filter((v) => v.genre === genre).map((v) => {
                    if (v !== mp4)
                        return <VideoCard {...v} />
                })}
            </div>
        </div>
    )
}