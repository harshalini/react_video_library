import axios from "axios";
import { useContext, createContext, useState, useEffect } from "react";
const VideoContext = createContext([]);

const VideosProvider = ({ children }) => {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { videos }
        } = await axios.get("/api/videos");
        setVideo(videos);
      } catch (error) {
        console.log("an error occured", error);
      }
    })();
  }, []);

  return (
    <VideoContext.Provider value={{ video }}>
      {children}
    </VideoContext.Provider>
  );
};

const useVideo = () => useContext(VideoContext);
export { useVideo, VideosProvider };