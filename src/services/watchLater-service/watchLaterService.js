import axios from "axios"

const AddVideoToWatchLater = async (video) => {
    const authToken = localStorage.getItem("authToken")
    try {
        const res = await axios.post(`/api/user/watchlater`, {
            video
        },
            {
                headers: { authorization: authToken }
            })
        return res;
    }
    catch (error) {
        console.log("Error occured", error)
    }
}

const RemoveVideoFromWatchLater = async (_id) => {
    const authToken = localStorage.getItem("authToken")
    try {
        const res = await axios.delete(`/api/user/watchlater/${_id}`, {
            headers: { authorization: authToken }
        })
        return res;
    }
    catch (error) {
        console.log("Error occured", error)
    }
}
export { AddVideoToWatchLater, RemoveVideoFromWatchLater }