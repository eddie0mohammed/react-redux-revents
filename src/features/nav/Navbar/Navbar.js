import React, { Component } from 'react'
import { Menu, Container, Button } from 'semantic-ui-react';
import {NavLink, Link} from 'react-router-dom';
import SignedOutMenu from '../Menus/SignedOutMenu';
import SignedInMenu from '../Menus/SignedInMenu';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {openModal} from '../../modals/ModalActions';
import {logout} from '../../auth/authActions';

class Navbar extends Component {

    handleSignIn = () => {
        this.props.openModal('LoginModal')
     };

     handleRegister = () => {
        this.props.openModal('RegisterModal')

     }

    handleSignOut = () => {
        this.props.logout();
        this.props.history.push('/');
     };

    render() {
        const {auth} = this.props;
        const authenticated = auth.authenticated;
        return (
            <Menu inverted fixed="top">
            <Container>
                <Menu.Item as={NavLink} exact to="/" header>
                <img src="/assets/logo.png" alt="logo" />
                Re-vents
                </Menu.Item>
                <Menu.Item as={NavLink} exact to="/events" name="Events" />
                {authenticated &&
                    <React.Fragment>
                    <Menu.Item as={NavLink} exact to="/people" name="People" />
                    <Menu.Item>
                    <Button as={Link} to="/createEvent" floated="right" positive inverted content="Create Event" />
                    </Menu.Item>
                    </React.Fragment>
                }
                {authenticated ? 
                
                <SignedInMenu handleSignOut={this.handleSignOut} currentUser={auth.currentUser}/> :
                
                <SignedOutMenu handleSignIn={this.handleSignIn} register={this.handleRegister}/>}               
                
            </Container>
            </Menu>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: (method) => dispatch(openModal(method)),
        logout: () => dispatch(logout()),
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));