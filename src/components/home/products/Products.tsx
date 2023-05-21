import { useAllProducts } from "../../../hooks/peticiones/products";
import usewindowWidth from "../../../hooks/windowWidth";
import Product from "../product/Product";
import "./products.css";
import { useState } from "react";

const Products = () => {
  const [stateCategories, setstateCategories] = useState<boolean>(false);
  const { width } = usewindowWidth();

  const { productsQuery }=useAllProducts()



  const handleClick=():void=>{
   setstateCategories(false)
  }

  return (
    <div className="ContentProducts">
      <form className="formProd">
        <input placeholder="What are you loking for?" className="inputProd" type="text" />
        <button className="searchPro">
          <i className="bx bx-search-alt-2"></i>
        </button>
      </form>
      <div className="filterProduct">
        {width < 800 && (
          <div
            onClick={() => setstateCategories(!stateCategories)}
            className={`categories`}
          >
            Categories <i className="bx bx-filter-alt"></i>
          </div>
        )}
        {stateCategories && width < 800 && (
          <div className="listCategories">
            <div onClick={handleClick}>
              <h3>allProducts</h3>
            </div>
            <div  onClick={handleClick}>
              <h3>samsung</h3>
            </div>
            <div  onClick={handleClick}>
              <h3>sony</h3>
            </div>
            <div onClick={handleClick}>
              <h3>aple</h3>
            </div>
            <div  onClick={handleClick}>
              <h3>cosmo</h3>
            </div>
          </div>
        )}
      </div>
    <div className="ContentTarjetProducts">
      {
        productsQuery.data?.map((product)=>{
          return <Product key={product.id} product={product} />
        })
      }
    </div>
    </div>
  );
};

export default Products;
