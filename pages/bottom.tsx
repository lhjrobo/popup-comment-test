import React from "react";
import styled from "@emotion/styled";
import globalCSS from "./../styles/global";
import { Global } from "@emotion/core";

const Bottom = () => {
  const [commentContent, setCommentContent] = React.useState(
    "ここにコメント入力"
  );
  const [focusTrigger, setFocusTrigger] = React.useState(false);

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setCommentContent(e.target.value);
    console.log(commentContent);
  };
  const handleContentFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    if (focusTrigger === false) {
      setFocusTrigger(true);
      setCommentContent("");
    }
  };
  const handleSubmit = (e: React.MouseEvent<HTMLSpanElement>) => {
    setFocusTrigger(false);
    setCommentContent("ここにコメント入力");
  };

  return (
    <Background>
      <Global styles={globalCSS} />
      <>
        <BlackBox></BlackBox>
        <BlackBox></BlackBox>
        <BlackBox></BlackBox>
      </>
      <CommentBox>
        <CommentBoxTitle>
          <span>Comment</span>
          <CommentBoxButton onClick={handleSubmit}>Submit</CommentBoxButton>
        </CommentBoxTitle>
        <CommentBoxForm
          value={commentContent}
          onChange={handleContentChange}
          onFocus={handleContentFocus}
        ></CommentBoxForm>
      </CommentBox>
    </Background>
  );
};

const Background = styled.div`
  width: 100%;
  height: 200vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
`;

const BlackBox = styled.div`
  background-color: #000000;
  margin: 10%;
  width: 600px;
  height: 300px;
  align-self: center;
`;

const CommentBox = styled.div`
  width: 300px;
  height: 300px;
  background-color: #000000;
  right: 100px;
  bottom: 0px;
  position: fixed;
`;

const CommentBoxTitle = styled.div`
  font-weight: bold;
  margin: 15px 15px 0 15px;
  display: flex;
  justify-content: space-between;
`;

const CommentBoxForm = styled.textarea`
  width: 230px;
  height: 190px;
  margin: 15px;
  border-radius: 20px;
  border: 0px;
  background-color: #ffffff;
  padding: 20px;
  resize: none;
  font-size: 1.4rem;
  outline: none;
`;

const CommentBoxButton = styled.span`
  text-align: right;
  border: 0px;
  background-color: #000000;
  color: white;
  font-size: 1.4rem;
  cursor: pointer;
`;
export default Bottom;
