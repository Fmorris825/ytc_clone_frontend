import React from "react";
import { useNavigate } from "react-router-dom";
import "./SearchResult.css";

const SearchResult = ({ setVideoId, result, setActiveVideo }) => {
  const navigate = useNavigate();

  function handleSelection(event) {
    event.preventDefault();
    setVideoId(result.id.videoId);
    setActiveVideo(result.snippet);
    navigate(`/VideoPage/${result.id.videoId}`);
  }

  return (
    // <Link to="/VideoPlayer">
    <div className="d-flex justify-content-start m-5">
      <img
        className="shadow mb-10 bg-white rounded pointer thumbnail"
        src={result.snippet.thumbnails.medium.url}
        onClick={handleSelection}
      />
      <div className="d-flex align-items-center flex-direction: row">
        <h6
          className="d-flex justify-content-start m-2 pointer text-shadow"
          onClick={handleSelection}
        >
          {result.snippet.title}
        </h6>
        <div className="d-flex justify-content-start m-2">
          {result.snippet.channelTitle}{" "}
        </div>
      </div>
    </div>
    // {/* </Link> */}
  );
};

export default SearchResult;
