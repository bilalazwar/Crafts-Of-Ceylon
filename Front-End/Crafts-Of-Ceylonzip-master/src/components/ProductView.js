import React, { useEffect, useState } from 'react';
import '../styles/productView.css'
import axios from 'axios';
import {selectedOption} from '../pages/ProductPage.js';
import { useNavigate } from 'react-router-dom';
export var productName;
export var productPrice;
export var productCategory;
export var imageSrc;

const images = require.context('../../public/loadimages', true);
const imageList = images.keys().map(image => images(image));

function ProductView() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    loadProducts(selectedOption); //option parameter which gets the selected category from the sidebar
  });

  const loadProducts = async (selectedOption) => { //gets the selected option recieved from parameter as selectedOption
    const result = await axios.get(`http://localhost:8083/product/getProduct/${selectedOption}`); 
    setProducts(result.data);
    imageSrc = result.data.filePath;
  };

  const navigate = useNavigate();
  function handleCheckoutClick(product) {
    navigate("/checkout");
    productName = product.name;
    productPrice = product.price;
    productCategory = product.category;
  }

  return (
    <div className='allProducts'>

        {
          products.map((product,index)=>(
            <div className='productsCard'>
              <div className='productImage' onClick={() => handleCheckoutClick(product)}>
                 <img src={`${process.env.PUBLIC_URL}/loadimages/${product.filePath}.png`} alt={`image-${index}`} />
                 {/* <img src={product.filePath} alt={`image-${index}`} /> */}
              </div>
              <div className='productName'>
                 <p>{product.name}</p>
              </div>
              <div className='productPrice'>
                 <p>LKR {product.price}</p>
              </div> 
            </div>
          ))
        }

    </div>
  );
}

export default ProductView;