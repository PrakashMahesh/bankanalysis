import React,{useContext,useEffect} from 'react';
import { Form, Row, Col, Container } from 'react-bootstrap';
import { FormHandleChangeContext } from '../../context/formcontext';

function Text({  field_id, field_label, field_placeholder, field_value, field_length,errors }) {
    const { handleChange } = useContext(FormHandleChangeContext);
    useEffect(()=>{
        console.log(errors)
    })
    return (
        <>
             <Row>
               <Form.Group>
                  
                       <Col >
                      
                    <Form.Label>
                        {field_label}
                    </Form.Label>
                    </Col>
                    <Col >
                    <Form.Control
                        type="text"
                        name={field_id}
                        id={field_id}
                        placeholder={field_placeholder ? field_placeholder : " "}
                        value={field_value}
                        maxLength={field_length ? field_length : " "}
                        onChange={(event) => handleChange(field_id, event)}
                        required
                    />
                    </Col>
                    {errors ? <p style={{color:"red"}}>{errors}</p> : " "}
                </Form.Group>
                </Row>
                
        </>
    );
}

export default Text;