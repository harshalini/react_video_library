import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { AddVideoToWatchLater, RemoveVideoFromWatchLater } from "../services/allServices";
import { VideoReducer } from "../reducers/videoReducer";

const WatchLaterContext = createContext()

const WatchLaterProvider = ({children}) => {
    const [videoState , videoDispatch ] = useReducer(VideoReducer, {
        watchLater : []
    })
    const authToken = localStorage.getItem("authToken")

    useEffect(() => {
        (async () => {
            try {
                const {
                    data: { watchlater }
                } = await axios.get('/api/user/watchlater', {
                    headers: { authorization: authToken }
                });
                videoDispatch({type: "ADD_TO_WATCHLATER", payload: watchlater})
            } catch (error) {
                console.log(error);
            }
        })();
    }, [videoState.watchLater]);

    const AddWatchLaterHandler = async(video) => {
        const response = await AddVideoToWatchLater(video)
        videoDispatch({ type: "ADD_TO_WATCHLATER", payload: watchlater })
    }

    const RemoveWatchLaterHandler = async(_id) => {
        const response = await RemoveVideoFromWatchLater(_id)
        videoDispatch({ type: "ADD_TO_WATCHLATER", payload: watchlater })
    }

    return <WatchLaterContext.Provider value={{videoState, AddWatchLaterHandler, RemoveWatchLaterHandler}}>
        {children}
    </WatchLaterContext.Provider>
}

const useWatchLater = () => useContext(WatchLaterContext)

export { WatchLaterProvider, useWatchLater }