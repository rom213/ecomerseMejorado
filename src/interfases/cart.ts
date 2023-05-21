import { Products } from "./products";



export interface Carshop{
    createdAt:string,
    id:number,
    product:Products,
    productId:number,
    quantity:number,
    updatedAt:string,
    userId:string
}


export interface CarAdd{
    createdAt:string,
    id:number,
    productId:number,
    quantity:number,
    updatedAt:string,
    userId:string
}

