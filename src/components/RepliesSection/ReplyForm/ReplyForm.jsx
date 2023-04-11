import React, { useState } from "react";
import axios from "axios";
import { FormControl, FormGroup, Form, Button } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const ReplyForm = ({ comment, getAllReplies }) => {
  const [replyText, setReplyText] = useState("");
  const [user, token] = useAuth();

  console.log(replyText);
  async function addReply() {
    let newReply = {
      user: user.id,
      text: replyText,
      comment: comment.id,
    };

    console.log(user);

    let response = await axios.post(
      `http://127.0.0.1:8000/api/comments/${comment.id}/replies/`,
      newReply,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    if (response.status === 201) {
      await getAllReplies();
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addReply();
    setReplyText("");
  };

  return (
    <Form className="d-flex  flex-column m-3" onSubmit={handleSubmit}>
      <div className="d-flex align-items-center">
        <FormGroup>
          <FormControl
            placeholder="Reply to Comment?"
            className="shadow-sm p-1 mb-1 bg-body rounded input-box"
            type="text"
            onChange={(event) => setReplyText(event.target.value)}
            value={replyText}
          />
        </FormGroup>
        <Button className="button" type="submit">
          Reply
        </Button>
      </div>
    </Form>
  );
};

export default ReplyForm;
