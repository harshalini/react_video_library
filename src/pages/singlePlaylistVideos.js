import { Link, useNavigate, useParams } from "react-router-dom"
import { usePlaylist, useHistory, useWatchLater } from "../contexts/allContext";
import { AiFillDelete } from "react-icons/ai"
import { Navbar, Sidebar } from "../components/allComp";
import { useState } from "react";
import { MdWatchLater } from "react-icons/md";
export const SinglePlaylistVideos = () => {
    document.title = "Vivir Videos | Your Playlist"
    const { playlistId } = useParams();
    const {
        videoState: { playList }, RemovePlaylistVideoHandler, DeletePlaylistHandler
    } = usePlaylist();
    const { videoState: { watchLater }, AddWatchLaterHandler, RemoveWatchLaterHandler } = useWatchLater()
    const { HistoryVideoHandler } = useHistory()
    const getPlaylist = playList.find((list) => list._id === playlistId)
    const { title, description } = getPlaylist || {};
    const [showDeleteBtn, setShowDeleteBtn] = useState(true)
    const navigate = useNavigate()

    const getClassName = () => {
        if (showDeleteBtn === false)
            return "hidden-btn"
    }
    return (
        <div>
            <Navbar />
            <Sidebar />
            <h1 className="heading your-playlist-heading">Your playlist</h1>
            <div className="each-playlist">
                <h2 className="empty-heading playlist-title">{title}</h2>
                <AiFillDelete className={`delete-icon pl-delete ${getClassName()}`}
                    onClick={() => {
                        DeletePlaylistHandler(playlistId)
                        setShowDeleteBtn(false)
                        navigate("/playlist")
                    }}
                />
            </div>
            <p className="history-del playlist-desc">{description}</p>
            {getPlaylist !== undefined && getPlaylist.videos.length !== 0 ?
                <div className="videos-grid">
                    {getPlaylist.videos.map(
                        (v) => {
                            const { _id, title, creator, views } = v
                            return (
                                <div className="ui-component card card-with-badge">
                                    <Link to={`/singleVideo/${_id}`} className="video-link">
                                        <div className="card-image"
                                            onClick={() => HistoryVideoHandler(v)}
                                        >
                                            <img src={`https://img.youtube.com/vi/${_id}/hqdefault.jpg`} alt="video-thumbnail" />
                                        </div>
                                    </Link>
                                    {watchLater.some(w => w._id === _id) ?
                                        <MdWatchLater className="watch-later-btn"
                                            style={{ color: "var( --default-pink)" }}
                                            onClick={() => RemoveWatchLaterHandler(_id)}
                                        /> :
                                        <MdWatchLater className="watch-later-btn"
                                            onClick={() => AddWatchLaterHandler(v)} />}
                                    <div className="card-text">
                                        <span className="card-title">{title}</span>
                                        <p className="creator-name">{creator}</p>
                                        <div className="price video-stats">
                                            <p style={{ color: "var(--white)" }}>Views: {views}</p>
                                            <AiFillDelete className="like-btn"
                                                onClick={() => RemovePlaylistVideoHandler(playlistId, _id)} />

                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                </div> : <h2 className="Empty-heading">There are no videos in this playlist</h2>
            }
        </div>
    )
}