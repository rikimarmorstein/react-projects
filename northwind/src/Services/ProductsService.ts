import axios from "axios";
import ProductModel from "../Models/ProductModel";
import { addProductAction, deleteProductAction, fetchProductAction, ProductActionType, productsStore, updateProductAction } from "../Redux/ProductsState";
import appConfig from "../Utils/Config";

class ProductsService{
    public async getAllProducts():Promise<ProductModel[]>{
        //if there are no products 
        if(productsStore.getState().products.length===0){
const response=await axios.get<ProductModel[]>(appConfig.productsUrl);
const products = response.data;
// productsStore.dispatch({type: ProductActionType.FetchProducts, payload: products})
productsStore.dispatch(fetchProductAction(products));
return products;    
}
return productsStore.getState().products;
}

public async getOneProduct(id: number):Promise<ProductModel>{
    // const response=await axios.get<ProductModel>(appConfig.productsUrl+id);
    // const product = response.data;
    // return product;  
    return productsStore.getState().products.find(p=>p.id===id);  
    }

    
    public async addProduct(product: ProductModel): Promise<void> {

        // convert the JSON to FormData object
        const formData = new FormData();

        formData.append("name", product.name);
        formData.append("price", product.price.toString());
        formData.append("stock", product.stock.toString());
        formData.append("image", product.image as File);

        const response = await axios.post<ProductModel>(appConfig.productsUrl, formData);
        const addedProduct = response.data;

        // Redux - update golbal state about a newly added product
        productsStore.dispatch(addProductAction(addedProduct));
    }

    public async deleteProduct(id: number): Promise<void> {
        await axios.delete(appConfig.productsUrl + id);
        // Redux
        productsStore.dispatch(deleteProductAction(id));
    }
    
    public async updateProduct(product: ProductModel): Promise<void> {

        // convert the JSON to FormData object
        const formData = new FormData();
        
        formData.append("name", product.name);
        formData.append("price", product.price.toString());
        formData.append("stock", product.stock.toString());
        formData.append("image", product.image as File);
        
        const response = await axios.put<ProductModel>(appConfig.productsUrl + product.id, formData);
        const updatedProduct = response.data;
        
        // Redux
        productsStore.dispatch(updateProductAction(updatedProduct));
    }


}

const productService = new ProductsService();

// externalize an instance of the service - like singleton
export default productService;