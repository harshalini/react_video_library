import axios from "axios";
import { createContext, useContext, useEffect } from "react";
import { AddVideoToLiked, RemoveVideoFromLiked } from "../services/allServices";
import { VideoReducer } from "../reducers/videoReducer";
import { useReducer } from "react";

const LikeContext = createContext()

const LikeProvider = ({ children }) => {
    const [videoState, videoDispatch] = useReducer(VideoReducer, {
        liked: []
    })
    const authToken = localStorage.getItem("authToken")

    useEffect(() => {
        (async () => {
            try {
                const {
                    data: { likes }
                } = await axios.get('/api/user/likes', {
                    headers: { authorization: authToken }
                });
                videoDispatch({type: "ADD_TO_LIKED", payload: likes})
            } catch (error) {
                console.log(error);
            }
        })();
    }, [videoState.liked]);

    const LikeVideoHandler = async(video) => {
        const response = await AddVideoToLiked(video)
            videoDispatch({type: "ADD_TO_LIKED", payload: response.data.likes})
    }

    const RemoveLikeVideoHandler = async (_id) => {
        const response = await RemoveVideoFromLiked(_id)
        videoDispatch({type: "ADD_TO_LIKED", payload: response.data.likes})
    }

    return <LikeContext.Provider value = {{videoState, LikeVideoHandler, RemoveLikeVideoHandler}}>
        {children}
    </LikeContext.Provider>
}

const useLike = () => useContext(LikeContext)

export { useLike, LikeProvider}