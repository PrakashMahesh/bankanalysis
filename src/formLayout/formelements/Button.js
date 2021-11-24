import React from 'react';
import { Form, Button } from 'react-bootstrap';

function ButtonInput({ t, field_id, field_label, field_style }) {

    return (
        <>
            <Form.Group>
                <Button className={`${field_style}`} name={field_id} id={field_id} >
                    {field_label}
                </Button>

            </Form.Group>

          </>
    );
}

export default ButtonInput;