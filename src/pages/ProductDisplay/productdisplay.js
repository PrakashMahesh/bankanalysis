import React, { useState } from "react"
import AddProducts from "../../components/addproduct/addproducts"

import Search from "../../components/search"

function ProductDisplay() {
    
  return (
    <>
        <h1 style={{textAlign:"center"}}>Mobile and Headset Sale</h1>
       <AddProducts />
      <Search />
    </>
  )
}

export default ProductDisplay
