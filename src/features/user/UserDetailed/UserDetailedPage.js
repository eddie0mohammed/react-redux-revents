import React, {Component} from 'react';
import {Grid} from "semantic-ui-react";
import {connect} from 'react-redux';
import {firestoreConnect, isEmpty} from 'react-redux-firebase';
import {compose} from 'redux';
import UserDetailedHeader from './UserDetailedHeader';
import UserDetailedDescription from './UserDetailedDescription';
import UserDetailedPhotos from './UserDetailedPhotos';
import UserDetailedSidebar from './UserDetailedSidebar';
import UserDetailedEvents from './UserDetailedEvents';
import userDetailedQuery from '../userQueries';
import LoadingComponent from '../../../Layout/LoadingComponent';
import {getUserEvents} from '../userActions';


class UserDetailedPage extends Component {

    async componentDidMount(){
        await this.props.getUserEvents(this.props.userUid);
        
    }

    changeTab = (e, data) => {
        this.props.getUserEvents(this.props.userUid, data.activeIndex);
    }
    render() {
       
        const {profile, photos, auth, match} = this.props;
        const isCurrentUser = auth.uid === match.params.id;
        const isLoading = Object.values(this.props.requesting).some(a => a === true);
        if (isLoading) return <LoadingComponent />
        return (
            <Grid>
                <UserDetailedHeader profile={profile} />
                <UserDetailedDescription profile={profile} />
                <UserDetailedSidebar isCurrentUser={isCurrentUser}/>
                {photos && photos.length > 0 && 
                <UserDetailedPhotos photos={photos} /> }
                <UserDetailedEvents events={this.props.events} eventsLoading={this.props.eventsLoading} changeTab={this.changeTab}/>
            </Grid>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let userUid = null;
    let profile = {};

    if (ownProps.match.params.id === state.auth.id){
        profile = state.firebase.profile
    }else{
        profile = !isEmpty(state.firestore.ordered.profile) && state.firestore.ordered.profile[0];
        userUid = ownProps.match.params.id;
    }
    
    return {
        profile: profile,
        userUid: userUid,
        events: state.events.userEvents,
        eventsLoading: state.async.loading,
        auth: state.firebase.auth,
        photos: state.firestore.ordered.photos,
        requesting: state.firestore.status.requesting
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserEvents: (userUid, activeTab) => dispatch(getUserEvents(userUid, activeTab)),
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect((auth, userUid) => userDetailedQuery(auth, userUid))
)(UserDetailedPage);