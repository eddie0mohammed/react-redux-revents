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



function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/(.+)" render={() => (
          <React.Fragment>
          <Container className="main">
          <Navbar />
          <Switch>
            <Route exact path="/events" component={EventDashboard} />
            <Route exact path="/events/:id" component={EventDetailedPage} />
            <Route exact path="/people" component={PeopleDashboard} />
            <Route exact path="/profile/:id" component={UserDetailedPage} />
            <Route  path="/settings" component={SettingsDashboard} />
            <Route exact path="/createEvent" component={EventForm} />
          </Switch>
            
          </Container>
        </React.Fragment>
        )} />

      </Switch> 
    </React.Fragment>
    
  );
}

export default App;
