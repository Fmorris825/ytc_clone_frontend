import React, { useEffect, useState } from "react";
import API_KEYS from "../../../API_KEYS";
import VideoCards from "../VideoCards/VideoCards";
import axios from "axios";

const RelatedVideos = ({ videoId, setVideoId, setActiveVideo }) => {
  const [relatedVideos, setRelatedVideos] = useState(false);

  useEffect(() => {
    getRelatedVideos();
  }, [videoId]);

  async function getRelatedVideos() {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&part=snippet&type=video&key=${API_KEYS.apiKey}`
    );
    setRelatedVideos(response.data);
  }

  console.log(`Here's the data for related videos: ${relatedVideos.items}`);

  return relatedVideos ? (
    <div>
      {relatedVideos.items.map((result, index) => {
        return (
          <VideoCards
            result={result}
            key={index}
            setVideoId={setVideoId}
            setActiveVideo={setActiveVideo}
          />
        );
      })}
      ;
    </div>
  ) : null;
};

export default RelatedVideos;
