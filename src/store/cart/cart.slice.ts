
import { CartState } from "@/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: CartState = {
    cartProducts: [],
    productsKeys: ['2'],
    subtotal: 0,
    shipment: 0,
    total: 0,
    itemsQuantity: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        updateCartState: (state, action: PayloadAction<CartState>) => {
            state.cartProducts = action.payload.cartProducts;
            state.productsKeys = action.payload.productsKeys;
            state.subtotal = action.payload.subtotal;
            state.shipment = action.payload.shipment;
            state.total = action.payload.total;
            state.itemsQuantity = action.payload.itemsQuantity;
        },
        resetCartState: (state) => {
            state.cartProducts = [];
            state.productsKeys = [];
            state.subtotal = 0;
            state.shipment = 0;
            state.total = 0;
            state.itemsQuantity = 0;
        } 
    }
})

export const { updateCartState, resetCartState } = cartSlice.actions;