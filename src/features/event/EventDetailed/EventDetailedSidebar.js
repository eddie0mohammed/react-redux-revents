import React from 'react'
import {Segment, Item, Label, } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const EventDetailedSidebar = (props) => {
    const {attendees} = props;
    return (
            <React.Fragment>
              <Segment
                textAlign='center'
                style={{ border: 'none' }}
                attached='top'
                secondary
                inverted
                color='teal'
              >
                {attendees && attendees.length} {attendees && attendees.length === 1 ? 'Person' : 'People'} Going
              </Segment>
              <Segment attached>
                <Item.Group divided>
                    {attendees && attendees.map(attendee => {
                        return (
                            <Item key={attendee.id} style={{ position: 'relative' }}>
                                {attendee.host && <Label
                                style={{ position: 'absolute', marginTop:'-10px'}}
                                color='orange'
                                ribbon='right'
                                >
                                Host
                                </Label>}
                                <Item.Image size='tiny' src={attendee.photoURL} />
                                <Item.Content verticalAlign='middle'>
                                <Item.Header as='h3'><Link to={`/profile/${attendee.id}`}>{attendee.displayName}</Link></Item.Header>
                                </Item.Content>
                            </Item>
                        )
                    })}
                
                  
                </Item.Group>
              </Segment>
            </React.Fragment>
    )
}

export default EventDetailedSidebar
