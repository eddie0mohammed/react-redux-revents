import React, {Component} from 'react';
import {Grid} from "semantic-ui-react";
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import UserDetailedHeader from './UserDetailedHeader';
import UserDetailedDescription from './UserDetailedDescription';
import UserDetailedPhotos from './UserDetailedPhotos';
import UserDetailedSidebar from './UserDetailedSidebar';
import UserDetailedEvents from './UserDetailedEvents';


const query = ({auth}) => {
    return [
        {
            collection: 'users',
            doc: auth.uid,
            subcollections: [{collection: 'photos'}],
            storeAs: 'photos'
        }
    ]
}

class UserDetailedPage extends Component {

    render() {
        const {profile, photos} = this.props;
        return (
            <Grid>
                <UserDetailedHeader profile={profile} />
                <UserDetailedDescription profile={profile} />
                <UserDetailedSidebar />
                {photos && photos.length > 0 && 
                <UserDetailedPhotos photos={photos} /> }
                <UserDetailedEvents />
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile,
        auth: state.firebase.auth,
        photos: state.firestore.ordered.photos
    }
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect(auth => query(auth))
)(UserDetailedPage);