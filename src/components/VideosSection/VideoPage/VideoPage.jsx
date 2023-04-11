import VideoPlayer from "../VideoPlayer/VideoPlayer";

import { Container } from "react-bootstrap";
import CommentList from "../../CommentsSection/CommentList/CommentList";

import "bootstrap/dist/css/bootstrap.min.css";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import "./VideoPage.css";

const VideoPage = ({
  videoId,
  token,
  activeVideo,
  setVideoId,
  setActiveVideo,
}) => {
  return (
    <div className="d-flex">
      <div className="comment-column d-flex justify-content-center">
        <CommentList videoId={videoId} token={token} />
      </div>
      <Container className="video-column">
        <VideoPlayer videoId={videoId} activeVideo={activeVideo} />
        <RelatedVideos
          videoId={videoId}
          setVideoId={setVideoId}
          setActiveVideo={setActiveVideo}
        />
      </Container>
    </div>
  );
};

export default VideoPage;
