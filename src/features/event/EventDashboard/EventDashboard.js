import React, { Component } from 'react'
import { Grid,} from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import {connect} from 'react-redux';
import * as eventActions from '../eventActions';
import LoadingComponent from '../../../Layout/LoadingComponent';
import EventActivity from '../EventActivity/EventActivity';

import {firestoreConnect, isLoaded} from 'react-redux-firebase';
 

class EventDashboard extends Component {
    
    handleDeleteEvent = (id) => {
        this.props.deleteEvent(id)
    }

    render() {

        const {events} = this.props;
        if (!isLoaded(events) ) return <LoadingComponent />     
        return (
            <div>
                <Grid>
                    <Grid.Column width={10}>
                        <EventList events={events} deleteEvent={this.handleDeleteEvent}/>
                    </Grid.Column>
                    <Grid.Column width={6}>
                       <EventActivity />
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        events: state.firestore.ordered.events,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {  
        deleteEvent: (id) => dispatch(eventActions.deleteEvent(id)),
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(firestoreConnect([{collection: 'events'}])(EventDashboard))  ;