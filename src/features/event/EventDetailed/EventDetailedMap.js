import React from 'react'
import { Segment, Icon } from 'semantic-ui-react';
import GoogleMapsReact from 'google-map-react';

const Marker = () => <Icon name="marker" size='big' color="red" />;

const EventDetailedMap = (props) => {
    const {lat, lng} = props;
    const zoom = 14;
    return (
        <Segment attached="bottom" style={{padding: 0}}>
            <div style={{height: '300px', width: '100%'}}>
                <GoogleMapsReact bootstrapURLKeys={{key:'AIzaSyBQjzAqk-mKbHuHc53I1QABZLShV6l535Y'}}
                    defaultCenter={{lat, lng}}
                    defaultZoom={zoom}
                >
                <Marker lat={lat} lng={lng}/>

                </GoogleMapsReact>

            </div>
        </Segment>
    )
}

export default EventDetailedMap
