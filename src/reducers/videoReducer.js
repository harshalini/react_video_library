export const VideoReducer = (videoState, action) => {
    switch (action.type) {
        case "ADD_TO_LIKED":
            return { ...videoState, liked: action.payload }
        case "ADD_TO_WATCHLATER":
            return { ...videoState, watchLater: action.payload }
        default:
            return videoState;
    }
}