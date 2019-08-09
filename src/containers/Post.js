/** Post (container) - mapStateToProps, mapDispatchToProps
- CommentForm (ADD_COMMENT)
- CommentList (store.blogs, DELETE_COMMENT)
- PostDisplay (store.blogs, DELETE_POST, DELETE_COMMENT)
- PostForm (EDIT_POST, not used ADD_POST)
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


