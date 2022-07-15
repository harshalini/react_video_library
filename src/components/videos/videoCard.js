import { Link } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import { MdWatchLater, MdPlaylistAdd } from "react-icons/md";
import { useLike, useWatchLater, useHistory, usePlaylist } from "../../contexts/allContext";
import { CreatePlaylist } from "../playlist/createPlaylist";
import { useState } from "react"
export const VideoCard = (video) => {
    const { LikeVideoHandler, videoState: { liked }, RemoveLikeVideoHandler } = useLike()
    const { videoState: { watchLater }, AddWatchLaterHandler, RemoveWatchLaterHandler } = useWatchLater()
    const { HistoryVideoHandler } = useHistory()
    const { _id, title, creator, views } = video;
    const { playListM, showPlayListM } = usePlaylist()
    const modalShowHandler = () => {
        showPlayListM(true)
        const body = document.querySelector("body");
                    
    }
    return (
        <div className="ui-component card card-with-badge">
            <Link to={`/singleVideo/${_id}`} className="video-link">
                <div className="card-image"
                onClick={() => HistoryVideoHandler(video)}
                >
                    <img src={`https://img.youtube.com/vi/${_id}/hqdefault.jpg`} alt="video-thumbnail" />
                </div>
            </Link>
            <div className="top-badge">
                {watchLater.some(w => w._id === _id) ?
                    <MdWatchLater className="watch-later-btn"
                        style={{ color: "var( --default-pink)" }}
                        onClick={() => RemoveWatchLaterHandler(_id)}
                    /> :
                    <MdWatchLater className="watch-later-btn"
                        onClick={() => AddWatchLaterHandler(video)} />}
                <MdPlaylistAdd className="playlist-btn" 
                onClick={modalShowHandler}
                />
            </div>
            <div className="card-text">
                <span className="card-title">{title}</span>
                <p className="creator-name">{creator}</p>
                <div className="price video-stats">
                    <p style={{ color: "var(--white)" }}>Views: {views}</p>
                    {liked.some((l) => l._id === _id) ?
                        <AiFillLike className="like-btn"
                            style={{ color: "var( --default-pink)" }}
                            onClick={() => { RemoveLikeVideoHandler(_id) }} />
                        :
                        <AiFillLike className="like-btn"
                            onClick={() => { LikeVideoHandler(video) }} />
                    }
                </div>
            </div>
        </div>
    )
}