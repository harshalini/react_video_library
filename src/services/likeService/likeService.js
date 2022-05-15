import axios from "axios"

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
        console.log("Error occured", error)
    }
}

const RemoveVideoFromLiked = async (_id) => {
    const authToken = localStorage.getItem("authToken")
    try {
        const res = await axios.delete(`/api/user/likes/${_id}`, {
            headers: { authorization: authToken }
        })
        return res;
    }
    catch (error) {
        console.log("Error occured", error)
    }
}
export { AddVideoToLiked, RemoveVideoFromLiked }