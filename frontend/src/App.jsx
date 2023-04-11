// General Imports
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import useAuth from "./hooks/useAuth";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SearchPage from "./components/SearchComponents/SearchPage/SearchPage";
import VideoPage from "./components/VideosSection/VideoPage/VideoPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
// import PrivateRoute from "./utils/PrivateRoute";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { useEffect } from "react";

function App() {
  const [videoId, setVideoId] = useState("");
  const [user, token] = useAuth();
  const [activeVideo, setActiveVideo] = useState({});

  return (
    <div className="body">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <SearchPage
              setVideoId={setVideoId}
              setActiveVideo={setActiveVideo}
            />
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path={`/VideoPage/${videoId}`}
          element={
            <VideoPage
              videoId={videoId}
              token={token}
              activeVideo={activeVideo}
              setVideoId={setVideoId}
              setActiveVideo={setActiveVideo}
            />
          }
        />
        <Route path="/SearchPage" element={<SearchPage token={token} />} />
        {/* <Route
          path="/VideoPlayer"
          element={<VideoPlayer videoId={videoId} />}
        /> */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
