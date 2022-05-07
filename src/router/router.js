import { Home, VideoListing } from "../pages";
import { Routes, Route } from "react-router-dom";

export const AppRouter = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/videoListing" element={<VideoListing />} />
        </Routes>
    )
}