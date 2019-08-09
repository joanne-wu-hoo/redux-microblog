/** Home (container) 
 * 
 * container around the following components: 
 * - TitleList
 * 
 */

import { connect } from "react-redux";
import TitleList from "../components/TitleList";
import { getPostsSummaryFromApi } from "../actions"

function mapStateToProps(state) {
  return { posts: state.postsSummary };
}

export default connect(mapStateToProps,{ getPostsSummaryFromApi })(TitleList);
