import { CartProduct } from "./product.interface";

export interface CartState {
    cartProducts: CartProduct[],
    productsKeys: string[],
    subtotal: number,
    shipment: number,
    total: number,
    itemsQuantity: number,
}