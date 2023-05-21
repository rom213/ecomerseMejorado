import { useEffect, useState } from "react";
import useWindowWidth from "../../../hooks/windowWidth";
import "./header.css";
import Carts from "../../addCar/Carts";
import { Globalstore } from "../../../secstore/Store_global";
import { buyCartAll } from "../../../hooks/peticiones/cart.Peticiones";

const Header = () => {
  const [select, setSelect] = useState<number>(1);
  const [selectCar, setSelectCar] = useState<boolean>(false);
  const [suma, setsuma] = useState(0)
  const { width } = useWindowWidth();
  const [menu, setMenu] = useState<boolean>(false);

  const {carshopp} = Globalstore()
  
  useEffect(() => {
    setMenu(false);
  }, [width]);

  const handleClickMenu = () => {
    setMenu(!menu);
  };

  const handleClickIcon = (iconIndex: number) => {
    setSelect(iconIndex);
  };

  const handleClickCart = () => {
    setSelectCar(!selectCar);
  };

  const clickBuy=()=>{
    buyCartAll()
  }

  useEffect(() => {
    let sum=0
    carshopp.map(car=>{
      sum=(car.quantity)*(car.product.price)+sum
    })
    setsuma(sum)
  }, [carshopp])

  return (
    <div>
      <div className={`header ${width<920 && "headerP"}`} >

        <h1 className={`ecom ${width<1000 && "ecomFond"}`}>e-comerse</h1>
        {width < 920 ? (
          <div>
            <div className="btnMenu" onClick={handleClickMenu}>
              <i className="bx bx-menu-alt-right bx-lg"></i>
            </div>
            {menu && (
              <div className="menu">
                <div className="contenticons">
                  <div
                    onClick={() => handleClickIcon(1)}
                    className={`icons ${select === 1 && "iconselect"}`}
                  >
                    <i className="bx bx-home bx-lg"></i> <h3>Home</h3>
                  </div>
                  <div
                    onClick={() => handleClickIcon(2)}
                    className={`icons ${select === 2 && "iconselect"}`}
                  >
                    <i className="bx bx-user bx-lg"></i> <h3>User</h3>
                  </div>
                  <div
                    onClick={() => handleClickIcon(3)}
                    className={`icons ${select === 3 && "iconselect"}`}
                  >
                    <i className="bx bx-store bx-lg"></i> <h3>Shopping</h3>
                  </div>
                  <div
                    onClick={handleClickCart}
                    className={`icons ${selectCar === true && "selecCart"}`}
                  >
                    <i className="bx bx-cart bx-lg"></i> <h3>Cart</h3>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div>
            <div className="contenticons2">
              <div
                onClick={() => handleClickIcon(1)}
                className={`icons1 ${select === 1 && "iconselect"}`}
              >
                <i className="bx bx-home bx-md"></i>
              </div>
              <div
                onClick={() => handleClickIcon(2)}
                className={`icons1 ${select === 2 && "iconselect"}`}
              >
                <i className="bx bx-user bx-md"></i>
              </div>
              <div
                onClick={() => handleClickIcon(3)}
                className={`icons1 ${select === 3 && "iconselect"}`}
              >
                <i className="bx bx-store bx-md"></i>
              </div>
              <div
                onClick={handleClickCart}
                className={`icons1 ${selectCar === true && "selecCart"}`}
              >
                <i className="bx bx-cart bx-md"></i>
              </div>
            </div>
          </div>
        )}
      </div>
      {
        selectCar && 
        <div className={`${width <900 ? "carShoping" : "carShoping1"}`}>
          <h2 className={`yourcart ${width <900 && "yourcartline"}`}>your cart</h2>
          {
            carshopp.length==0 ?
            <img className="imgAcademlo" src="https://tiendaacademlo.netlify.app/empty-cart.png" alt="" />
            :
          <>
          <div className="carScroll">
              {
                carshopp.map(car=>{
                  return <Carts car={car} />
                })
              }
            </div>

          <div  className={`${width <900 ? "price" : "price1"}`}>
            <h2 className="suma">Total price:{suma.toFixed(1)}</h2>
            <div onClick={clickBuy} className="buy">
              <h2>Buy Now</h2>
            </div>
          </div>
          </>
      }
        </div>
      }

    </div>
  );
};

export default Header;
