import * as actions from './actions'
import * as types from './actionTypes'

// reference: https://redux.js.org/recipes/writing-tests


describe('actions', () => {
  it('should create an action to add a post', () => { 
    const TEST_POST = {
      postId: 1,
      title: "test title",
      description: "test description",
      body: "test body"
    }
   
    const expectedAction = {
      type: types.ADD_POST,
      postId: 1,
      content: { 
        title: "test title",
        description: "test description",
        body: "test body",
        comments: []
      }
    }
    expect(actions.addPost(TEST_POST)).toEqual(expectedAction)
  });

  it('should create an action to edit a post', () => {    
    const EDITED_POST = {
      postId: 1,
      title: "test title edit",
      description: "test description edit",
      body: "test body edit"
    };

    const expectedAction = {
      type: types.EDIT_POST,
      postId: 1,
      content: { 
        title: "test title edit",
        description: "test description edit",
        body: "test body edit"
      }
    };
    expect(actions.editPost(EDITED_POST)).toEqual(expectedAction)
  });

  it('should create an action to delete a post', () => {    
    const expectedAction = {
      type: types.DELETE_POST,
      postId: "1"
    };

    expect(actions.deletePost("1")).toEqual(expectedAction)
  });

  it('should create an action to add a comment', () => {    
    let newCommentObj = { "c1": "test comment"};
 
    const expectedAction = {
      type: types.ADD_COMMENT,
      postId: "1",
      newCommentObj: { "c1": "test comment"}
    }

    expect(actions.addComment("1", newCommentObj)).toEqual(expectedAction)
  });

  it('should create an action to delete a comment', () => {    
    const expectedAction = {
      type: types.DELETE_COMMENT,
      postId: "1",
      commentId: "2"
    }

    expect(actions.deleteComment("1", "2")).toEqual(expectedAction)
  });

})