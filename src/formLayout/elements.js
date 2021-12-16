import React,{useEffect} from 'react';

import { ButtonInput,Text,Select } from './formelements';

export default function Element({ field: {
    field_type,
    field_id,
    field_label,
    table_label,
    field_placeholder,
    field_length,
    field_value,
    field_style,
    field_mandatory,
    field_options,
    errors
}}) {
    useEffect(()=>{
        console.log(errors)
    })
   
    switch (field_type) {
        case 'button':
            return (<ButtonInput
                field_id={field_id}
                field_label={field_label}
                field_value={field_value}
                field_style={field_style ? field_style : ""}
                errors={errors}
            />)
        case 'text':
            return (
                <Text
                    field_id={field_id}
                    field_label={field_label}
                    field_placeholder={field_placeholder}
                    field_value={field_value}
                    field_length={field_length ? field_length : ""}
                    errors={errors}
                   
                />)
                case 'select':
            return (<Select
                field_id={field_id}
                field_label={field_label}
                field_value={field_value}
                field_options={field_options}
                field_mandatory={field_mandatory}
                errors={errors}
               
                
            />)
        default:
            return null;
    }
}