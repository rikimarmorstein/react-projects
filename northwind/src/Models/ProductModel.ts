class ProductModel{
// a: number=1;
// b: number|undefined;
// c?:number;
// d!:number;

public id: number;
public name:string;
public price: number;
public stock:number;
public imageName:string;

public image: File | FileList;

}

export default ProductModel;