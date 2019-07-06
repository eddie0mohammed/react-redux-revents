import React, { Component } from 'react'
import EventListItem from './EventListItem';
import InfiniteScroll from 'react-infinite-scroller';

class EventList extends Component {
    render() {
        const {events, selectedEvent, deleteEvent, getNextEvents, loading, moreEvents} = this.props;
        return (
            <React.Fragment>
                {events && events.length !== 0 && 
                    <InfiniteScroll pageStart={0} 
                    loadMore={getNextEvents} 
                    hasMore={!loading && moreEvents} 
                    initialLoad={false}>

                    {events && events.map(event => {
                        return (
                            <EventListItem key={event.id} event={event} selectedEvent={selectedEvent} deleteEvent={deleteEvent}/>        
                        )
                    })}
                    </InfiniteScroll>
                }
                
                
        
        
            </React.Fragment>
        )
    }
}

export default EventList;