/** Home (container)
 * 
 * components: 
 * - TitleList
 */

import { connect } from "react-redux";
import TitleList from "../components/TitleList";

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps)(TitleList);
