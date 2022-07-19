import { GetSearchedVideos } from "./search-util";
export const ComposeFun = (video) => {
    const compose = (...getVideo) => (video) => getVideo.reduce((data, getVideo) => getVideo(data), video)

    const searchedVideoList = compose(GetSearchedVideos)(video)
    return searchedVideoList
}