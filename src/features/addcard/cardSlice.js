import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  cards: [
    
  ],
};
export const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard: (state, action) => {
      const card = action.payload;
      state.cards.push(card);
    },
    removeCard:(state,action)=>{
        state.cards=state.cards.filter((cardid)=>{
          return cardid.id !== action.payload
        })
    }
  },
});

export const { addCard,removeCard } = cardSlice.actions;
export default cardSlice.reducer;
