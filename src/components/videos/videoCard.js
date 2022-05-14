import { Link } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import { MdWatchLater, MdPlaylistAdd } from "react-icons/md";
import { useLike, useWatchLater } from "../../contexts/allContext";

export const VideoCard = (video) => {
    const { LikeVideoHandler, videoState: { liked }, RemoveLikeVideoHandler } = useLike()
    const { videoState: { watchLater }, AddWatchLaterHandler, RemoveWatchLaterHandler } = useWatchLater()
    const { _id, title, creator, views } = video;
    return (
        <div class="ui-component card card-with-badge">
            <Link to={`/singleVideo/${_id}`} className="video-link">
                <div class="card-image">
                    <img src={`https://img.youtube.com/vi/${_id}/hqdefault.jpg`} alt="video-thumbnail" />
                </div>
            </Link>
            <div class="top-badge">
                {watchLater.some(w => w._id === _id) ?
                    <MdWatchLater className="watch-later-btn"
                        style={{ color: "var( --default-pink)" }}
                        onClick={() => RemoveWatchLaterHandler(_id)}
                    /> :
                    <MdWatchLater className="watch-later-btn"
                        onClick={() => AddWatchLaterHandler(video)} />}
                <MdPlaylistAdd className="playlist-btn" />
            </div>
            <div class="card-text">
                <span className="card-title">{title}</span>
                <p className="creator-name">{creator}</p>
                <div class="price video-stats">
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