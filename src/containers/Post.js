/** Post (container)
 * 
 * props from App:
 * - id: post id from URL variable via rtProps
 * - posts: { id: { title, description, content, comments }, ...} from redux store.posts
 * - history
 * 
 * container around the following components:
 * - PostDisplay (posts, deletePost, deleteComment)
 * -- CommentForm (addComment)
 * -- CommentList (posts, deleteComment)
 * -- PostForm (editPost)
 * 
*/

import { connect } from "react-redux";
import PostDisplay from "../components/PostDisplay";
import { getPostDetailFromApi, deleteComment, addComment, deletePost, editPost, addPost } from "../actions";

function mapStateToProps(state) {
  return { posts: state.postsDetails };
}

const mapDispatchToProps = {
  addComment,
  deleteComment,
  deletePost,
  editPost,
  addPost,
  getPostDetailFromApi
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDisplay); 


