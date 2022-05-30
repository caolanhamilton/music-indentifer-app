
export const NewPostCard = ({newPostText, setNewPostText, setPostsArray}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        setPostsArray((currentPostsArray) => {
            let newPostObj = {'postText': newPostText, 'postAudioUrl': 'test'}
            return [...currentPostsArray, newPostObj]
        })
        setNewPostText("")
    }
    return (
        <section className="NewPostCard">
          <form onSubmit={handleSubmit}>
            <textarea
                className="input"
                value={newPostText}
                onChange={(e) => setNewPostText(e.target.value)}
                required
                />
            <button type="submit" className="add">
                    Post
            </button>
            </form>
        </section>
    )
}