import React from 'react'
import { Header, Card, Image, Button } from 'semantic-ui-react';

const UserPhotos = (props) => {
    const {photos, profile, deletePhoto, setMainPhoto, loading} = props;
    let filteredPhotos;
    if (photos){
        filteredPhotos = photos.filter(photo => {
            return photo.url !== profile.photoURL
        })
    }
    
    return (
        <React.Fragment>
        <Header sub color='teal' content='All Photos'/>

        <Card.Group itemsPerRow={5}>
            <Card>
                <Image src={profile.photoURL || '/assets/user.png'}/>
                <Button positive>Main Photo</Button>
            </Card>
            {filteredPhotos && filteredPhotos.map(photo => {
                return (
                <Card key={photo.id}>
                    <Image
                        src={photo.url}
                    />
                    <div className='ui two buttons'>
                        <Button loading={loading} basic color='green' onClick={() => setMainPhoto(photo)}>Main</Button>
                        <Button basic icon='trash' color='red' onClick={() => deletePhoto(photo)}/>
                    </div>
                </Card>
                )
            })}
                
        </Card.Group>
        </React.Fragment>
    )
}

export default UserPhotos
