import axios from "axios"

const CreateNewPlaylist = async (data) => {
    const authToken = localStorage.getItem("authToken")
    try {
        const res = await axios.post(`/api/user/playlists`, {
            playlist: data
        },
            {
                headers: { authorization: authToken }
            }
        )
        console.log(res)
        return res;
    }
    catch (error) {
        console.log("Error occured", error)
    }
}

const AddVideoToPlaylist = async (video, _id) => {
    const authToken = localStorage.getItem("authToken")
    try {
        const res = await axios.post(`/api/user/playlists/${_id}`, {
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

const RemoveVideoFromPlaylist = async (playListId, _id) => {
    const authToken = localStorage.getItem("authToken")
    try {
        const res = await axios.delete(`/api/user/playlists/${playListId}/${_id}`, {
            headers: { authorization: authToken }
        })
        return res;
    }
    catch (error) {
        console.log("Error occured", error)
    }
}

const GetEachPlaylist = async (playListId ) => {
    const authToken = localStorage.getItem("authToken")
    try {
        const res = await axios.get(`/api/user/playlists/${playListId}`, {
            headers: { authorization: authToken }
        })
        return res;
    }
    catch (error) {
        console.log("Error occured", error)
    }
}

const DeletePlaylist = async (playListId) => {
    const authToken = localStorage.getItem("authToken")
    try {
        const res = await axios.delete(`/api/user/playlists/${playListId}`, {
            headers: { authorization: authToken }
        })
        return res;
    }
    catch (error) {
        console.log("Error occured", error)
    }
}
export { CreateNewPlaylist, AddVideoToPlaylist, RemoveVideoFromPlaylist, GetEachPlaylist, DeletePlaylist }