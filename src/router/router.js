import { Home, VideoListing, SingleVideoPage, WatchLater, Login, SignUp, LikesPage, HistoryPage, PlayListPage, SinglePlaylistVideos } from "../pages";
import { Routes, Route } from "react-router-dom";
import { RequiresAuth } from "../pages/auth/requiresAuth";

export const AppRouter = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/videoListing" element={<VideoListing />} />
            <Route path="singleVideo/:videoId" element={<SingleVideoPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/watchLater" element={
                <RequiresAuth>
                    <WatchLater />
                </RequiresAuth>} />
            <Route path="/likes" element={
                <RequiresAuth>
                    <LikesPage />
                </RequiresAuth>} />
            <Route path="/history" element={
                <RequiresAuth>
                    <HistoryPage />
                </RequiresAuth>} />
            <Route path="/playlist" element={
                <RequiresAuth>
                    <PlayListPage />
                </RequiresAuth>} />
            <Route path="/playlist/:playlistId"
            element = {
                <RequiresAuth>
                    <SinglePlaylistVideos />
                </RequiresAuth>
            } />
            
        </Routes>
    )
}