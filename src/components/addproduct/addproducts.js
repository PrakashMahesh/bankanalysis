import React, { useState } from "react"
import {Button,Modal} from 'react-bootstrap'

import {ProductDetails} from '../../constants/addproduct'
import Element from "../../formLayout/elements";
import { FormHandleChangeContext } from "../../context/formcontext";
import { productDisplay } from "../../constants/productdetails";
import "./addproducts.scss"


function AddProducts() {
    const [productDetails, setProductDetails] = useState(ProductDetails);
   
    const [show, setShow] = useState(false);
  
    const handleClose = () =>{ 
        let newProductDetails = { ...productDetails }
        newProductDetails.ProductDetailsFields.map((field) => {
                field.errors = ""
                field.field_value=""   
        })
        setProductDetails(newProductDetails)
        setShow(false);
}
    const handleShow = () => setShow(true);

    const handleChange = (id, event) => {
       console.log(ProductDetails)
        let newProductDetails = { ...productDetails }
        newProductDetails.ProductDetailsFields.map((field) => {
            if (id === field.field_id) {
                field.field_value = event.target.value;
                field.errors = validate(field.field_id, event.target.value)
            }
            setProductDetails(newProductDetails)
        })
       
    }
    const validate = (id,value) => {
       
           if(id==="Price"){
                if (Number(value))
                    return "";
                    else return "Enter valid Number"  ;
           }
           else
           return ""
    
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Called")
        let newmobiledetail={
            name : "",
            code : "",
            Category : "",
            description : "",
            imgsrc:"https://th.bing.com/th/id/OIP.78x3UsOu_RmR1WmGcmw8EgHaKh?w=141&h=200&c=7&r=0&o=5&dpr=1.5&pid=1.7"
        
        }
        let productDetails= {...ProductDetails}
       productDetails.ProductDetailsFields.forEach((field)=>{
            if(field.field_mandatory=="yes"&&field.field_value=="")
            {
                console.log("if")
                if(field.field_type==="select")
                field.errors="Please select the value"
                else if("text")
                field.errors="Enter the Value"
                

            }
            else {
              console.log("Called push")
            field.errors = '';
            if(field.field_id==="name")
            newmobiledetail.name=field.field_value
            if(field.field_id==="Price")
            newmobiledetail.Category=field.field_value
            if(field.field_id==="Code")
            newmobiledetail.code=field.field_value
            if(field.field_id==="Description")
            newmobiledetail.description=field.field_value

            }
       });
       console.log(newmobiledetail)
      productDisplay.mobile.push(newmobiledetail);
      console.log(productDisplay)
       setProductDetails(productDetails);
       
    }
    let productDetailselm = productDetails.ProductDetailsFields.map((productDetailFeild, index) =>
        <div>
            <Element key={index} field={productDetailFeild} />
            
        </div>)
    return (

      <>
      <FormHandleChangeContext.Provider value={{ handleChange }}>
        <Button variant="primary" className="addproduct" style={{float:"right"}} onClick={handleShow}>
         Add Products
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          {productDetailselm}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={event => handleSubmit(event)}>Submit</Button>
          </Modal.Footer>
        </Modal>
        </FormHandleChangeContext.Provider>
      </>
    );
  }
  
  export default AddProducts