import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {Button, Container, Icon, Label, Card, Image, Grid, Menu, Message, Segment} from 'semantic-ui-react';


const AvengerHookCarousel = (props) => {

    return (
        <div>
            <Card>
                <Card.Header> {props.carouselHookProp}</Card.Header>
            
            </Card>
        
        
        </div>
    )


}

export default AvengerHookCarousel;