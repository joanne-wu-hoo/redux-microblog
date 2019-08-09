/** Post (container)
 * 
 * props:
 * - history
 * 
 * is a container around the following components:
 * - PostDisplay (posts, deletePost, deleteComment)
 * -- CommentForm (addComment)
 * -- CommentList (posts, deleteComment)
 * -- PostForm (editPost)
 * 
*/

import { connect } from "react-redux";
import PostDisplay from "../components/PostDisplay";
import { deleteComment, addComment, deletePost, editPost, addPost } from "../actions";

function mapStateToProps(state) {
  return { posts: state.posts };
}

const mapDispatchToProps = {
  addComment,
  deleteComment,
  deletePost,
  editPost,
  addPost
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDisplay); 


