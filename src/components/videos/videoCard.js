import { Link } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import { MdWatchLater, MdPlaylistAdd } from "react-icons/md";

export const VideoCard = ({ _id, title, creator, views }) => {
    return (
        <Link to={`/singleVideo/${_id}`} className="video-link">
            <div class="ui-component card card-with-badge">
                <div class="card-image">
                    <img src={`https://img.youtube.com/vi/${_id}/hqdefault.jpg`} />
                </div>
                <div class="top-badge">
                    <MdWatchLater className="watch-later-btn" />
                    <MdPlaylistAdd className="playlist-btn" />
                </div>
                <div class="card-text">
                    <span className="card-title">{title}</span>
                    <p className="creator-name">{creator}</p>
                    <div class="price video-stats">
                        <p style={{ color: "var(--white)" }}>Views: {views}</p>
                        <AiFillLike className="like-btn" />
                    </div>
                </div>
            </div>
        </Link>
    )
}