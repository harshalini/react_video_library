import axios from "axios";
import { createContext, useContext, useEffect } from "react";
import { CreateNewPlaylist } from "../services/allServices";
import { AddVideoToPlaylist } from "../services/allServices";
import { RemoveVideoFromPlaylist } from "../services/allServices";
import { GetEachPlaylist } from "../services/allServices";
import { DeletePlaylist } from "../services/allServices";
import { VideoReducer } from "../reducers/videoReducer";
import { useReducer } from "react";
import { useState } from "react";

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
                //return res;
                console.log(videoState.playList)
                //videoDispatch({type: "ADD_TO_PLAYLIST", payload: playlists})
            } catch (error) {
                console.log(error);
            }
        })();
    }, [videoState.playList]);

    const CreatePlaylistHandler = async (playListdata) => {
        const response = await CreateNewPlaylist(playListdata)
        console.log(response)
        videoDispatch({type: "CREATE_PLAYLIST", payload: response.data.playlists})
    }
    const PlaylistVideoHandler = async(video, _id) => {
        const response = await AddVideoToPlaylist(video, _id)
        console.log(response)
            videoDispatch({type: "ADD_TO_PLAYLIST", payload: response.data.playlist})
    }

    const RemovePlaylistVideoHandler = async (playListId, _id) => {
        const response = await RemoveVideoFromPlaylist(playListId, _id)
        console.log(response)
        videoDispatch({type: "ADD_TO_PLAYLIST", payload: response.data.playlist})
    }

    const DeletePlaylistHandler = async (playListId) => {
        const response = await DeletePlaylist(playListId)
        videoDispatch({type: "CREATE_PLAYLIST", payload: response.data.playlists})
    }

    const GetList = async (playListId) => {
        const response = GetEachPlaylist(playListId)
        videoDispatch({type: "ADD_TO_PLAYLIST", payload: response.data.playlists})
        console.log(response)
    }

    return <PlaylistContext.Provider value = {{videoState, CreatePlaylistHandler, PlaylistVideoHandler, RemovePlaylistVideoHandler, DeletePlaylistHandler, GetList, playListM, showPlayListM}}>
        {children}
    </PlaylistContext.Provider>
}

const usePlaylist = () => useContext(PlaylistContext)

export { usePlaylist, PlaylistProvider }