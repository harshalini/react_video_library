import axios from "axios"
import { toast } from "react-toastify";

const AddVideoToHistory = async (video) => {
    const authToken = localStorage.getItem("authToken")
    try {
        const res = await axios.post(`/api/user/history`, {
            video
        },
            {
                headers: { authorization: authToken }
            })
        return res;
    }
    catch (error) {
        toast.error("An error occured")
    }
}

const RemoveVideoFromHistory = async (_id) => {
    const authToken = localStorage.getItem("authToken")
    try {
        const res = await axios.delete(`/api/user/history/${_id}`, {
            headers: { authorization: authToken }
        })
        toast.success("Removed video from history")
        return res;
    }
    catch (error) {
        toast.error("Error occured while removing video from history")
    }
}

const ClearAllHistory = async() => {
    const authToken = localStorage.getItem("authToken")
    try {
        const res = await axios.delete(`/api/user/history/all`, {
            headers: { authorization: authToken }
        })
        toast.success("Cleared all history")
        return res;
    }
    catch (error) {
        toast.error("Error occured while clearing history")
    }
}
export { AddVideoToHistory, RemoveVideoFromHistory, ClearAllHistory }