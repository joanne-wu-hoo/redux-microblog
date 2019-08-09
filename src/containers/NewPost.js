/** NewPost (container)
 * 
 * components:
 * - PostForm
 * 
 */

import { connect } from "react-redux";
import PostForm from "../components/PostForm";
import { addPost } from "../actions";

const mapDispatchToProps = {
  addPost
}

export default connect(
  null,
  mapDispatchToProps
)(PostForm);
