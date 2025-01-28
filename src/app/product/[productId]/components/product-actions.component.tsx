'use client';
import { useAppDispatch, useAppSelector } from "@/hooks/redux.hooks";
import { CartProduct, CartState } from "@/interfaces";
import { updateCartState } from "@/store/cart/cart.slice";
import { useState } from "react";
import { add } from 'ionicons/icons';

export default function ProductActions({ product }: { product: any }) {
    const { cartProducts, productsKeys, subtotal, shipment, itemsQuantity } = useAppSelector(store => store.cart);

    const [isInCart, setIsInCart] = useState(productsKeys.includes(product.id));

    const dispatch = useAppDispatch();

    const addProductToCart = ()  => {
        let cartProductsCopy = [...cartProducts];
        let productsKeysCopy = [...productsKeys];
        
        let newProduct: CartProduct = {
            id: product.id,
            name: product.title,
            price: product.price,
            quantity: 1,
            subtotal: product.price,
            image: product.image
        }

        cartProductsCopy.push(newProduct);
        productsKeysCopy.push(product.id);

        let newSubtotal = subtotal +  product.price;
        let newTotal = newSubtotal + shipment;
        let newItemsQuantity = itemsQuantity + 1;

        let cartPayload: CartState = {
            cartProducts: cartProductsCopy,
            productsKeys: productsKeysCopy,
            subtotal: newSubtotal,
            shipment,
            total: newTotal,
            itemsQuantity: newItemsQuantity
        }

        dispatch(updateCartState(cartPayload));

        setIsInCart(true);
    }

    return (
        <>
            {
                isInCart &&
                <div className="w-1/3 grid grid-cols-4 gap-2">
                    <div className="flex">
                        <button className="bg-primary hover:bg-primary-tint flex justify-center px-4 py-1 rounded-md">
                            <img src="/svg/minus.svg" alt="plus" className="w-[25px] h-[25px] object-contain" />
                        </button>
                    </div>

                    <div className="col-span-2">
                        <input 
                            type="text"
                            inputMode="numeric"
                            id="quantity"
                            name="quantity"
                            value={1}
                            className="w-full h-full text-center border border-solid border-primary rounded-md"
                        />
                    </div>

                    <div className="flex">
                        <button className="bg-primary hover:bg-primary-tint flex justify-center px-4 py-1 rounded-md">
                            <img src="/svg/plus.svg" alt="plus" className="h-[25px] object-contain"  />
                        </button>
                    </div>
                </div>
            }

            {
                !isInCart &&
                <button
                    onClick={addProductToCart}
                    className="bg-primary hover:bg-primary-tint w-1/2 px-4 py-2 rounded-full text-primary-contrast font-bold"
                >
                    COMPRAR
                </button>
            }
        </>
    );
}