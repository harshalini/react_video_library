import { Link } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import { MdWatchLater } from "react-icons/md";
import { useLike, useWatchLater, useHistory } from "../../contexts/allContext";

export const VideoCard = (v) => {
    const { LikeVideoHandler, videoState: { liked }, RemoveLikeVideoHandler } = useLike()
    const { videoState: { watchLater }, AddWatchLaterHandler, RemoveWatchLaterHandler } = useWatchLater()
    const { HistoryVideoHandler } = useHistory()
    const { _id, title, creator, views } = v;
    
    return (
        <div className="ui-component card card-with-badge"
        >
            <Link to={`/singleVideo/${_id}`} className="video-link">
                <div className="card-image"
                onClick={() => {
                   window.scroll({ top: 0, behavior: "smooth" })
                    HistoryVideoHandler(v)}}
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
                    {liked.some((l) => l._id === _id) ?
                        <AiFillLike className="like-btn"
                            style={{ color: "var( --default-pink)" }}
                            onClick={() => RemoveLikeVideoHandler(_id) } />
                        :
                        <AiFillLike className="like-btn"
                            onClick={() => LikeVideoHandler(v) } />
                    }
                </div>
            </div>
        </div>
    )
}