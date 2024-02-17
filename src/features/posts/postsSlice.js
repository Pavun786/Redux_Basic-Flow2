import {createSlice, nanoid} from "@reduxjs/toolkit"
import {sub} from "date-fns"

const initialState = [
    {
        id:"1",
        title : "Learning Redux Toolkit",
        content : "Its easy",
        date : sub(new Date(),{minutes:10}).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    },
    {
        id : "2",
        title : "Subscribe...",
        content : "Like and Share this video",
        date : sub(new Date(),{minutes:5}).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    }
]

const postsSlice = createSlice({
    name : "posts",
    initialState,
    reducers:{
  //----------------------
    //    postAdded(state,action){
    //      state.push(action.payload)
    //    }
  //----------------------- or
//From the below ,we structure the format.
//ie: prepare callback take title,content,
//after it return payload.i n this stage we create a unique id
//after its passed to reducer 
       postAdded : {
         reducer(state,action){
            state.push(action.payload)
         },
         prepare(title,content,userId){
            return{
                payload : { id : nanoid(),
                            title,
                            content,
                            date : new Date().toISOString(),
                            userId,
                            reactions: {
                                thumbsUp: 0,
                                wow: 0,
                                heart: 0,
                                rocket: 0,
                                coffee: 0
                            }
                          }
                
                     
            }
         }
       },

       //this reducer action is used to increment the count of reaction
       reactionAdded(stage,action){
        
        const {postId,reaction} = action.payload;
       
        //to pointing the which post liked by user
        const existingPost = stage.find(post=> post.id === postId)
       
        if(existingPost){
          //to represent the which reaction is liked  
          existingPost.reactions[reaction]++
        }
    }    
     
    }
})

//the below line write for,incase if any changes done in slice,then we must some changes in all components(using useSelector)
//so,we commonly write here
export const selectAllPosts = (state) => state.posts

export const {postAdded,reactionAdded} = postsSlice.actions;

export default postsSlice.reducer