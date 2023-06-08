import { configureStore } from '@reduxjs/toolkit';
import productSliceReducer from './productSlice';

// export default configureStore({
//   reducer: {},
// })

export const store=configureStore({
    reducer:{
           product:productSliceReducer
    }
})

