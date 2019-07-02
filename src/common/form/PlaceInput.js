import React from 'react'
import PlacesAutocomplete  from 'react-places-autocomplete';
import { Form, Label, Segment, List } from 'semantic-ui-react';

const PlaceInput = (props) => {
    const {input: {value, onChange, onBlur}, options, placeholder, onSelect, meta: {touched, error}} = props;
    return (
        <PlacesAutocomplete value={value} onChange={onChange} searchOptions={options} onSelect={onSelect}>
            {({getInputProps, suggestions, getSuggestionItemProps, loading}) => {
                return(
                    <Form.Field error={touched && !!error}>
                        <input placeholder={placeholder} {...getInputProps({placeholder, onBlur})}/>
                        {touched && error && <Label basic color="red">{error}</Label>}
                        {suggestions.length > 0 && (
                            <Segment style={{marginTop: 0, position: 'absolute', zIndex: 100, width: '100%'}}>
                            {loading && <div>Loading...</div>}
                            <List selection>
                                {suggestions.map(suggestion => (
                                    <List.Item {...getSuggestionItemProps(suggestion)}>
                                        <List.Header>
                                            {suggestion.formattedSuggestion.mainText}
                                        </List.Header>
                                        <List.Description>
                                            {suggestion.formattedSuggestion.secondaryText}
                                        </List.Description>


                                    </List.Item>
                                ))}
                            
                            </List>
                        </Segment>
                        )
                        }
                    </Form.Field>
                )
            }}
            
        </PlacesAutocomplete>
    )
}

export default PlaceInput
