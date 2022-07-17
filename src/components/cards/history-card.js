import { AiFillDelete } from "react-icons/ai"
import { useHistory } from "../../contexts/history-context"
import { Link } from "react-router-dom"
export const HistoryCard = (video) => {
    const { RemoveHistoryVideoHandler } = useHistory()
    const { _id, title, creator, views } = video;
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
                <p style={{ color: "var(--white)" }}>Views: {views}</p>
                    <AiFillDelete className="like-btn" onClick={() => RemoveHistoryVideoHandler(_id)}/>
                </div>
            </div>
        </div>
    )
}