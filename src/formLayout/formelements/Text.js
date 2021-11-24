import React from 'react';
import { Form, Row, Col, Container } from 'react-bootstrap';

function Text({  field_id, field_label, field_placeholder, field_value, field_length }) {

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
                        required
                    />
                    </Col>
                   
                </Form.Group>
                </Row>
                
        </>
    );
}

export default Text;