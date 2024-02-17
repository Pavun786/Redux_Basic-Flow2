import {configureStore} from "@reduxjs/toolkit"
import postsReducer from "../features/posts/postsSlice"
import usersReducer from "../features/users/usersSlice"

//here store is configured.
//after reducers are imported from slices.and used inside of store 
export const store = configureStore({
    reducer: {
        posts : postsReducer,
        users : usersReducer
    }
})