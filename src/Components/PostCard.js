import { deletePost } from "../UtilityFunctions/deletePost"
export const PostCard = ({postObj, setPostsArray}) => {
    return (
        <section className="PostCard">
            <p>{postObj.postText + postObj.postAudioUrl} <button onClick={()=>{deletePost(postObj, setPostsArray)}}>x</button></p>
        </section>
    )
}