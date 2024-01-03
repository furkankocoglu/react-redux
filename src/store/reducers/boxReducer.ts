import { createSlice } from '@reduxjs/toolkit';
import Box from '../../Models/Box';
import { box } from '../initialValues/initialValues';
export interface BoxState{
    box:Box
}
const initialState: BoxState = {
    box:box
  };
  
export type BoxAction={
    type:string,
    payload:Box
}

const boxSlice = createSlice({
    name: 'boxSlice',
    initialState,
    reducers: {
      setBox: (state, action: BoxAction) => {
        state.box = action.payload;
      },
      resetBox: (state) => {
        state.box = box;
      }
    }
  });
  
  export const { setBox, resetBox } = boxSlice.actions;
  export default boxSlice.reducer;