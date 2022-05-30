export const deletePost = (postObjToDel, setPostsArray) => {
    setPostsArray((currentPostsArray) => {
      return currentPostsArray.filter((post) => post.postText !== postObjToDel.postText);
    });
  };