import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAllProducts, useFindOne } from "../../hooks/peticiones/products";
import { Products } from "../../interfases/products";
import Product from "../../components/home/product/Product";
import "./productDes.css";

const ProductDes = () => {
  const params = useParams();
  const { id = "0" } = params;
  const { productQuery } = useFindOne(+id);
  const { productsQuery } = useAllProducts();
  const [similar, setsimilar] = useState<Products[]>();
  const [similarcategory, setsimilarcategory] = useState<Products[]>();
  const [count, setcount] = useState(0);
  const slider: HTMLButtonElement | null = document.querySelector(".slider");
  const [imgselect, setimgselect] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (productQuery.data) {
      const similar = productsQuery.data?.filter(
        (produ) => produ.category === productQuery.data.category
      );
      setsimilar(similar);
    }

    if (productQuery.data) {
      const similarcategory = productsQuery.data?.filter(
        (produ) => produ.id != productQuery.data.id
      );
      setsimilarcategory(similarcategory);
    }
  }, [id, productQuery.data, productsQuery.data]);

  const handleminus = () => {
    if (count >= 1) {
      setcount(count - 1);
    }
  };

  const handlscroll = (index: number) => {
    if (slider) {
      if (index == 0) {
        slider.scrollLeft = 0;
        setimgselect(0);
      }
      if (index == 1) {
        slider.scrollLeft = 350;
        setimgselect(1);
      }
      if (index == 2) {
        slider.scrollLeft = 700;
        setimgselect(2);
      }
    }
  };

  const hand1 = () => {
    if (slider) {
      slider.scrollLeft -= 100;
      hand();
    }
  };
  const hand2 = () => {
    if (slider) {
      slider.scrollLeft += 100;
      hand();
    }
  };

  const hand = (): void => {
    if (slider) {
      if (slider.scrollLeft <= 300) {
        setimgselect(0);
      }
      if (slider.scrollLeft >= 210) {
        setimgselect(1);
      }
      if (slider.scrollLeft >= 400) {
        setimgselect(2);
      }
    }
  };

  return (
    <div className="contentall">
      <div className="contpunto">
        <h3 className="home" onClick={() => navigate("/")}>
          Home
        </h3>
        <div className="punto"></div>
        <div>{productQuery.data?.title}</div>
      </div>

      <div className="sec1">
        <div className="contentSliderInfo">
          <div className="slider">
            <i
              onClick={() => {
                {
                  hand1();
                }
              }}
              className="buttrigh bx bxs-chevrons-left bx-lg"
            ></i>

            {productQuery.data?.images.map((im) => {
              return (
                <div className="ss">
                  <img className="im" src={`${im.url}`} alt="" />
                </div>
              );
            })}
            <i
              onClick={() => {
                hand2();
              }}
              className="buttleft bx bxs-chevrons-right bx-lg"
            ></i>
          </div>

          <div className="contimages">
            {productQuery.data?.images.map((im, index: number) => {
              return (
                <div className={`b ${index === imgselect && "activ"}`}>
                  <img
                    onClick={() => handlscroll(index)}
                    className={`imag `}
                    src={`${im.url}`}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="cardinfo">
          <div>
            <span>{productQuery.data?.brand}</span>
            <h2>{productQuery.data?.title}</h2>
          </div>
          <div>
            <p>{productQuery.data?.description}</p>
          </div>

          <div className="contentvalues">
            <div className="conprice">
              <span>price</span>
              <b>{productQuery.data?.price}</b>
            </div>
            <div className="contall">
              <div onClick={handleminus} className="minus">
                <i className="bx bx-minus"></i>
              </div>
              <div className="value">{count}</div>
              <div onClick={() => setcount(count + 1)} className="minus">
                <i className="bx bx-plus"></i>
              </div>
            </div>
            <button onClick={() => console.log("hola")} className="btn2">
              add to card <i className="bx bx-cart"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="cotentsimilarall">
        <div className="Dis">Discover similar items</div>
        <div className="contentsimilar">
          {similar?.map((produ) => {
            return <Product key={produ.id} product={produ} />;
          })}
          {similarcategory?.map((produ) => {
            return <Product key={produ.id} product={produ} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductDes;
