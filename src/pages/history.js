import { Navbar, Sidebar, VideoCard } from "../components/allComp";
import { useHistory } from "../contexts/allContext";
import { HistoryCard } from "../components/cards/history-card";
export const HistoryPage = () => {
    const { videoState: { historyVid } } = useHistory();
    return (
        <div>
            <Navbar />
            <Sidebar />
            <h1 className="heading">Liked videos</h1>
            {historyVid.length !== 0 ?
                <div className="videos-grid">
                    {historyVid.map((video) => (
                        <HistoryCard {...video} />
                    ))}
                </div>
                :
                <h2 className="empty-heading">Your watch history will appear here!</h2>
            }
        </div>
    )
}