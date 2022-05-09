import { Home, VideoListing, SingleVideoPage } from "../pages";
import { Routes, Route } from "react-router-dom";

export const AppRouter = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/videoListing" element={<VideoListing />} />
            <Route path="singleVideo/:videoId" element = {<SingleVideoPage />} />
        </Routes>
    )
}