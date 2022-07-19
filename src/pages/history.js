import { Navbar, Sidebar } from "../components/allComp";
import { useHistory } from "../contexts/allContext";
import { HistoryCard } from "../components/cards/history-card";
import { ComposeFun } from "../utils";
export const HistoryPage = () => {
    const { videoState: { historyVid }, DeleteAllHistory } = useHistory();
    const historyVideoList = ComposeFun(historyVid);
    return (
        <div>
            <Navbar />
            <Sidebar />
            <h1 className="heading">Watch History</h1>
            {historyVid?.length !== 0 &&  
            <button className="history-del"onClick={DeleteAllHistory}>Clear all history</button>
            }
            {historyVideoList?.length !== 0 ?
                <div className="videos-grid">
                    {historyVideoList?.reverse().map((video) => (
                        <HistoryCard {...video} />
                    ))}
                </div>
                :
                <h2 className="empty-heading">Your watch history will appear here!</h2>
            }
        </div>
    )
}