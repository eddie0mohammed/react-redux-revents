import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react';

class EventForm extends Component {

    state = {
        title: '',
        date: '',
        city: '',
        venue: '',
        hostedBy: ''
    }

    componentDidMount(){
        if (this.props.selectedEvent !== null){
            this.setState({
                ...this.props.selectedEvent
            })
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.id){
            this.props.updateEvent(this.state);
        }else{
            this.props.createEvent(this.state);

        }
    }

    render() {
      const {cancelFormOpen,} = this.props;
      const {title, date, city, venue, hostedBy} = this.state;
        return (
                  <Segment>
                    <Form>
                      <Form.Field>
                        <label>Event Title</label>
                        <input placeholder="Event Title" name="title" value={title} onChange={this.handleChange} autoComplete='off'/>
                      </Form.Field>
                      <Form.Field>
                        <label>Event Date</label>
                        <input type="date" name="date" value={date} onChange={this.handleChange} placeholder="Event Date" />
                      </Form.Field>
                      <Form.Field>
                        <label>City</label>
                        <input placeholder="City event is taking place" name='city' value={city} onChange={this.handleChange}/>
                      </Form.Field>
                      <Form.Field>
                        <label>Venue</label>
                        <input placeholder="Enter the Venue of the event" name="venue" value={venue} onChange={this.handleChange}/>
                      </Form.Field>
                      <Form.Field>
                        <label>Hosted By</label>
                        <input placeholder="Enter the name of person hosting" name="hostedBy" value={hostedBy} onChange={this.handleChange}/>
                      </Form.Field>
                      <Button positive type="submit" onClick={this.handleSubmit}>
                        Submit
                      </Button>
                      <Button type="button" onClick={cancelFormOpen}>Cancel</Button>
                    </Form>
                  </Segment>
        )
    }
}

export default EventForm;