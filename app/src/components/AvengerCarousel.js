import React from 'react';

import {NavLink} from 'react-router-dom';
import {Button, Container, Icon, Label, Card, Image, Grid, Menu, Message, Segment} from 'semantic-ui-react';
import {PushSpinner, SwishSpinner, GuardSpinner} from 'react-spinners-kit';

import avengers from '../data/avengerInfo';



// mini tiny small medium large big huge massive
const AvengerCarousel= (props) => {
    

    const totalAvengers = avengers.length;
    let currentAvenger = 1

    const avengerInc = (val) => {
        let nextAvenger = parseInt(val, 10);
        if(nextAvenger === totalAvengers) {
            nextAvenger = 1;
        } else {
            nextAvenger++;
        }
        return nextAvenger.toString();
    }

    const avengerDec = (val) => {
        let nextAvenger = parseInt(val, 10);
        if(nextAvenger === 1) {
            nextAvenger = 9;
        } else {
            nextAvenger--;
        }

        return nextAvenger.toString();
    }

    return (
        <Grid centered columns = '3' container padded >

            <Menu style = {{display: 'flex', justifyContent: `space-evenly`}}>
            
                <Menu.Item>
                    <Button> 
                        <Icon name = 'hand point left' />  
                        <NavLink to={`/avengers/${    avengerDec(avengers.id)    }`}> Previous Avenger </NavLink>
                    </Button>
                </Menu.Item>  
                
                <Menu.Item active color =  'pink' style = {{display: 'flex', justifyContent: 'center', border: '1px solid purple'}}>
                    <div color = 'pink'> {currentAvenger}</div>      
                </Menu.Item>

                <Menu.Item>
                    <Button> 
                        <NavLink to={`/avengers/${    avengerInc(avengers.id)    }`}> Next Avenger </NavLink>
                        <Icon name = 'hand point right' />  
                    </Button>
                </Menu.Item> 
                           
                <Menu.Item>
                    <Button> 
                        <NavLink to  = '/avengers'> Avengers List </NavLink>
                        <Icon name = 'meh outline' />  
                    </Button>
                </Menu.Item> 
            </Menu>



            <Grid centered columns = '1' container padded >
                <Image style = {{border: `1px solid green`}} 
                    src = {avengers[currentAvenger].img}  alt = {avengers[currentAvenger].name} height = '250px' />
            </Grid>
            

            <Container style = {{ border: '1px solid deeppink', display: 'flex', margin: '20px', justifyContent: 'space-around'}}>
                <Card style = {{ border: '1px solid blue', display: 'flex', justifyContent: 'space-around', margin: '10px'}} >
                    <Card.Header style = {{fontWeight: 'bold'}}>{avengers[currentAvenger].name} </Card.Header>
                    <Image src = {avengers[currentAvenger].img} alt = {avengers[currentAvenger].name} height = '100px'/>
                    <Container>{avengers[currentAvenger].nickname}</Container>
                </Card>
                <Card style = {{ border: '1px solid blue', display: 'flex', justifyContent: 'space-around', margin: '10px', boxSizing: `border-box`}} > 
                    <Card.Header style = {{fontWeight: 'bold'}}> Synopisis </Card.Header>    
                    <Card.Description style = {{background: 'pink'}}>
                            {avengers[currentAvenger].description}                     
                    </Card.Description>
                
                </Card>
            
            </Container>   
            
        </Grid>
    )
}

export default AvengerCarousel;
