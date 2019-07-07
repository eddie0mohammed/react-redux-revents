import React from 'react';
import Navbar from './features/nav/Navbar/Navbar';
import { Container } from 'semantic-ui-react';
import {Switch, Route} from 'react-router-dom';
import Homepage from './features/home/Homepage';
import EventDashboard from './features/event/EventDashboard/EventDashboard';
import EventDetailedPage from  './features/event/EventDetailed/EventDetailedPage';
import PeopleDashboard from './features/user/PeopleDashboard/PeopleDashboard';
import UserDetailedPage from './features/user/UserDetailed/UserDetailedPage';
import EventForm from './features/event/EventForm/EventForm';
import SettingsDashboard from './features/user/PeopleDashboard/Settings/SettingsDashboard';
import {withRouter} from 'react-router-dom'
import ModalManager from './features/modals/ModalManager'
import {UserIsAuthenticated} from './features/auth/authWrapper';
import NotFound from './Layout/NotFound';



class App extends React.Component {
  render(){

  return (
    <React.Fragment>
      <ModalManager />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/(.+)" render={() => (
          <React.Fragment>
          <Container className="main">
          <Navbar />
          <Switch key={this.props.location.key}>
            <Route exact path="/events" component={EventDashboard} />
            <Route exact path="/events/:id" component={EventDetailedPage} />
            <Route exact path="/people" component={UserIsAuthenticated(PeopleDashboard)} />
            <Route exact path="/profile/:id" component={UserIsAuthenticated(UserDetailedPage)} />
            <Route  path="/settings" component={UserIsAuthenticated(SettingsDashboard)} />
            <Route exact path="/createEvent" component={UserIsAuthenticated(EventForm)} />
            <Route exact path="/manage/:id" component={UserIsAuthenticated(EventForm)} />
            <Route component={NotFound} />
          </Switch>
            
          </Container>
        </React.Fragment>
        )} />

      </Switch> 
    </React.Fragment>
    
  );
}
}

export default withRouter(App);
