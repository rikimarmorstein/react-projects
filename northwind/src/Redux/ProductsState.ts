import { createStore } from "redux";
import ProductModel from "../Models/ProductModel";

// 1. products state - the data we need at global application level
export class ProductsState {
    public products: ProductModel[] = [];
}

// 2. Action Types - list of actions - enum
export enum ProductActionType {
    FetchProducts,
    AddProduct,
    UpdateProduct,
    DeleteProduct
}

// 3. Action - an interface describing a single command
export interface ProductsAction {
    type: ProductActionType; // action type
    payload: any; // action data
}

// 4. action creators - functions to create action objects
export function fetchProductAction(products: ProductModel[]): ProductsAction {
    return { type: ProductActionType.FetchProducts, payload: products };
}

export function addProductAction(product: ProductModel): ProductsAction {
    return { type: ProductActionType.AddProduct, payload: product };
}

export function updateProductAction(product: ProductModel): ProductsAction {
    return { type: ProductActionType.UpdateProduct, payload: product };
}

export function deleteProductAction(id: number): ProductsAction {
    return { type: ProductActionType.DeleteProduct, payload: id };
}

// 5. reducer - a single function performing any of the above actions

export function productReducer(currentState: ProductsState = new ProductsState(), action: ProductsAction): ProductsState {
    const newState = { ...currentState }; // duplicate current state

    switch (action.type) {
        case ProductActionType.FetchProducts: // here payload is all products
            newState.products = action.payload;
            break;
        case ProductActionType.AddProduct: // here payload is a single product to add
            newState.products.push(action.payload);
            break;
        case ProductActionType.UpdateProduct: // here payload is a single product to update
            const indexToUpdate = newState.products.findIndex(p => p.id === action.payload.id);
            if (indexToUpdate >= 0) newState.products[indexToUpdate] = action.payload;
            break;
        case ProductActionType.DeleteProduct: // here payload is an id of product to delete
            const indexToDelete = newState.products.findIndex(p => p.id === action.payload);
            if (indexToDelete >= 0) newState.products.splice(indexToDelete, 1);
            break;
    }

    return newState;
}

// 6 Products Store object to manage all products state

export const productsStore = createStore(productReducer);

