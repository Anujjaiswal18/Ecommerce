import React, { useContext, useState } from "react";
import { Context } from "../context/Context";

const IndiAddCarts = ({cur}) => {

    const { addCartData, setAddCardData } = useContext(Context);
    const [incrementQuantity , setIncrementQuantity] = useState(1)
    const [datashow,setDataShow] = useState(Number(cur.price))
    let myData;

  
    // this is for delete on a carts
  
    const handleDeleteOfCart = (delid) =>{
      const newDeletedValue = addCartData.filter((cur)=>{
        return cur.id != delid.id
      });
      setAddCardData(newDeletedValue)
    };
  
    // this is for handling increment quantity==================
    const handleIncrementQuan = () =>{
        setIncrementQuantity((pre) => pre+1);
        setDataShow((pre)=> pre + Number(cur.price));

        
    }
   
    // ===================================
    // this is for handling decrement quantity==================
    const handleDrementQuan = () =>{
      if(incrementQuantity > 1){
      setIncrementQuantity((pre) => pre-1);
      setDataShow((pre)=> pre - Number(cur.price));
      }
    }
  return (
    <div key={cur.id} className="add-carts2">
      <img className="add-img" src={cur.img} alt="" />

      <div className="cart-des">
        <h2 className="add-title">{cur.title}</h2>
        <p className="card-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta a
          atque voluptas nisi voluptate unde pariatur perspiciatis veniam iure!
          Officia laborum numquam non quae vero praesentium, culpa ut quas!
        </p>
      </div>

      <div className="quantity">
        <span className="qunatity-title">Qunatity</span>
        <div className="btn-section">
          <button className="btn-q" onClick={handleDrementQuan}>
            -
          </button>
          <span className="quantity-num">{incrementQuantity}</span>
          <button onClick={handleIncrementQuan} className="btn-q">
            +
          </button>
        </div>
      </div>
      <div className="quantity-size">
        <span className="qunatity-title">Size</span>
        <div className="btn-section-size">
          <button className="btn-q">{cur.size}</button>
        </div>
      </div>

      <div className="add-price">
        <span>$ {datashow}</span>
      </div>
      <button onClick={() => handleDeleteOfCart(cur)} className="del-btn">
        X
      </button>
    </div>
  );
};

export default IndiAddCarts;
