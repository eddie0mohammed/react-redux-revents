import React, {useState} from 'react'
import { Segment, Grid, Icon, Button } from 'semantic-ui-react';
import EventDetailedMap from './EventDetailedMap';
import {format, } from 'date-fns';

const EventDetailedInfo = (props) => {
    const [isMapOpen, showMapToggle] = useState(false);
    const {event} = props;
    return (
           <Segment.Group>
              <Segment attached="top">
                <Grid>
                  <Grid.Column width={1}>
                    <Icon size="large" color="teal" name="info" />
                  </Grid.Column>
                  <Grid.Column width={15}>
                    <p>{event.description}</p>
                  </Grid.Column>
                </Grid>
              </Segment>
              <Segment attached>
                <Grid verticalAlign="middle">
                  <Grid.Column width={1}>
                    <Icon name="calendar" size="large" color="teal" />
                  </Grid.Column>
                  <Grid.Column width={15}>
                    <span>{event.date && format((event.date.toDate()), 'EEEE do LLL')} at {' '}  {event.date && format((event.date.toDate()), 'h:mm a')}</span>
                  </Grid.Column>
                </Grid>
              </Segment>
              <Segment attached>
                <Grid verticalAlign="middle">
                  <Grid.Column width={1}>
                    <Icon name="marker" size="large" color="teal" />
                  </Grid.Column>
                  <Grid.Column width={11}>
                    <span>{event.venue}</span>
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Button color="teal" size="tiny" content={isMapOpen ? 'Hide Map' : 'Show Map'} onClick={() => showMapToggle(!isMapOpen)}/>
                  </Grid.Column>
                </Grid>
              </Segment>
              {isMapOpen && 
              <EventDetailedMap lat={event.venueLatLng.lat} lng={event.venueLatLng.lng} />}
            </Segment.Group>
    )
}

export default EventDetailedInfo
