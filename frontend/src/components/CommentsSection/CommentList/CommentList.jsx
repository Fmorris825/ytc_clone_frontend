import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentForm from "../CommentForm/CommentForm";
import Comment from "../Comment/Comment";
import useAuth from "../../../hooks/useAuth";
import { Container, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CommentList.css";

const CommentList = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  const [user, token] = useAuth();

  useEffect(() => {
    getAllComments();
  }, [comments.length, videoId]);

  async function getAllComments() {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/comments/${videoId}/`
    );
    setComments(response.data);
  }
  return user ? (
    <div className="d-flex justfify-content-start flex-column">
      <CommentForm
        getAllComments={getAllComments}
        token={token}
        videoId={videoId}
      />
      <div>
        <ListGroup as="ul">
          {comments.map((comment, index) => {
            return (
              <ListGroupItem
                as="li"
                className="flex-column justify-content-start align-items-start m-1 shadow comment_body"
              >
                {
                  <Comment
                    comment={comment}
                    key={index}
                    user={user}
                    token={token}
                  />
                }
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </div>
    </div>
  ) : (
    <div className="d-flex align-items-center justfify-content-start flex-column">
      <h5>
        <Link to="/login">Login</Link> or <Link to="/register">register</Link>{" "}
        to comment.
      </h5>
      <ListGroup as="ul">
        {comments.map((comment, index) => {
          return (
            <ListGroupItem
              as="li"
              className="flex-column justify-content-start align-items-start"
            >
              {<Comment comment={comment} key={index} user={user} />}
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default CommentList;
