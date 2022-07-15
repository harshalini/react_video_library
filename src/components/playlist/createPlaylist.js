import { useState } from "react";
import { usePlaylist } from "../../contexts/playlist-context";
import { ClickOutSideHandler } from "../../hooks/clickOutside";

export const CreatePlaylist = (video) => {
    const { videoState: { playList }, CreatePlaylistHandler, PlaylistVideoHandler, RemovePlaylistVideoHandler, showPlayListM } = usePlaylist()
    const [playlistContent, setPlaylistContent] = useState({
        title: "",
        description: ""
    })

    const modelRef = ClickOutSideHandler(() => showPlayListM(false))
    return (
        <div className="playlist-modal" ref={modelRef}>
            <div className="playlist-input">
                <input
                    type="text" placeholder="title"
                    onChange={(e) => setPlaylistContent({ title: e.target.value })}
                />
                <button type="button" onClick={() => {
                    CreatePlaylistHandler(playlistContent)
                    console.log(CreatePlaylistHandler(playlistContent))}}>
                    Create
                </button>
            </div>
            <div>
                {playList.map(list => (
                    <div>
                        <label>
                            <input type="checkbox"
                                checked={list.videos.some((mp4) => {
                                    return mp4._id === video._id;
                                })}
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        PlaylistVideoHandler(video, list._id);
                                        console.log(PlaylistVideoHandler(video, list._id))
                                    } else {
                                        RemovePlaylistVideoHandler(list._id, video._id);
                                    }
                                }}
                            />
                            {list.title}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )
}