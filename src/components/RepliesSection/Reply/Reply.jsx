import React from "react";
import "./Reply.css";

const Reply = ({ reply }) => {
  return (
    <div className="ms-2 me-auto d-flex flex-column justify-content-end align-items-end">
      <div className="reply-user">{reply.user.username}:</div>
      <div className="reply-text">{reply.text}</div>
    </div>
  );
};

export default Reply;
