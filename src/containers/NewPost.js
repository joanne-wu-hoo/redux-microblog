/** NewPost (container) -  mapDispatchToProps
- PostForm (ADD_POST, not used EDIT_POST)
*/

import { connect } from "react-redux";
import PostForm from "../components/PostForm";
import { addPost } from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    addPost: (newPostObj) => dispatch(addPost(newPostObj))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(PostForm);
