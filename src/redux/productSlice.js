import { createSlice } from "@reduxjs/toolkit";

const initialState={
    movieList:[],
    // cartItem:[]
}

export const porductSlice=createSlice({
    name:"product",
    initialState,
    reducers:{
           setMovieData:(state,action)=>{
            console.log(action)
            state.movieList=[...action.payload]
           }

    }
})


export const { setMovieData}=porductSlice.actions
export default porductSlice.reducer