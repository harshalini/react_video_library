import axios from "axios"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        toast.success("Playlist created")
        return res;
    }
    catch (error) {
        if (!authToken)
            toast.error("Login to create playlist")
        else
            toast.error("Error occured while creating playlist")
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
        toast.success("Video added to playlist")
        return res;
    }
    catch (error) {
        if (!authToken)
            toast.error("Login to add video to playlist")
        else
            toast.error("Error occured while adding video to playlist")
    }
}

const RemoveVideoFromPlaylist = async (playListId, _id) => {
    const authToken = localStorage.getItem("authToken")
    try {
        const res = await axios.delete(`/api/user/playlists/${playListId}/${_id}`, {
            headers: { authorization: authToken }
        })
        toast.success("Video removed from playlist")
        return res;
    }
    catch (error) {
        if (!authToken)
            toast.error("Login to remove video from playlist")
        else
            toast.error("Error occured while removing video from playlist")
    }
}

const GetEachPlaylist = async (playListId) => {
    const authToken = localStorage.getItem("authToken")
    try {
        const res = await axios.get(`/api/user/playlists/${playListId}`, {
            headers: { authorization: authToken }
        })
        return res;
    }
    catch (error) {
        toast.error("An error occured")
    }
}

const DeletePlaylist = async (playListId) => {
    const authToken = localStorage.getItem("authToken")
    try {
        const res = await axios.delete(`/api/user/playlists/${playListId}`, {
            headers: { authorization: authToken }
        })
        toast.success("Playlist deleted")
        return res;
    }
    catch (error) {
        if (!authToken)
            toast.error("Login to delete playlist")
        else
            toast.error("Error occured while deleting playlist")
    }
}
export { CreateNewPlaylist, AddVideoToPlaylist, RemoveVideoFromPlaylist, GetEachPlaylist, DeletePlaylist }