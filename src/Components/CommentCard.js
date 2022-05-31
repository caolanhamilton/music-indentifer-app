import React from 'react'
export const CommentCard = ({commentTextArr, setCommentArr}) => {
    return (
      <section className="FeedCard">
        <h2>Comments:</h2>
        {commentTextArr.map(commentText => {
            return (
              <p className='commentText'>{commentText}</p>
            )
        })}
      </section>
    )};