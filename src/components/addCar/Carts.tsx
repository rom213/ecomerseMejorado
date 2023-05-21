import { Carshop } from "../../interfases/cart";
import "./car.css";
import { FC } from "react";
import { addCartProducts, deleteCartProduct } from '../../hooks/peticiones/cart.Peticiones';

interface Props {
  car: Carshop;
}

const Carts: FC<Props> = ({ car }) => {


  
  const add=():void=>{
        addCartProducts(car.id,car.quantity+1)
  }
  const minus=():void=>{
    if (car.quantity==1) {
      deleteCartProduct(car.id)
    }else{
      addCartProducts(car.id,car.quantity-1)
    }
}

const delet=():void=>{
    deleteCartProduct(car.id)
}

  return (
    <div className="ContentCar">
    <div className="contimgP">
        <img className="carImg" src={`${car.product.images[0].url}`} alt="" />
    </div>


      <div className="sec2ContCar">
        <h5>{car.product.title}</h5>
        <div className="cantiCar">Amount: {car.quantity}</div>
        <div className="totalCar">total: {car.quantity*car.product.price}</div>
        <div className="contenticonCar">
          <div onClick={add} className="d">
            <i className=" bx bx-plus bx-sm  "></i>
          </div>
          <div onClick={minus} className="d">
            <i className=" bx bx-minus bx-sm"></i>
          </div>
          <div onClick={delet} className="d">
            <i className=" bx bx-trash bx-sm"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts;
