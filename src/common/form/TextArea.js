import React from 'react';
import {Form, Label } from 'semantic-ui-react';


const TextArea = (formProps) => {
    const {input, rows, type, placeholder, meta: {touched, error}} = formProps;
    return (
        <Form.Field>
            <textarea {...input} placeholder={placeholder} type={type} rows={rows}/>
            {touched && error && <Label basic color="red">{error}</Label>}
        </Form.Field>
    )
}

export default TextArea
