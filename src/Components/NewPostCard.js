import React from 'react'
export const NewPostCard = ({newPostObj, setNewPostObj, setPostsArray}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        setPostsArray((currentPostsArray) => {
            return [...currentPostsArray, newPostObj]
        })
        setNewPostObj({postText: '', postAudioUrl: ''})}

    const handleChange = (e) => {
        setNewPostObj({...newPostObj, [e.target.name]: e.target.value})
    }

    return (
        <section className="NewPostCard">
            <h2>New post:</h2>
          <form onSubmit={handleSubmit}>
            <label>
                Write a comment to provide more information about the song you want to find:
                <br></br>
                <textarea
                className="postBodyInput"
                value={newPostObj.postText}
                name="postText"
                onChange={handleChange}
                required
                />
            </label>
            <br></br>
            <label>
                Enter a link to an audio file you want to identify:
                <br></br>
                <input 
                className="postAudioUrl"
                value={newPostObj.postAudioUrl}
                name="postAudioUrl"
                onChange={handleChange}
                >
                </input>
            </label>
            <button type="submit" className="button-64">
                    Post
            </button>
           </form>
        </section>
    )
}