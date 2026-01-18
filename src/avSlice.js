import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
        img: "https://pixabay.com/images/download/projector-7023604_1920.jpg",
        name: "Projectors",
        cost: 200,
        quantity: 0,
    },
    {
        img: "https://pixabay.com/images/download/speaker-5800162_1920.jpg",
        name: "Speaker",
        cost: 35,
        quantity: 0,
    },
    {
        img: "https://pixabay.com/images/download/microphone-626618_1920.jpg",
        name: "Microphones",
        cost: 45,
        quantity: 0,
    },
    {
        img: "https://pixabay.com/images/download/table-8429665_1920.jpg",
        name: "Whiteboards",
        cost: 80,
        quantity: 0,
    },

    {
        img: "https://pixabay.com/images/download/exit-335818_1920.jpg",
        name: "Signage",
        cost: 80,
        quantity: 0,
    },  
  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
        const {payload: index} = action;
        const item = state[index];
        if(item){
            item.quantity++;
        }
      
    },
    decrementAvQuantity: (state, action) => {
        const {payload: index} = action;
        const item = state[index];
        if(item && item.quantity > 0){
            item.quantity--;            
        }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
