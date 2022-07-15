import axios from "axios"

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
        console.log("Error occured", error)
    }
}

const RemoveVideoFromHistory = async (_id) => {
    const authToken = localStorage.getItem("authToken")
    try {
        const res = await axios.delete(`/api/user/history/${_id}`, {
            headers: { authorization: authToken }
        })
        return res;
    }
    catch (error) {
        console.log("Error occured", error)
    }
}
export { AddVideoToHistory, RemoveVideoFromHistory }