import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Tejas M",
      username: "iam_teju",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://scontent.fccj3-1.fna.fbcdn.net/v/t1.6435-9/33100545_200549277242202_8365492090875936768_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=ry1VXqnd-iUAX8SgJXY&_nc_oc=AQm9vGDXkk2gY7rKfhzywG3RQJewM636wKlB3TOEMlmqxKJnTGHaXm0Co1X0D84r63c&_nc_ht=scontent.fccj3-1.fna&oh=4f2898cc38054e9072f6bb280f966801&oe=60D4C912",
    });

    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://scontent.fccj3-1.fna.fbcdn.net/v/t1.6435-9/33100545_200549277242202_8365492090875936768_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=ry1VXqnd-iUAX8SgJXY&_nc_oc=AQm9vGDXkk2gY7rKfhzywG3RQJewM636wKlB3TOEMlmqxKJnTGHaXm0Co1X0D84r63c&_nc_ht=scontent.fccj3-1.fna&oh=4f2898cc38054e9072f6bb280f966801&oe=60D4C912" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>

        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
