import axios from "axios";
import { createContext, useContext, useEffect } from "react";
import { AddVideoToHistory, RemoveVideoFromHistory, ClearAllHistory } from "../services/allServices";
import { VideoReducer } from "../reducers/videoReducer";
import { useReducer } from "react";

const HistoryContext = createContext()

const HistoryProvider = ({ children }) => {
    const [videoState, videoDispatch] = useReducer(VideoReducer, {
        historyVid: []
    })
    const authToken = localStorage.getItem("authToken")

    useEffect(() => {
        (async () => {
            try {
                const {
                    data: { history }
                } = await axios.get('/api/user/history', {
                    headers: { authorization: authToken }
                });
                videoDispatch({type: "ADD_TO_HISTORY", payload: history})
            } catch (error) {
                console.log(error);
            }
        })();
    }, [videoState.historyVid]);

    const HistoryVideoHandler = async(video) => {
        const response = await AddVideoToHistory(video)
            videoDispatch({type: "ADD_TO_HISTORY", payload: response.data.history})
    }

    const RemoveHistoryVideoHandler = async (_id) => {
        const response = await RemoveVideoFromHistory(_id)
        videoDispatch({type: "ADD_TO_HISTORY", payload: response.data.history})
    }

    const DeleteAllHistory = async() => {
        const response = await ClearAllHistory();
        console.log(response)
    }

    return <HistoryContext.Provider value = {{videoState, HistoryVideoHandler, RemoveHistoryVideoHandler, DeleteAllHistory}}>
        {children}
    </HistoryContext.Provider>
}

const useHistory = () => useContext(HistoryContext)

export { useHistory, HistoryProvider }