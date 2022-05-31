import React from 'react'
import {NewPostCard} from "./NewPostCard";
import {FeedCard} from "./FeedCard";
import {useState} from "react";
export const Main = () => {
  const [newPostObj, setNewPostObj] = useState({postText: '', postAudioUrl: ''});
  const [postsArray, setPostsArray] = useState([])
  return (
    <main>
      <NewPostCard newPostObj={newPostObj}setNewPostObj={setNewPostObj} setPostsArray={setPostsArray}/>
      <FeedCard postsArray={postsArray} setPostsArray={setPostsArray}/>
    </main>
  );
}