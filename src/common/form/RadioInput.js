import React from 'react'
import { Form } from 'semantic-ui-react';

const RadioInput = (props) => {
    const {input, type, label} = props;
    return (
        <Form.Field>
            <div className="ui radio">
                <input style={{marginRight:'2px'}} {...input} type={type}/>{" "}
                <label>{label}</label>
            </div>
            
        </Form.Field>
    )
}

export default RadioInput
