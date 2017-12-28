import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Tweet() {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <NameWithHandle /> <Time />
        <Message />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://www.gravatar.com/avatar/nothing"
      alt="avatar"
    />
  );
}

function Message() {
  return (
    <div className="message">This message is less than 140 character long.</div>
  );
}

function NameWithHandle() {
  return (
    <span className="name-with-handle">
      <span className="name">Tejas</span>
      <span className="handle">@tejaser</span>
    </span>
  );
}

const Time = () => <span className="time">3 hour ago</span>;
const ReplyButton = () => <i className="fa fa-reply reply-button" />;
const RetweetButton = () => <i className="fa fa-retweet retweet-button" />;
const LikeButton = () => <i className="fa fa-heart like-button" />;
const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

ReactDOM.render(<Tweet />, document.querySelector("#root"));
