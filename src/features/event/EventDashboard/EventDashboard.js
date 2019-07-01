import React, { Component } from 'react'
import { Grid,} from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import {connect} from 'react-redux';
import * as eventActions from '../eventActions';
 

class EventDashboard extends Component {
    
    handleDeleteEvent = (id) => {
        this.props.deleteEvent(id)
    }

    render() {

        const {events} = this.props;
        return (
            <div>
                <Grid>
                    <Grid.Column width={10}>
                        <EventList events={events} deleteEvent={this.handleDeleteEvent}/>
                    </Grid.Column>
                    <Grid.Column width={6}>
                       <h2>Activuty Feed</h2>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        events: state.events,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {  
        deleteEvent: (id) => dispatch(eventActions.deleteEvent(id)),
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDashboard);