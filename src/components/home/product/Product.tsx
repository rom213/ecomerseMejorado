import './product.css';
import { FC } from 'react';
import { Products } from "../../../interfases/products";
import { addCartProducts, createCartProduct } from '../../../hooks/peticiones/cart.Peticiones';
import { Globalstore } from '../../../secstore/Store_global';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQueryClient, useQuery } from '@tanstack/react-query';
import { findOneProduct } from '../../../hooks/peticiones/products';

interface Props {
  product: Products;
}

const Product: FC<Props> = ({ product }) => {
  const { carshopp, ThunkCarshop } = Globalstore();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const addClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    const valueExistCar = carshopp?.filter((car) => car.productId === product.id);
    if (valueExistCar?.length === 0) {
      createCartProduct(product.id, 1);
      ThunkCarshop();
    } else {
      addCartProducts(valueExistCar[0].id, valueExistCar[0].quantity + 1);
      ThunkCarshop();
    }
  };

  const { data: productData } = useQuery<Products>(['product', product.id], () => findOneProduct(product.id));

  const onMouseEnter = async () => {
    if (!productData) {
      await queryClient.prefetchQuery(['product', product.id], () => findOneProduct(product.id));
    }
  };

  return (
    <div className='tarjetProduct' onMouseEnter={onMouseEnter} onClick={() => navigate(`/product/${product.id}`)}>
      <div className='contentImgProduct'>
        <img className='imgPoducct' src={`${product.images[0].url}`} alt='' />
      </div>
      <div className='sec2'>
        <div>
          <span>{product.brand}</span>
          <div>{product.title}</div>
        </div>

        <div onClick={addClick} className='circleCar'>
          <i className='bx bx-cart'></i>
        </div>

        <div className='contentPrice'>
          <div>PRICÉ</div>
          <span>${product.price}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
