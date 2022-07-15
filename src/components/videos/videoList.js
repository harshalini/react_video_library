import { useVideo } from "../../contexts/allContext";
import { GetFilteredVideos } from "../../filter-utils/genreFilter-util";
import { VideoCard } from "../allComp";
import { CreatePlaylist } from "../allComp";
import { usePlaylist } from "../../contexts/playlist-context";
import { useState } from "react";
export const VideoList = () => {
    const { playListM } = usePlaylist()
    const { video } = useVideo();
    const compose = (...getVideo) => (video) => getVideo.reduce((data, getVideo) => getVideo(data), video)
    const filteredVideoList = compose(GetFilteredVideos)(video)
    const GetThatVideo = v => {
        filteredVideoList.find((video) => {
            if(video._id === v._id )
            return <CreatePlaylist {...v} />
        })
        return <CreatePlaylist {...v} />
    }
    return (
        <div className="videos-grid">
            {filteredVideoList.map((video) => (
                <div key={video._id}>
                <VideoCard {...video} />
                </div>
            ))}
        </div>
    )
}