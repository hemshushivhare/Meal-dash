import { createSlice } from "@reduxjs/toolkit";

const CartSlice =createSlice({
name:"cart",
initialState:{
    Items:[]
},

reducers:{
    addItem:(state,action)=>{
        const newItem = action.payload;

        const existingItem = state.Items.find(item=>item.card.info.id === newItem.card.info.id);

        if(existingItem){
            existingItem.quantity += 1;
        }
        else{
            state.Items.push({...newItem,quantity : 1});
        }
    //    state.items.push(action.payload);
    },
    
    removeItem:(state,action)=>{
        const itemId = action.payload;
        const existingItem = state.Items.find(item => item.card.info.id === itemId);
      
        if (existingItem) {
          if (existingItem.quantity > 1) {
            existingItem.quantity -= 1;
          } else {
            // If the quantity becomes zero, remove the item from the cart
            state.Items = state.Items.filter(item => item.card.info.id !== itemId);
          }
        }

        //  state.items.pop();
    },
    

    clearCart:(state)=>{
        state.Items.length=0;
    }
}
});





export default CartSlice.reducer;
export const {addItem,removeItem,clearCart}=CartSlice.actions;