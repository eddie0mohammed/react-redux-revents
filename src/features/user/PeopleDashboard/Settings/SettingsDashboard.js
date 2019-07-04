import React from 'react'
import { Grid } from 'semantic-ui-react';
import SettingsNav from './SettingsNav';
import {Switch, Route} from 'react-router-dom';
import BasicPage from './BasicPage';
import AboutPage from './AboutPage';
import PhotosPage from './PhotosPage';
import AccountPage from './AccountPage';
import {Redirect} from 'react-router-dom';
import {connect } from 'react-redux';
import {updatePassword} from '../../../auth/authActions';
import {updateProfile } from '../../userActions'

const SettingsDashboard = (props) => {
    const {updatePassword,} = props;

    return (
        <Grid>
            <Grid.Column width={12}>
                <Switch>
                    <Redirect exact from='/settings' to="/settings/basic" />
                    <Route path="/settings/basic" render={() => <BasicPage initialValues={props.user} updateProfile={() => props.updateProfile(props.updatedUser.values)}/>} />
                    <Route path="/settings/about" render={() => <AboutPage initialValues={props.user} updateProfile={() => props.updateProfile(props.updatedUser.values)}/>} />
                    <Route path="/settings/photos" component={PhotosPage} />
                    <Route path="/settings/account" render={() => <AccountPage updatePassword={() => updatePassword(props.creds.values)} providerId={props.providerId}/>}/>
                </Switch>
            </Grid.Column>
            <Grid.Column width={4}>
                <SettingsNav />
            </Grid.Column>

        </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
        creds: state.form.account,
        providerId: state.firebase.auth.providerData[0].providerId,
        user: state.firebase.profile,
        updatedUser: state.form.userProfile

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updatePassword: (password) => dispatch(updatePassword(password)),
        updateProfile: (user) => dispatch(updateProfile(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsDashboard);
