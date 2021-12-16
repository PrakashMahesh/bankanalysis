import React, { useContext, useEffect, useState, Fragment } from 'react'
import { Form } from 'react-bootstrap';

import { FormHandleChangeContext } from '../../context/formcontext';

function Select({ field_id, field_label, field_value, field_options, field_mandatory,errors }) 
{

  
    const { handleChange } = useContext(FormHandleChangeContext);
   
   

    return (
        <>
            <Form.Group id={field_id}>
                <Form.Label>
                    {field_label}
                   
                </Form.Label>
                <Form.Control
                    name={field_id}
                    as="select"
                    placeholder="-- Please Select ---"
                    value={field_value}
                    onChange={(event) => 
                        handleChange(field_id, event)}
                >
                    <option value="" >-- Please Select --</option>
                    <option value="Mobile" >Mobile</option>
                    <option value="Headset" >Headset</option>
                   
                </Form.Control>
                {errors ? <p style={{color:"red"}}>{errors}</p> : " "}
            </Form.Group>

           
        </>
    )
}    
export default Select;