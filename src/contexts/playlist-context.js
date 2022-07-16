import axios from "axios";
import { createContext, useContext, useEffect, useState, useReducer } from "react";
import { CreateNewPlaylist, 
    AddVideoToPlaylist, 
    RemoveVideoFromPlaylist, 
    GetEachPlaylist, 
    DeletePlaylist } 
    from "../services/allServices";
import { VideoReducer } from "../reducers/videoReducer";

const PlaylistContext = createContext()

const PlaylistProvider = ({ children }) => {
    const [videoState, videoDispatch] = useReducer(VideoReducer, {
        playList: []
    })
    const [playListM, showPlayListM ] = useState(false)
    const authToken = localStorage.getItem("authToken")

    useEffect(() => {
        (async () => {
            try {
                const {
                    res
                } = await axios.get('/api/user/playlists', {
                    headers: { authorization: authToken }
                });
                return res;
            } catch (error) {
                console.log(error);
            }
        })();
    }, [videoState.playList]);

    const CreatePlaylistHandler = async (playListdata) => {
        const response = await CreateNewPlaylist(playListdata)
        videoDispatch({type: "CREATE_PLAYLIST", payload: response.data.playlists})
    }
    const PlaylistVideoHandler = async(video, _id) => {
        const response = await AddVideoToPlaylist(video, _id)
            videoDispatch({type: "ADD_TO_PLAYLIST", payload: response.data.playlist})
    }

    const RemovePlaylistVideoHandler = async (playListId, _id) => {
        const response = await RemoveVideoFromPlaylist(playListId, _id)
        videoDispatch({type: "ADD_TO_PLAYLIST", payload: response.data.playlist})
    }

    const DeletePlaylistHandler = async (playListId) => {
        const response = await DeletePlaylist(playListId)
        videoDispatch({type: "CREATE_PLAYLIST", payload: response.data.playlists})
    }

    const GetList = async (playListId) => {
        const response = GetEachPlaylist(playListId)
        videoDispatch({type: "ADD_TO_PLAYLIST", payload: response.data.playlists})
    }

    return <PlaylistContext.Provider value = {{videoState, CreatePlaylistHandler, PlaylistVideoHandler, RemovePlaylistVideoHandler, DeletePlaylistHandler, GetList, playListM, showPlayListM}}>
        {children}
    </PlaylistContext.Provider>
}

const usePlaylist = () => useContext(PlaylistContext)

export { usePlaylist, PlaylistProvider }