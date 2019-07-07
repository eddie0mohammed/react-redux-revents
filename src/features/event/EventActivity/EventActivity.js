import React from 'react'
import {Header, Segment, Feed, Sticky} from 'semantic-ui-react';
import EventActivityItem from './EventActivityItem';

const EventActivity = (props) => {
    const {activities, contextRef} = props;
    return (
        <Sticky context={contextRef} offset={95} styleElement={{zIndex: 0}}>
            <Header  attached="top" content="Recent Activity"/>
            <Segment attached>
                <Feed>
                    {activities && activities.map(activity => {
                        return <EventActivityItem key={activity.id} activity={activity}/>
                    })}
                </Feed>
            </Segment>
            
        </Sticky>
    )
}

export default EventActivity
