import { createSlice } from "@reduxjs/toolkit";
import lists from "../api/movies.json";

const initialState = {
  myList: lists.mylist.reduce(
    (prev, curr) => ({ ...prev, [curr.id]: curr }),
    {}
  ),
  recommendList: lists.recommendations.reduce(
    (prev, curr) => ({ ...prev, [curr.id]: curr }),
    {}
  ),
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
// export const incrementAsync = createAsyncThunk(
//   "lists/fetchCount",
//   async (amount) => {
//     const response = await fetchCount(amount);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

export const listsSlice = createSlice({
  name: "lists",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    add: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state[action.payload.list][action.payload.movie.id] =
        action.payload.movie;
    },
    remove: (state, action) => {
      delete state[action.payload.list][action.payload.movie.id];
    },
  },
});

export const { add, remove } = listsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.lists.value)`
export const selectMyList = (state) => state.lists.myList;
export const selectRecommendList = (state) => state.lists.recommendList;

export default listsSlice.reducer;
