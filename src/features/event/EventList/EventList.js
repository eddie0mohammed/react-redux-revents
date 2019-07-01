import React, { Component } from 'react'
import EventListItem from './EventListItem';

class EventList extends Component {
    render() {
        const {events, selectedEvent, deleteEvent} = this.props;
        return (
            <React.Fragment>
                {events.map(event => {
                    return (
                        <EventListItem key={event.id} event={event} selectedEvent={selectedEvent} deleteEvent={deleteEvent}/>        
                    )
                })}
                
        
        
            </React.Fragment>
        )
    }
}

export default EventList;