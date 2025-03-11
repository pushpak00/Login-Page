import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../feature/jsonData/fetchPostSlice'

const store = configureStore({
    reducer: {
        post: postReducer
    }
})

export default store