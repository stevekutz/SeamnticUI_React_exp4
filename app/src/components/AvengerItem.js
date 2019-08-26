import React from 'react';
import {Button, Container, Icon, Label, Card, Image, Grid} from 'semantic-ui-react';

import avengers from '../data/avengerInfo';


// mini tiny small medium large big huge massive
const AvengerItem = (props) => {
    const avenger = avengers.find(e => e.id === props.match.params.id);

    return (
        <Container> 
        <Image src = {avenger.img} size = 'huge' alt = {avenger.name}/>
            <Container style = {{ border: '1px solid deeppink', display: 'flex', margin: '20px', justifyContent: 'space-around'}}>
                <Card style = {{ border: '1px solid blue', display: 'flex', justifyContent: 'space-around', margin: '10px'}} >
                    <Label>{avenger.name} </Label>
                    <Image src = {avenger.img} size = 'huge' alt = {avenger.name}/>
                    <Container>{avenger.nickname}</Container>
                </Card>
                <Card style = {{ border: '1px solid blue', display: 'flex', justifyContent: 'space-around', margin: '10px'}} > 
                    <Label> {avenger.description} </Label>
                </Card>
            
            </Container>    
        
        </Container>
    )
}

export default AvengerItem;