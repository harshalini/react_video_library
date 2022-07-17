import axios from "axios"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddVideoToLiked = async (video) => {
    const authToken = localStorage.getItem("authToken")
    try {
        const res = await axios.post(`/api/user/likes`, {
            video
        },
            {
                headers: { authorization: authToken }
            })
        return res;
    }
    catch (error) {
        if (!authToken)
            toast.error("Login to like video")
        else
            toast.error("Error occured in liking video")
    }
}

const RemoveVideoFromLiked = async (_id) => {
    const authToken = localStorage.getItem("authToken")
    try {
        const res = await axios.delete(`/api/user/likes/${_id}`, {
            headers: { authorization: authToken }
        })
        toast.success("Removed video from liked")
        return res;
    }
    catch (error) {
        toast.error("Error while removing video from error")
    }
}
export { AddVideoToLiked, RemoveVideoFromLiked }