import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from "../Assets/upload_area.svg";

const AddProduct = () => {

  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    name:"",
    image:"",
    category:"fertilizers",
    new_price:"",
    old_price:""
  });

  const addProduct = async () => {
    try {
      const formData = new FormData();
      formData.append('product', image);

      const uploadResponse = await fetch('http://localhost:4000/upload', {
        method: 'POST',
        body: formData,
      });
      const uploadData = await uploadResponse.json();

      if (uploadData.success) {
        const product = { ...productDetails, image: uploadData.image_url };

        const addProductResponse = await fetch('http://localhost:4000/addproduct', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(product),
        });
        const addProductData = await addProductResponse.json();

        if (addProductData.success) {
          alert("Product Added");
        } else {
          alert("Failed to add product");
        }
      } else {
        alert("Failed to upload image");
      }
    } catch (error) {
      console.error('Error adding product:', error);
      alert("An error occurred while adding the product");
    }
  };

  const changeHandler = (e) => {
    setProductDetails({...productDetails, [e.target.name]: e.target.value});
  };

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="addproduct">
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input type="text" name="name" value={productDetails.name} onChange={changeHandler} placeholder="Type here" />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input type="text" name="old_price" value={productDetails.old_price} onChange={changeHandler} placeholder="Type here" />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input type="text" name="new_price" value={productDetails.new_price} onChange={changeHandler} placeholder="Type here" />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product category</p>
        <select value={productDetails.category} name="category" className="add-product-selector" onChange={changeHandler}>
          <option value="fertilizers">Fertilizers</option>
          <option value="seeds">Seeds</option>
          <option value="pesticides">Pesticides</option>
        </select> 
      </div>
      <div className="addproduct-itemfield">
        <p>Product Image</p>
        <label htmlFor="file-input">
          <img className="addproduct-thumbnail-img" src={!image ? upload_area : URL.createObjectURL(image)} alt="" />
        </label>
        <input onChange={imageHandler} type="file" name="image" id="file-input" hidden />
      </div>
      <button className="addproduct-btn" onClick={addProduct}>ADD</button>
    </div>
  );
};

export default AddProduct;
