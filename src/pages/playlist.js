import React from "react";
import { Link } from "react-router-dom";
import { usePlaylist } from "../contexts/allContext"
import { Sidebar, Navbar } from "../components/allComp";
export const PlayListPage = () => {
  document.title = "Vivir Videos | Playlists"
  const {
    videoState: { playList },
  } = usePlaylist();
  return (
    <div>
      <Sidebar />
      <Navbar />
      <h1 className="heading">Playlists</h1>
      {playList.length !== 0 ?
        <div className="genre-container">
          {playList.map(({ _id, title }) => (
            <div className="ui-component card card-with-textOverlay separate-playlist" key={_id}
              style={{ background: "none" }}
            >
              <div className="card-image">
                <Link to={`/playlist/${_id}`}
                ><img
                  src={`/assets/yourPlaylist.webp`} className="opaque-image"></img></Link>
              </div>
              <span className="genre-name"
                style={{ color: "white" }}
              >{title}</span>
            </div>
          ))}
        </div> : <h2 className="empty-heading">You don't have any playlists created</h2>
      }

    </div>
  );
};