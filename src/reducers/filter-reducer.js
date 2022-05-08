export const FilterReducer = (state, action) => {
    switch (action.type) {
        case "FILTER-BY-GENRE":
            return { ...state, videoGenre: [...state.videoGenre, action.payload] }
        case "REMOVE-POPULAR":
            return { ...state, videoGenre: state.videoGenre.filter((videoCat) => videoCat !== "Popular") }
        case "REMOVE-ROCK":
            return { ...state, videoGenre: state.videoGenre.filter((videoCat) => videoCat !== "Rock") }
        case "REMOVE-CLASSICAL":
            return { ...state, videoGenre: state.videoGenre.filter((videoCat) => videoCat !== "Classical") }
        case "REMOVE-POP":
            return { ...state, videoGenre: state.videoGenre.filter((videoCat) => videoCat !== "Pop") }
        case "ALL":
            return {
                videoGenre: ""
            }
        default:
            return state
    }
}