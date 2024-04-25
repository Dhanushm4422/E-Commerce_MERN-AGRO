import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [showCartAnimation, setShowCartAnimation] = useState(false);

  const handleAddToCart = (productId) => {
    addToCart(productId);
    setShowCartAnimation(true);
    setTimeout(() => setShowCartAnimation(false), 2000); // Reset animation after 2 seconds
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={product.image}
            alt="Product"
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(144)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ₹{product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ₹{product.new_price}
          </div>
        </div>
        <button
          className="productdisplay-add-to-cart-btn"
          onClick={() => handleAddToCart(product.id)}
        >
          ADD TO CART
        </button>
      </div>
      {showCartAnimation && (
        <div className="cart-animation show">Added to cart</div>
      )}
    </div>
  );
};

export default ProductDisplay;
