
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
          <form onSubmit={handleSubmit}>
            <textarea
                className="postBodyInput"
                value={newPostObj.postText}
                name="postText"
                onChange={handleChange}
                required
                />
            <label>
                Enter a link to an audio file you want to identify:
                <input 
                className="postAudioUrl"
                value={newPostObj.postAudioUrl}
                name="postAudioUrl"
                onChange={handleChange}
                >
                </input>
            </label>
            <button type="submit" className="add">
                    Post
            </button>
           </form>
        </section>
    )
}