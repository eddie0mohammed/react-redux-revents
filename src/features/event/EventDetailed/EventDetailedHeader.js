import React from 'react'
import { Segment, Image, Item, Header, Button, Label } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {format, } from 'date-fns';

const eventImageStyle = {
    filter: 'brightness(30%)'
};

const eventImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};

const EventDetailedHeader = (props) => {
  const {event, isHost, isGoing, goingToEvent, cancelGoingToEvent, authenticated, openModal} = props;
    return (
          <Segment.Group>
             <Segment basic attached="top" style={{ padding: '0' }}>
               <Image src={`/assets/categoryImages/${event.category}.jpg`} fluid style={eventImageStyle}/>
       
               <Segment basic style={eventImageTextStyle}>
                 <Item.Group>
                   <Item>
                     <Item.Content>
                       <Header
                         size="huge"
                         content={event.title}
                         style={{ color: 'white' }}
                       />
                       <p>{event.date && format((event.date.toDate()), 'EEEE do LLL')}</p>
                       <p>
                         Hosted by <strong><Link style={{color: 'white'}}to={`/profile/${event.hostUid}`}>{event.hostedBy}</Link></strong>
                       </p>
                     </Item.Content>
                   </Item>
                 </Item.Group>
               </Segment>
             </Segment>
       
             <Segment attached="bottom" clearing>
             {event.cancelled && 
                <Label size="large" color="red" content="This event has been cancelled"/>
              }
             {!isHost && 
             <React.Fragment>
               {isGoing && !event.cancelled && <Button onClick={() => cancelGoingToEvent(event)}>Cancel My Place</Button>}

                {!isGoing && authenticated && !event.cancelled &&
               <Button color="teal" loading={props.loading} onClick={() => goingToEvent(event)}>JOIN THIS EVENT</Button> 
                }
               {!authenticated && !event.cancelled &&
               <Button color="teal" loading={props.loading} onClick={() => openModal('UnauthModal')}>JOIN THIS EVENT</Button> 
               }
              
               </React.Fragment>
             }
                {isHost && 
               <Button as={Link} to={`/manage/${event.id}`} color="orange" floated="right">
                 Manage Event
               </Button>}
             </Segment>
           </Segment.Group>
    )
}

export default EventDetailedHeader
