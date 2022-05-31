import React from 'react'
import { deletePost } from "../UtilityFunctions/deletePost"
import { useState } from "react";
import { CommentCard } from './CommentCard';
export const PostCard = ({postObj, setPostsArray}) => {
    const [commentTextArr, setCommentArr] = useState([])
    const [commentText, setCommentText] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setCommentArr((currentCommentArr) => {
            return [...currentCommentArr, commentText]
        })
        setCommentText('')
    }
    return (
        <section className="PostCard">
            <p className ='postText'> {postObj.postText} <button className='button-64' onClick={()=>{deletePost(postObj, setPostsArray)}}>x</button></p>
            <audio useRef="audio_tag" className='audioPlayer' src={postObj.postAudioUrl} controls/>
            <form onSubmit={handleSubmit}>
                <label>
                    <h2>Post new comment:</h2>
                    <textarea className='postComment' value={commentText} onChange={(event) => {
                        setCommentText(event.target.value)
                    }}/>
                </label>
                <button type='submit' className='button-64' id='commentButton'>Comment</button>
            </form>
            <CommentCard commentTextArr={commentTextArr} setCommentArr={setCommentArr}/>

            
        </section>
    )
}