export const VideoReducer = (videoState, action) => {
    switch (action.type) {
        case "ADD_TO_LIKED":
            return { ...videoState, liked: action.payload }
        case "ADD_TO_WATCHLATER":
            return { ...videoState, watchLater: action.payload }
        case "ADD_TO_HISTORY":
            return { ...videoState, historyVid: action.payload }
        case "CREATE_PLAYLIST":
            return { ...videoState, playList: action.payload }
        case "ADD_TO_PLAYLIST":
            return { ...videoState, playList: videoState.playList.map((playlistVid) => 
                playlistVid._id === action.payload._id?
                {...playlistVid,  videos: action.payload.videos} :
                playlistVid
                ),
            }
        default:
            return videoState;
    }
}