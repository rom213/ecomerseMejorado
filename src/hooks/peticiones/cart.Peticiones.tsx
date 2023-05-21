

import { ecomerApi } from "../../api/ecomerApi";
import { CarAdd } from "../../interfases/cart";







export const addCartProducts = async (id: number, quanty: number | string): Promise<void> => {
    const data1 = {
        "quantity": quanty
    };
  await ecomerApi.put(`/cart/${id}`,data1)

  };



  export const createCartProduct = async (id: number, quanty: number | string): Promise<void> => {
      const data1 = {
        quantity: quanty,
        productId: id,
      };
      await ecomerApi.post<CarAdd>(`/cart`, data1);
  };

export const deleteCartProduct = async (id: number): Promise<void> => {
    await ecomerApi.delete(`/cart/${id}`);
};

export const buyCartAll=async():Promise<void> =>{
  await ecomerApi.post('/purchases')  
}


  


 
  
  
  
