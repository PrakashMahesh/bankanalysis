import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Element from './elements';

export default function FormLayout({field: { fields }}) {

    return (
    
        <Row>
            {fields.map((field, index) => {
                return (
                    <Col lg={6} sm={12} key={index}>
                        <Element
                            key={index}
                            field={field}
                        />
                    </Col>
                );
            })}
                
        </Row>
    );
}