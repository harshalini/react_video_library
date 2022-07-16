import { useReducer, useRef, useState } from "react";
import { usePlaylist } from "../../contexts/playlist-context";
import { ClickOutSideHandler } from "../../hooks/clickOutside";
import { ImCross } from "react-icons/im"
import { AiFillDelete } from "react-icons/ai";
export const CreatePlaylist = (video) => {
    const { videoState: { playList }, CreatePlaylistHandler, PlaylistVideoHandler, RemovePlaylistVideoHandler, showPlayListM, DeletePlaylistHandler } = usePlaylist()
    const [playlistContent, setPlaylistContent] = useState({
        title: "",
        description: ""
    })
    const modelRef = ClickOutSideHandler(() => showPlayListM(false))
    return (
        <div className="playlist-modal" ref={modelRef}>
            <button className="close-btn"
                onClick={() => showPlayListM(false)}>
                <ImCross />
            </button>
            <p className="playlist-heading">Add to Playlist</p>
            <form className="playlist-input"
            onSubmit={(e) => {
                e.preventDefault();
                CreatePlaylistHandler(playlistContent)
                setPlaylistContent({title: "", description: ""})
            }}>
                <input value={playlistContent.title}
                    type="text" placeholder="*title"
                    onChange={(e) => setPlaylistContent({ ...playlistContent, title: e.target.value })}
                    required
                />
                <input value={playlistContent.description}
                    type="text" placeholder="description"
                    onChange={(e) => setPlaylistContent({ ...playlistContent, description: e.target.value })}
                />
                <button type="submit" className="create-btn">
                    Create
                </button>
            </form>
            <div className="playlist-lists">
                {playList.map(list => (
                    <div className="playlist-name">
                        <input type="checkbox" id={video._id}
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
                        <label htmlFor={video._id}>
                            {list.title}
                        </label>
                        <div>
                        <AiFillDelete 
                        className="delete-icon"
                        onClick={() => DeletePlaylistHandler(list._id)}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}