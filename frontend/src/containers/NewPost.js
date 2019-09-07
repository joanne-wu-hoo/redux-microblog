/** NewPost (container)
 * 
 * props from App:
 * - mode: "add"
 * - history
 * 
 * container around the following components:
 * - PostForm
 * 
 */

import { connect } from "react-redux";
import PostForm from "../components/PostForm";
import { addNewPostThroughApi  } from "../actions";

const mapDispatchToProps = {
  addNewPostThroughApi
}

export default connect(
  null,
  mapDispatchToProps
)(PostForm);
