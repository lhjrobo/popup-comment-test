import React from "react";
import styled from "@emotion/styled";
import globalCSS from "../styles/global";
import { Global } from "@emotion/core";
import { useSpring, animated, interpolate } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";

const BottomSlide = () => {
  const [commentContent, setCommentContent] = React.useState(
    "ここにコメント入力"
  );
  const [focusTrigger, setFocusTrigger] = React.useState(false);
  const [cursorOnTrig, setCursorOnTrig] = React.useState(false);
  const [openTrig, setOpenTrig] = React.useState(false);

  const { x } = useSpring({ x: openTrig ? 0 : 250 });
  const { o } = useSpring({ o: openTrig ? 1 : 0 });
  const { s } = useSpring({ s: cursorOnTrig ? 1.1 : 1 });

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setCommentContent(e.target.value);
    console.log(commentContent);
  };
  const handleContentFocus = () => {
    if (focusTrigger === false) {
      setFocusTrigger(true);
      setCommentContent("");
    }
  };
  const handleSubmit = () => {
    if (openTrig === true && commentContent !== "") {
      setFocusTrigger(false);
      setCommentContent("ここにコメント入力");
    }
  };

  return (
    <Background
      onClick={(e) => {
        e.stopPropagation();
        setOpenTrig(false);
      }}
    >
      <Global styles={globalCSS} />
      <>
        <BlackBox></BlackBox>
        <BlackBox></BlackBox>
        <BlackBox></BlackBox>
      </>
      <Icon
        onMouseEnter={() => setCursorOnTrig(true)}
        onMouseLeave={() => setCursorOnTrig(false)}
        onClick={(e) => {
          e.stopPropagation();
          setOpenTrig(true);
        }}
        style={{
          transform: interpolate([s], (s) => `scale(${s})`),
          opacity: interpolate([o], (o) => `${1 - o}`),
        }}
      >
        <FontAwesomeIcon icon={faComment} />
      </Icon>
      <CommentBox
        style={{
          transform: interpolate([x], (x) => `translate3d(0,${x}px,0)`),
          opacity: interpolate([o], (o) => `${o}`),
        }}
      >
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

const CommentBox = animated(styled.div`
  width: 300px;
  height: 300px;
  background-color: #000000;
  right: 100px;
  bottom: 0px;
  position: fixed;
`);

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

const Icon = animated(styled.div`
  width: 50px;
  height: 50px;
  position: fixed;
  text-align: center;
  line-height: 50px;
  right: 50px;
  bottom: 50px;
  color: white;
  background-color: black;
  border-radius: 20px;
  cursor: pointer;
`);
export default BottomSlide;
