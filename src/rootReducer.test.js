import rootReducer from "./rootReducer";
import * as types from "./actionTypes";

// reference: https://redux.js.org/recipes/writing-tests

const INITIAL_STATE = {
  posts : {}
};

describe("rootReducer", function () {
  it('should return the initial state', () => {
    expect(rootReducer(undefined, {})).toEqual(INITIAL_STATE)
  });

  // it('should handle ADD_ITEM & REMOVE_ITEM', () => {
  //   const postId = 1
  //   const content = {
  //     title: "Test Title",
  //     description: "Test Description",
  //     body: "Test Body",
  //     comments: []
  //   };

  //   let updatedState = rootReducer(
  //     INITIAL_STATE,
  //     postId,
  //     content
  //   );

  //   let expectedState = {
  //       posts: {
  //           "1": {
  //               title: "Test Title",
  //               description: "Test Description",
  //               body: "Test",
  //               comments: []
  //           }
  //       }
       
  //   }

  //   // test that ADD_ITEM adds item to cart
  //   expect(updatedState).toEqual(expectedState);

    // TODO: test toBe on array reference (PURITY)

     // test that REMOVE_ITEM removes item from cart
//     expect(rootReducer(
//       updatedState,
//       {
//         type: types.REMOVE_ITEM,
//         id: 1
//       }
//     )).toEqual(INITIAL_STATE)
  // });
});