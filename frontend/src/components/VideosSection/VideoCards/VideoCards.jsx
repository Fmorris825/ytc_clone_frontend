import React from "react";
import { useNavigate } from "react-router-dom";

const VideoCards = ({ setVideoId, result, setActiveVideo }) => {
  const navigate = useNavigate();

  function handleSelection(event) {
    event.preventDefault();
    setVideoId(result.id.videoId);
    setActiveVideo(result.snippet);
    navigate(`/VideoPage/${result.id.videoId}`);
  }

  return (
    // <Link to="/VideoPlayer">
    <div className="d-flex justify-content-start  flex-direction shadow p-3 m-2">
      <img
        className="rounded pointer text-shadow thumbnail"
        src={result.snippet.thumbnails.default.url}
        onClick={handleSelection}
      />
      <div className="d-flex align-items-center flex-direction: row">
        <p
          className="d-flex justify-content-start m-2 pointer text-shadow"
          onClick={handleSelection}
        >
          {result.snippet.title}
        </p>
        <div className="d-flex justify-content-start m-2">
          {result.snippet.channelTitle}{" "}
        </div>
      </div>
    </div>
    // {/* </Link> */}
  );
};

export default VideoCards;
