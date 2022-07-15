import { useParams } from "react-router-dom"
import { Sidebar, Navbar, VideoCard, CreatePlaylist } from "../components/allComp";
import { AiFillLike } from "react-icons/ai";
import { MdWatchLater, MdPlaylistAdd } from "react-icons/md";
import { useLike, useWatchLater, useVideo, usePlaylist } from "../contexts/allContext";
import { useEffect, useRef } from "react";
export const SingleVideoPage = () => {
    const { LikeVideoHandler, videoState: { liked }, RemoveLikeVideoHandler } = useLike()
    const { videoState: { watchLater }, AddWatchLaterHandler, RemoveWatchLaterHandler } = useWatchLater()
    const { showPlayListM, playListM } = usePlaylist()
    const { videoId } = useParams();
    const { video } = useVideo();

    const ref = useRef();
    /*useEffect(() => {
        document.addEventListener("mousedown", (event) => {
            if(!ref.current?.contains(event.target))
                showPlayListM(false)
        })
    })*/
    function getVideoDetails(video, videoId) { 
        return video.find((mp4) => mp4._id === videoId);
    }
    const mp4 = getVideoDetails(video, videoId);
    const { title, views, creator, description, genre, _id } = mp4;
    
    const getClassName = () => {
        if(playListM)
            return "blur"
    }
    return (
        <div>
        <div className={`single-video-page ${getClassName()}`}>
            <Navbar />
            <Sidebar />
            <div className="singleVideo-grid">
                <div className="singleVideo-div">
                    <h1 className="video-title">{title}</h1>
                    <iframe 
                    width="1460" height="470" src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <div className="video-actions">
                        <div>
                            <p>Views: {views}</p>
                        </div>
                        <div className="video-btns">
                            {liked.some(video => video._id === _id) ?
                                <button
                                    onClick={() => RemoveLikeVideoHandler(_id)}>
                                    <AiFillLike style={{ color: "var(--default-pink)" }} />
                                    <span>Like</span>
                                </button> :
                                <button
                                    onClick={() => LikeVideoHandler(mp4)}>
                                    <AiFillLike />
                                    <span>Like</span>
                                </button>
                            }
                            {watchLater.some(video => video._id === _id) ?
                                <button
                                    onClick={() => RemoveWatchLaterHandler(_id)}>
                                    <MdWatchLater style={{ color: "var(--default-pink)" }} />
                                    <span>Watch Later</span>
                                </button> :
                                <button
                                    onClick={() => AddWatchLaterHandler(mp4)}>
                                    <MdWatchLater />
                                    <span>Watch Later</span>
                                </button>
                            }
                            <button onClick={() => {
                                showPlayListM(pl => !pl),
                                getClassName()
                                }}>
                                <MdPlaylistAdd /><span>Add to playlist</span>
                            </button>
                        </div>
                    </div>
                    <div className="creator-and-desc">
                        <p className="video-creator">From: {creator}</p>
                        <p className="video-desc">{description}</p>
                    </div>
                </div>
                <div className="mustWatch-videos">
                    <h2>Must Watch</h2>
                    {video.filter((video) => video.genre === genre).map((v) => {
                        if (video !== mp4)
                            return <VideoCard {...v} />
                    })}
                </div>
            </div>
        </div>
        {playListM && <CreatePlaylist {...mp4}
        />}
        </div>
    )
}