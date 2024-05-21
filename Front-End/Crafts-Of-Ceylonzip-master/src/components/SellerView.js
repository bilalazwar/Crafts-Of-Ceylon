import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/sellerview.css'
import AddImage from '../images/addImage2.png';
import SellerAccountDetails from './SellerAccountDetails';
import { loginSelId } from '../pages/LoginSeller';

export default function SellerView({ selectedOption }) { // (pro)--comes in Object form or ({ selected})

const [imagePreview, setImagePreview] = useState(null);
useEffect(() => {
  // Set the default image when the component mounts
  setImagePreview(require('../images/addImage2.png'));
}, []);

const [sellerOrders, setSellerOrder] = useState([])
const [sellerSales, setSellerSale] = useState([])
var file;

const [name, setName] = useState('');
const [selId, setSelId] = useState(loginSelId);
const [description, setDescription] = useState('');
const [category, setCategory] = useState('');
const [price, setPrice] = useState('');
const [weight, setWeight] = useState('');
const [filePath, setfilePath] = useState();


const [products, setProducts] = useState([]) //to display my products

const [status, setStatus] = useState('')
  //to display the image in frontend
 const onSelectedFile = (event) => {
    file = event.target.files[0];
    setfilePath(file.name);

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const previewImage = reader.result;
        setImagePreview(previewImage);

        alert(`Selected Image Path: D:\\downloads\\${file.name}`);
        setfilePath(`D:\\downloads\\${file.name}`);
      };
      reader.readAsDataURL(file);
    }
};


  // error with the axios request of below
  useEffect(() => {
    loadProducts();
  },[])

  const loadProducts = async() => { //gets the selected option recieved from parameter as selectedOption
    const myProducts = await axios.get(`http://localhost:8083/product/getMyProduct/${selId}`)
    setProducts(myProducts.data);  
  };


  //to store image
  const createProduct = (event) => {
   event.preventDefault();
    const pid = parseInt(selId)
    axios.post('http://localhost:8083/product/createProduct', {
      name: name,
      selId: pid,
      description: description,
      category: category,
      price: price,
      weight: weight,
      filePath: filePath
    })
    .then((response) => {
        alert("product submitted in"+filePath);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
      })
  }

  useEffect(() => {
    loadOrders();
  },[])

  useEffect(() => {
    loadSales();
  },[])

   // this below to display order details to the Seller
  const loadOrders = async()=> {
    const result = await axios.get("http://localhost:8083/order/getOrder");
    setSellerOrder(result.data);
  }

  const loadStatus = "DELIVERED";
  function loadSales(){
    try {
      const filteredOrders = sellerOrders.filter(
        (order) => order.status === "DELIVERED"
      );
      setSellerSale(filteredOrders);
    } catch (error) {
      // Handle any errors during filtering
      console.error("Error filtering orders:", error);
    }
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
  };

  

  const handleUpdate = async (index) => {
    const newIndex = index + 1;
    alert(newIndex)
    alert(status)
    const updateResult = await axios.put("http://localhost:8083/order/updateOrder", null,{
      params: {
        status: status,
        id: newIndex 
      }
    })
    .then((updateResult) => {
      if(updateResult){
        alert("Status Updated Successfully!")
      }
    })

    if(status === "DELIVERED"){
      loadOrders();
    }
  }

  const handleStatusChange = (event) => {
    const selectedStatus = event.target.value;
    setStatus(selectedStatus);
  };

  const handleButtonClickToUploadImage = () => {
    // Trigger the file input click when the button is clicked
    const fileInput = document.getElementById('uploadImg');
    if (fileInput) {
      fileInput.click();
    }
  };

  return (
    <div>
      {(!selectedOption || selectedOption === 'New Product') && (

          <div className='productOption'>

            <div className='column1'>

                <div className='productDetailHeading1'>
                  <h2>Add Your Product Details</h2>
                </div>

                <div className='productDetail1'>

                  <form onSubmit={createProduct} >

                  <label htmlFor="productCategory">Product Category*</label>
                    <select id="productCategory" name="productCategory" onChange={(e) => setCategory(e.target.value)} required>
                        <option value="null">--Selects--</option>
                        <option value="woodwork">Woodwork</option>
                        <option value="metalwork">Metalwork</option>
                        <option value="textiles">Textiles</option>
                        <option value="potteryAndCeramics">Pottery and Ceramics</option>
                        <option value="basketry">Basketry</option>
                        <option value="bambooAndReedCraft">Bamboo and Reed Craft</option>
                        <option value="tradionalBatiks">Traditional Batiks</option>
                        <option value="tradionalMasks">Traditional Masks</option>
                    </select>

                    <label htmlFor="productName">Product Name*</label>
                    <input type="text" id="productName" name='productName' autoComplete='off'  onChange={(e) => setName(e.target.value)} value={name} required/>

                    <label htmlFor="productPrice">Product Price*</label>
                    <input type="text" id="productPrice" name='productPrice' autoComplete='off'  onChange={(e) => setPrice(e.target.value)} required/>
                    
                    <label htmlFor="productDescription">Product Description</label>
                    <textarea id="productDescription" rows="5" name='productDescription' autoComplete='off'  onChange={(e) => setDescription(e.target.value)}></textarea>

                    <label htmlFor="productWeight">Item Weight (Kg)</label>
                    <input type="number" id="productWeight" name='productWeight' autoComplete='off'  onChange={(e) => setWeight(e.target.value)}/>

                    <div className='submitButton'>
                      <input type="submit" style={{fontSize: "84%"}}value="Submit Product"/>
                    </div>  
                  </form>
                </div>
                <br/>

            </div>
            <div className='column3'>
                
                <div className='productDetailHeading3'>
                  <h4>Add your product photo / preview</h4>
                </div>

                <button onClick={handleButtonClickToUploadImage} id='uploadFile'>Add your product photo / preview
                  <input type="file" accept="image/*" id='uploadImg' onChange={onSelectedFile} style={{ display: 'none' }}/>
                </button>

                <img src={imagePreview} alt="add product" id='productImg' htmlFor='uploadImg'/>

                {/* <button id='submitProductBelowImg'>SUBMIT PRODUCT IMAGE</button> */}









                {/* <div className='clickImageUpload'>

                  <label className='addImage'>

                    c
                    <label htmlFor='uploadImg'>Click and Add product photo</label>


                      <input type="file" accept="image/*" id='uploadImg' onChange={onSelectedFile} />


                  </label>

                  {imagePreview && (

                    <div className='previewImage'>
                      <img src={imagePreview} alt='Selected product' />
                    </div>
                  )}

                  </div> */}
            </div>
            <div className='column2'>
                <div className='productDetailHeading2'>
                  <h4>Package size (Inch)</h4>
                </div>
                <div className='productDetail2'>
                  <form >

                    <label htmlFor="productLength">Length*</label>
                    <input type="number" id="productLength" name='productLength' autoComplete='off'/>

                    <label htmlFor="productBreadth">Breadth *</label>
                    <input type="number" id="productBreadth" name='productBreadth' autoComplete='off'/>

                    <label htmlFor="productWidth">Width*</label>
                    <input type="number" id="productWidth" name='productWidth' autoComplete='off'/>

                  </form>

                  </div>
                  <div className='submitButton'>
                      <input type="submit" value="Submit Product" formAction='' style={{display:'none'}}/>
                </div>
              
            </div>
          </div>
      )}

      {selectedOption === 'My Products' && (

      <div className='allProducts'>

      {
        products.map((product,index)=>(
          <div className='productsCard'>
            <div className='productImage'>
              <img src={`${process.env.PUBLIC_URL}/loadimages/${product.filePath}.png`} alt={`image-${index}`} />
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
      )}

      {selectedOption === 'Order' && (

        <div className='orderDetails'>
          <div className='filter'>
            <input type="text" name="search" placeholder='Search..' autoComplete="off"/>
            <select>
              <option value="Category">Category</option> 
              <option>Database</option>
              <option>Search</option>
            </select>

            <select>
              <option value="filterBy">Filter By</option>
              <option>Price</option>
              <option>Status</option>
            </select>
          </div>

          <div className='orderStatus'>
            <label id='pending'>PENDING - 1</label>
            <label id='progress'>IN PROGRESS - 5</label>
            <label id='delivered'>DELIVERED - 3</label>
          </div>
          
          <div className='orderDetailsFromDatabase'>
            <div className='columnNames'>

              <table>
                <tbody>
                  <tr>
                    <th>CUSTOMER</th>
                    <th>ADDRESS</th>
                    <th>PRODUCT</th>
                    <th>STATUS</th>
                  </tr>                  
                    {
                      sellerOrders.map((order,index)=>(
                      <tr>
                        <React.Fragment key={index}>
                          <td>{order.customerName}</td>
                          <td>{order.address}</td>
                          <td>{order.productName}</td>
                          {/* <td className={order.status}>{order.status}</td>   */}
                          <td>
                            <select className='statusDropdown' onChange={(event) => handleStatusChange(event)}>
                            <option>{order.status}</option>
                            <option>IN PROGRESS</option>
                            <option>DELIVERED</option>
                            </select>
                          </td>
                        </React.Fragment>
                        <button id='btnUpdate' onClick={() => handleUpdate(index)}>Update</button>
                        </tr>
                      ))
                    }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {selectedOption === 'Sales' && (
        <div className='orderDetails'>
          <div className='filter'>

          <input type="text" name="search" placeholder='Search..' autoComplete="off"/>
            <select>
              <option value="Category">Category</option> 
              <option>Database</option>
              <option>Search</option>
            </select>

            <select>
              <option value="filterBy">Filter By</option>
              <option>Price</option>
              <option>Status</option>
            </select>

            <div className='orderDetailsFromDatabase'>
              <div className='columnNames'>

                <table>
                  <tbody>
                    <tr>
                      <th>CUSTOMER</th>
                      <th>ADDRESS</th>
                      <th>PRODUCT</th>
                      <th>PRICE</th>
                      <th>DATE</th>
                    </tr>
                    {
                      sellerSales.map((order,index)=>(
                        <tr key={index}> {/* Ensure key is on the outermost element */}
                        <React.Fragment>
                          <td>{order.customerName}</td>
                          <td>{order.address}</td>
                          <td>{order.productName}</td>
                          <td>{order.price}</td>
                          <td>{formatDate(order.orderDate)}</td>
                        </React.Fragment>
                      </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>          
        </div>
      )}

      {selectedOption === 'Account Details' && (
        <div>
          <SellerAccountDetails/>
        </div>
      )}
    </div>
  );
}
