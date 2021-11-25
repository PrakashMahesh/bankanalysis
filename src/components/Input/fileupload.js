import React, {useState} from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

import axios from 'axios';

function FileUploadPage(){
	const [selectedFile, setSelectedFile] = useState();
	//const [isFilePicked, setIsFilePicked] = useState(false);

	const changeHandler = (event) => {
    console.log(event.target.files[0])
		setSelectedFile(event.target.files[0]);
	
	};

	const handleSubmission = () => {
		const formData = new FormData();
    console.log(selectedFile)
		formData.append('Filename', selectedFile);
    
    axios({
      method: 'post',
      url: 'http://10.0.0.6:8000/api/brd/v1',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then((response) => {console.log(response)}).catch((error)=>{console.log(error)})
		//upload to here using API to store
  //  window.location = "/bankAnalysis";
	};

	return(
        <Row>
        <Col  className="signin-form" >
        <Form >
        <Form.Group className="" >
              <Form.Label ><h1>Bank statement Analysis</h1></Form.Label>
              <Form.Control className="file" type="file" name="file" id="password"  onChange={changeHandler}  />
             
            </Form.Group>
            <Button className="button" onClick={handleSubmission} >
              Submit
            </Button>
          </Form>
			
            </Col>
      </Row>
	)
}
export default FileUploadPage;