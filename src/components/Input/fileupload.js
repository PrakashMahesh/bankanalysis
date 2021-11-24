import React, {useState} from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';




function FileUploadPage(){
	const [selectedFile, setSelectedFile] = useState();
	//const [isFilePicked, setIsFilePicked] = useState(false);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
	
	};

	const handleSubmission = () => {
		const formData = new FormData();

		formData.append('File', selectedFile);

		//upload to here using API to store
    window.location = "/bankAnalysis";
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