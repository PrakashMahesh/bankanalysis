import React, { useState, useEffect } from "react"
import { Card, ListGroupItem, ListGroup } from "react-bootstrap"

import  "./productpage.scss"

function Productpage({ mobiledetails, headsetdetails }) {
  let productDetailMobileElm = mobiledetails.map((mobile, index) => (
    <div>
      <Card>
        <Card.Img style={{ width: '300px' }} variant="top"  src={mobile.imgsrc} />
        <Card.Body>
          <Card.Title>{mobile.name}</Card.Title>
          <Card.Text>{mobile.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{mobile.code}</ListGroupItem>
          <ListGroupItem>{mobile.Category}</ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  ))
  let productPetailHeadsetElm = headsetdetails.map((headset, index) => (
    <div>
      <Card>
        <Card.Img style={{ width: '300px' }} variant="top" src={headset.imgsrc} />
        <Card.Body>
          <Card.Title>{headset.name}</Card.Title>
          <Card.Text>{headset.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{headset.code}</ListGroupItem>
          <ListGroupItem>{headset.Category}</ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  ))

  return (
    <div>
      
      {productDetailMobileElm}
      {productPetailHeadsetElm}
    </div>
  )
}

export default Productpage
