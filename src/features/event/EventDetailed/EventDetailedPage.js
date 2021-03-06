import React from 'react'
import { Grid} from 'semantic-ui-react';
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedSidebar from './EventDetailedSidebar';
import {connect} from 'react-redux';
import { withFirestore, firebaseConnect, isEmpty } from 'react-redux-firebase';
import {objectToArray, createDataTree} from '../../../common/util/helpers';
import {goingToEvent, cancelGoingToEvent} from '../../user/userActions';
import {compose } from 'redux';
import {addEventComment} from '../eventActions';
import {openModal } from '../../modals/ModalActions';
import LoadingComponent from '../../../Layout/LoadingComponent'
import NotFound from '../../../Layout/NotFound';



class EventDetailedPage extends React.Component {

    async componentDidMount(){
        const {firestore, match,} = this.props;
        await firestore.setListener(`events/${match.params.id}`);
    }

    async componentWillUnmount(){
        const {firestore, match, } = this.props;
        await firestore.unsetListener(`events/${match.params.id}`);
    }


    render(){
        const attendees = this.props.event && this.props.event.attendees && objectToArray(this.props.event.attendees).sort((a, b) => a.joinDate.toDate() - b.joinDate.toDate());
        const isHost = this.props.event.hostUid === this.props.auth.uid; 
        const isGoing = attendees && attendees.some(a => a.id === this.props.auth.uid);
        const chatTree = !isEmpty(this.props.eventChat) && createDataTree(this.props.eventChat);
        const authenticated = this.props.auth.isLoaded && !this.props.auth.isEmpty;
        const loadingEvent = this.props.requesting[`events/${this.props.match.params.id}`];

        if (loadingEvent) return <LoadingComponent />
        if (Object.keys(this.props.event).length === 0) return <NotFound />


    return (
        <Grid>
             <Grid.Column width={10}>
                <EventDetailedHeader authenticated={authenticated} openModal={this.props.openModal} loading={this.props.loading} event={this.props.event} isGoing={isGoing} isHost={isHost} goingToEvent={this.props.goingToEvent} cancelGoingToEvent={this.props.cancelGoingToEvent} />
                <EventDetailedInfo event={this.props.event}/>
                {authenticated && 
                <EventDetailedChat addEventComment={this.props.addEventComment} eventId={this.props.event.id} eventChat={chatTree}/>
                }
             </Grid.Column> 
             <Grid.Column width={6}>
                <EventDetailedSidebar attendees={attendees}/>
             </Grid.Column>
        </Grid>
    )
    } 
}

const mapStateToProps = (state, ownProps) => {
    const eventId = ownProps.match.params.id;
    let event = {};

    if (state.firestore.ordered.events && state.firestore.ordered.events.length > 0){
        event = state.firestore.ordered.events.filter(event => event.id === eventId)[0]  || {};
    }
    return {
        event: event,
        requesting: state.firestore.status.requesting,
        auth: state.firebase.auth,
        loading: state.async.loading,
        eventChat: !isEmpty(state.firebase.data.event_chat) && objectToArray(state.firebase.data.event_chat[ownProps.match.params.id])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        goingToEvent: (event) => dispatch(goingToEvent(event)),
        cancelGoingToEvent: (event) => dispatch(cancelGoingToEvent(event)),
        addEventComment: (eventId, comment, parentId) => dispatch(addEventComment(eventId, comment, parentId)),
        openModal: (modalType, modalProps) => dispatch(openModal(modalType, modalProps)),
    }
}

export default compose(
    withFirestore,
    connect(mapStateToProps, mapDispatchToProps),
    firebaseConnect((props) => ([`event_chat/${props.match.params.id}`]))

)(EventDetailedPage);
