import React, { Component } from 'react'
import { Menu, Container, Button } from 'semantic-ui-react';
import {NavLink, Link} from 'react-router-dom';
import SignedOutMenu from '../Menus/SignedOutMenu';
import SignedInMenu from '../Menus/SignedInMenu';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {openModal} from '../../modals/ModalActions';

class Navbar extends Component {

    state = {
        authenticated: false,

    }

    handleSignIn = () => {
        this.props.openModal('LoginModal')
     };

     handleRegister = () => {
        this.props.openModal('RegisterModal')

     }

    handleSignOut = () => {
        this.setState({authenticated: false});
        this.props.history.push('/');
     };

    render() {
        const {authenticated} = this.state;
        return (
            <Menu inverted fixed="top">
            <Container>
                <Menu.Item as={NavLink} exact to="/" header>
                <img src="/assets/logo.png" alt="logo" />
                Re-vents
                </Menu.Item>
                <Menu.Item as={NavLink} exact to="/events" name="Events" />
                <Menu.Item as={NavLink} exact to="/people" name="People" />
                <Menu.Item>
                <Button as={Link} to="/createEvent" floated="right" positive inverted content="Create Event" />
                </Menu.Item>
                {authenticated ? <SignedInMenu handleSignOut={this.handleSignOut}/> : <SignedOutMenu handleSignIn={this.handleSignIn} register={this.handleRegister}/>}               
                
            </Container>
            </Menu>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: (method) => dispatch(openModal(method)), 
    }
}


export default withRouter(connect(null, mapDispatchToProps)(Navbar));