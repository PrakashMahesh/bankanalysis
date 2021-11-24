import React,{useState}  from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FileUploadPage from '../../components/Input/fileupload';


import './styles.scss';



export default function SignIn({ location }) {
  const [isSubmit, setIsSubmit] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
 const username=document.getElementById("username").value
 const password=document.getElementById("password").value
 console.log(username,password)
 if(username==="Aspire" && password==="Asd@123"){
   console.log("called")
   window.location = "/fileupload";
 }

    
  }

  return (
    <div className="container ">
   
      <Row>
        <Col lg={12} className="signin-form" >
          <h1>Login</h1>
          
          <Form onSubmit={handleSubmit} >
            <Row>
              <Col>
            <Form.Group className="" >
              <Form.Label >UserName</Form.Label>
              <Form.Control type="text" name="text" id="username"  placeholder="Enter Username" />
              
            </Form.Group>
              </Col>
              <Col>
            <Form.Group className="" >
              <Form.Label >Password</Form.Label>
              <Form.Control type="password" name="password" id="password"  placeholder="Enter password" />
             
            </Form.Group>
            </Col>
            </Row>
            <Button className="button" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
   
    </div>
  );
}
