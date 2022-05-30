import { deletePost } from "../UtilityFunctions/deletePost"
export const PostCard = ({postObj, setPostsArray}) => {
    return (
        <section className="PostCard">
            <p>{postObj.postText} <button onClick={()=>{deletePost(postObj, setPostsArray)}}>x</button></p>
        </section>
    )
}