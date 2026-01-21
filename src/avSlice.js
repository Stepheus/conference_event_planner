import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
        img: "https://cdn.pixabay.com/photo/2022/02/20/02/29/projector-7023604_1280.jpg",
        name: "Projectors",
        cost: 200,
        quantity: 0,
    },
    {
        img: "https://cdn.pixabay.com/photo/2017/06/23/21/16/speakers-2435926_1280.jpg",
        name: "Speaker",
        cost: 35,
        quantity: 0,
    },
    {
        img: "https://cdn.pixabay.com/photo/2016/03/16/21/23/microphone-1261793_1280.jpg",
        name: "Microphones",
        cost: 45,
        quantity: 0,
    },
    {
        img: "https://cdn.pixabay.com/photo/2023/12/04/14/58/table-8429665_1280.jpg",
        name: "Whiteboards",
        cost: 80,
        quantity: 0,
    },

    {
        img: "https://cdn.pixabay.com/photo/2014/05/02/00/21/exit-335818_1280.jpg",
        name: "Signage",
        cost: 80,
        quantity: 0,
    },  
  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
        const {payload: index} = action;
        if(state[index]){
            state[index].quantity++;
        }
    },
    decrementAvQuantity: (state, action) => {
         const {payload: index} = action;
        if(state[index] && state[index].quantity >0){
            state[index].quantity--;
        }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
