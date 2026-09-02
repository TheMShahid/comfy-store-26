import { toast } from "react-toastify";
import { createSlice } from "@reduxjs/toolkit";

const defualtState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500, // 100 cents means 1$, 500 cents 5$, 1000 cents 10$
  tax: 0,
  orderTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: defualtState,
  reducers: {
    addItem: (state, action) => {
      console.log(action.payload);
    },
    clearCart: (state, action) => {},
    removeItem: (state, action) => {},
    editItem: (state, action) => {},
  },
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;
