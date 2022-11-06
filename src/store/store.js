import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import quiz from "./quiz/reducer";

const rootReducer = combineReducers({
  quiz,
})

const store = configureStore({
  reducer: rootReducer,
});


export default store;