import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import "./CommentForm.css";

import {
  FormLabel,
  FormControl,
  FormGroup,
  Form,
  Button,
} from "react-bootstrap";

const CommentForm = ({ getAllComments, videoId, token }) => {
  const [commentText, setCommentText] = useState("");

  async function addComment() {
    let newComment = {
      text: commentText,
      video_id: videoId,
    };

    try {
      let response = await axios.post(
        `http://127.0.0.1:8000/api/comments/`,
        newComment,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (response.status === 201) {
        await getAllComments();
      }
    } catch (error) {
      console.log(error.response.data);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addComment();
    setCommentText("");
  };

  return (
    <Form className="d-flex  flex-column m-3" onSubmit={handleSubmit}>
      <div className="form-title">What do you want to comment?</div>
      <div className="d-flex align-items-center">
        <FormGroup>
          <FormControl
            placeholder="Comment Here?"
            className="shadow rounded input-box"
            type="text"
            onChange={(event) => setCommentText(event.target.value)}
            value={commentText}
          />
        </FormGroup>
        <Button className="button" type="submit">
          Comment
        </Button>
      </div>
    </Form>
  );
};

export default CommentForm;
