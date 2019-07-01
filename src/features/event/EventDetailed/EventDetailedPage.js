import React from 'react'
import { Grid} from 'semantic-ui-react';
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedSidebar from './EventDetailedSidebar';
import {connect} from 'react-redux';



const EventDetailedPage = (props) => {
    return (
        <Grid>
             <Grid.Column width={10}>
                <EventDetailedHeader event={props.event}/>
                <EventDetailedInfo event={props.event}/>
                <EventDetailedChat />
             </Grid.Column> 
             <Grid.Column width={6}>
                <EventDetailedSidebar attendees={props.event.attendees}/>
             </Grid.Column>
        </Grid>
    )
}

const mapStateToProps = (state, ownProps) => {
    const eventId = ownProps.match.params.id;
    let event = {};

    if (eventId && state.events.length > 0){
        event = state.events.filter(event => event.id === eventId)[0];
    }
    return {
        event: event,
    }
}

export default connect(mapStateToProps)(EventDetailedPage);
