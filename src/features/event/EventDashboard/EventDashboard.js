import React, { Component, createRef } from 'react'
import { Grid, Loader,} from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import {connect} from 'react-redux';
import * as eventActions from '../eventActions';
import LoadingComponent from '../../../Layout/LoadingComponent';
import EventActivity from '../EventActivity/EventActivity';

import {firestoreConnect,} from 'react-redux-firebase';
 
const query = [
    {
        collection: 'activity',
        orderBy: ['timestamp', 'desc'],
        limit: 5
    }
]

class EventDashboard extends Component {
   contextRef = createRef(); 
    // handleDeleteEvent = (id) => {
    //     this.props.deleteEvent(id)
    // }

    state = {
        moreEvents: false,
        loadingInitial: true,
        loadedEvents: []
    }

    async componentDidMount(){
        
        let next = await this.props.getEventsForDashboard();
        // console.log(next);
        
        if (next && next.docs && next.docs.length > 1){
            this.setState({
                moreEvents: true,
                loadingInitial: false,
               
            });
        }
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.events !== prevProps.events){
            this.setState({
                loadedEvents: [...this.state.loadedEvents, ...this.props.events]
            })
        }
    }

    getNextEvents = async () => {
        const {events} = this.props;
        let lastEvent = events && events[events.length - 1];
        // console.log(lastEvent);
        let next = await this.props.getEventsForDashboard(lastEvent);
        // console.log(next);

        if (next && next.docs && next.docs.length <= 1){
            this.setState({moreEvents: false});
        }
    }

    render() {

        if (this.state.loadingInitial ) return <LoadingComponent />     
        return (
            <div>
                <Grid>
                    <Grid.Column width={10}>
                    <div ref={this.contextRef}>
                        <EventList events={this.state.loadedEvents}
                         getNextEvents={this.getNextEvents}
                          loading={this.props.loading}
                           moreEvents={this.state.moreEvents}/>
                    </div>
                    </Grid.Column>
                    <Grid.Column width={6}>
                       <EventActivity activities={this.props.activities} contextRef={this.contextRef}/>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Loader active={this.props.loading} />
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        events: state.events,
        loading: state.async.loading,
        activities: state.firestore.ordered.activity
    }
}

const mapDispatchToProps = (dispatch) => {
    return {  
        deleteEvent: (id) => dispatch(eventActions.deleteEvent(id)),
        getEventsForDashboard: (lastEvent) => dispatch(eventActions.getEventsForDashboard(lastEvent)),
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(firestoreConnect(query)(EventDashboard))  ;