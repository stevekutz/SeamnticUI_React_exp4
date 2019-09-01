import React from 'react';

import {NavLink} from 'react-router-dom';
import {Button, Container, Icon, Label, Card, Image, Grid, Menu, Message, Segment} from 'semantic-ui-react';
import {PushSpinner, SwishSpinner, GuardSpinner} from 'react-spinners-kit';

import avengers from '../data/avengerInfo';

// mini tiny small medium large big huge massive
class AvengerCarousel extends React.Component {
    
        state =  {
            totalAvengers: avengers.length,
            currentAvenger: 1,
    }


  
    avengerInc = () => {
        console.log('inc fired');
        console.log('>> state ', this.state);
        console.log('avengers', avengers);

        if(this.state.currentAvenger === this.state.totalAvengers) {
            this.setState({ currentAvenger:  1  })  
        } else {
            this.setState({ currentAvenger: this.state.currentAvenger + 1     })    
        }

        console.log(this.state.totalAvengers, this.state.currentAvenger);
        return this.state.currentAvenger;
    }


    avengerDec = () => {

        if(this.currentAvenger === 1) {
            this.currentAvenger = 9;
        } else {
            this.currentAvenger--;
        }

        return this.currentAvenger;
    }
    
    render() {
       return (
            <Grid centered columns = '3' container padded >
    
                <Menu style = {{display: 'flex', justifyContent: `space-evenly`}}>
                
                    <Menu.Item>
                        <Button onClick = {this.avengerDec}> 
                            <Icon name = 'hand point left' />  
                            Previous Avenger
                        </Button>
                    </Menu.Item>  
                    
                    <Menu.Item active color =  'pink' style = {{display: 'flex', justifyContent: 'center', border: '1px solid purple'}}>
                        <div color = 'pink'> {this.state.currentAvenger}</div>      
                    </Menu.Item>
    
                    <Menu.Item>
                        <Button onClick = {this.avengerInc} > 
                            Next Avenger
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
    
    
                <div>{this.state.currentAvenger}</div>
  
                
            </Grid>
        )
    }
}

export default AvengerCarousel;

/*

                <Grid centered columns = '1' container padded >
                    <Image style = {{border: `1px solid green`}} 
                        src = {avengers[this.currentAvenger].img}  alt = {avengers[this.currentAvenger].name} height = '250px' />
                </Grid>
                
    
                <Container style = {{ border: '1px solid deeppink', display: 'flex', margin: '20px', justifyContent: 'space-around'}}>
                    <Card style = {{ border: '1px solid blue', display: 'flex', justifyContent: 'space-around', margin: '10px'}} >
                        <Card.Header style = {{fontWeight: 'bold'}}>{avengers[this.currentAvenger].name} </Card.Header>
                        <Image src = {avengers[this.currentAvenger].img} alt = {avengers[this.currentAvenger].name} height = '100px'/>
                        <Container>{avengers[this.currentAvenger].nickname}</Container>
                    </Card>
                    <Card style = {{ border: '1px solid blue', display: 'flex', justifyContent: 'space-around', margin: '10px', boxSizing: `border-box`}} > 
                        <Card.Header style = {{fontWeight: 'bold'}}> Synopisis </Card.Header>    
                        <Card.Description style = {{background: 'pink'}}>
                                {avengers[this.currentAvenger].description}                     
                        </Card.Description>
                    
                    </Card>
                
                </Container>  

*/
