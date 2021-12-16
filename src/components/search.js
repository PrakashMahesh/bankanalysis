import React, { useState } from "react"
import {Form} from 'react-bootstrap'

import { productDisplay } from "../constants/productdetails"
import Productpage from "./productpage/productpage"

export default function Search() {
  const [search, setSearch] = useState("")
  const [productDetails, setProductDetails] = useState(productDisplay)

  const filteredMobileDetails =
    search.length === 0
      ? productDetails.mobile
      : productDetails.mobile.filter((mobile) =>
          mobile.name.toLowerCase().includes(search.toLowerCase())
        )
  const filteredHeadsetDetails =
    search.length === 0
      ? productDetails.headset
      : productDetails.headset.filter((headset) =>
          headset.name.toLowerCase().includes(search.toLowerCase())
        )
  return (
    <div>
      
   
    <Form.Control
     type="text"
     value={search}
     onChange={(e) => setSearch(e.target.value)}
      placeholder="Search Product"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />

      <Productpage
        mobiledetails={filteredMobileDetails}
        headsetdetails={filteredHeadsetDetails}
      />
    </div>
  )
}
