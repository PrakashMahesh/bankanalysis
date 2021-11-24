import React,{useEffect} from 'react';

import { ButtonInput,Text } from './formelements';

export default function Element({ fields: {
    field_type,
    field_id,
    field_label,
    table_label,
    field_placeholder,
    field_length,
    field_value,
    field_style
}}) {
   
    switch (field_type) {
        case 'button':
            return (<ButtonInput
                field_id={field_id}
                field_label={field_label}
                field_value={field_value}
                field_style={field_style ? field_style : ""}
            />)
        case 'text':
            return (
                <Text
                    field_id={field_id}
                    field_label={field_label}
                    field_placeholder={field_placeholder}
                    field_value={field_value}
                    field_length={field_length ? field_length : ""}
                   
                />)
        default:
            return null;
    }
}