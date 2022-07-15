import { useParams } from "react-router-dom"
import { usePlaylist } from "../contexts/playlist-context";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai"
import { Navbar, Sidebar } from "../components/allComp";
export const SinglePlaylistVideos = () => {
    const { playlistId } = useParams();
    const {
        videoState: { playList }, RemovePlaylistVideoHandler
    } = usePlaylist();

    const getPlaylist = playList.find((list) => list._id === playlistId)
    return (
        <div>
            <Navbar />
            <Sidebar />
            <h1 className="heading">Your playlists</h1>
            <h2>Playlists -- {getPlaylist.title}</h2>
            <div className="videos-grid">
                {getPlaylist.videos.map(({ _id, title, creator }) => {
                    return (
                        <div className="ui-component card card-with-badge">
                            <Link to={`/singleVideo/${_id}`} className="video-link">
                                <div className="card-image">
                                    <img src={`https://img.youtube.com/vi/${_id}/hqdefault.jpg`} alt="video-thumbnail" />
                                </div>
                            </Link>
                            <div className="card-text">
                                <span className="card-title">{title}</span>
                                <p className="creator-name">{creator}</p>
                                <div className="price video-stats">
                                    <AiFillDelete className="like-btn" onClick={() => RemovePlaylistVideoHandler(playlistId, _id)} />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}