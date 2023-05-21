
import { useQuery } from "@tanstack/react-query";
import { ecomerApi } from "../../api/ecomerApi";
import { Products } from "../../interfases/products";

const getAllProducts = async():Promise<Products[]> => {
    const { data } = await ecomerApi.get<Products[]>(`/products`,{
        headers:{
            Authorization:null
        }
    });
    return data;
}

export const findOneProduct = async (idProduct: number): Promise<Products> => {
    const { data } = await ecomerApi.get<Products>(`/products/${idProduct}`, {
      headers: {
        Authorization: null,
      },
    });
    return data;
  };



export const useAllProducts = () => {
    const productsQuery = useQuery(["products"], getAllProducts);
    return {
      productsQuery,
    };
}


export const useFindOne = (id: number) => {
    const productQuery = useQuery(['product', id], () => findOneProduct(id));
  
    return {
        productQuery
    };
  };