import {NewPostCard} from "./NewPostCard";
import {FeedCard} from "./FeedCard";
import { useState } from "react";
export const Main = () => {
  const [newPostText, setNewPostText] = useState("")
  const [postsArray, setPostsArray] = useState([])
  return (
    <main>
      <NewPostCard newPostText={newPostText}setNewPostText={setNewPostText} setPostsArray={setPostsArray}/>
      <FeedCard postsArray={postsArray} setPostsArray={setPostsArray}/>
    </main>
  );
}