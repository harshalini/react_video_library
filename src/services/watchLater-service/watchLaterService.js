import axios from "axios"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddVideoToWatchLater = async (video) => {
    const authToken = localStorage.getItem("authToken")
    try {
        const res = await axios.post(`/api/user/watchlater`, {
            video
        },
            {
                headers: { authorization: authToken }
            })
        toast.success("Added video to watch later")
        return res;
    }
    catch (error) {
        if(!authToken)
            toast.error("Login to add video to watch later")
        else
            toast.error("Error occured while adding video to watch later")
    }
}

const RemoveVideoFromWatchLater = async (_id) => {
    const authToken = localStorage.getItem("authToken")
    try {
        const res = await axios.delete(`/api/user/watchlater/${_id}`, {
            headers: { authorization: authToken }
        })
        toast.success("Removed video from watch later")
        return res;
    }
    catch (error) {
        toast.error("Error occured while removing video from watch later")
    }
}
export { AddVideoToWatchLater, RemoveVideoFromWatchLater }