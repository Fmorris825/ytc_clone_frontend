import React, { useState } from "react";
import { Link, renderMatches } from "react-router-dom";

import { Container, Button, Collapse } from "react-bootstrap";

const VideoPlayer = ({ videoId, activeVideo }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div>
        <h1>{activeVideo.title}</h1>
        <iframe
          id="ytplayer"
          type="text/html"
          width="640"
          height="360"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`}
          frameborder="0"
        ></iframe>
        <div className="d-flex justify-content-start">
          <Button
            className="button"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            Display Description
          </Button>
          <Collapse in={open}>
            <div id="example-collapse-text">{activeVideo.description}</div>
          </Collapse>
        </div>

        <Container>
          <Link to="/">Search Again!</Link>
        </Container>
      </div>
    </div>
  );
};

export default VideoPlayer;
