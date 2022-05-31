import React from 'react'
import { PostCard } from "./PostCard";

export const FeedCard = ({postsArray, setPostsArray}) => {
  return (
    <section className="FeedCard">
      <h2>Community feed:</h2>
      {postsArray.map(postObj => {
          return (
            <PostCard postObj={postObj} postsArray={postsArray} setPostsArray={setPostsArray}></PostCard>
          )
      })}
    </section>
  );
}