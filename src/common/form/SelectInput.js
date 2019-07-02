import React from 'react';
import {Form, Label, Select } from 'semantic-ui-react';


const TextInput = (formProps) => {
    const {input, multiple, options, type, placeholder, meta: {touched, error}} = formProps;
    return (
        <Form.Field>
            <Select  
            placeholder={placeholder} 
            type={type}
            value={input.value || null}
            onChange={(e, data) => input.onChange(data.value)}
            options={options}
            multiple={multiple}/>
            {touched && error && <Label basic color="red">{error}</Label>}
        </Form.Field>
    )
}

export default TextInput
