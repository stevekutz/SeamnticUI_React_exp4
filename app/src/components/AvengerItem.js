import React from 'react';
import {NavLink} from 'react-router-dom';
import {Button, Container, Icon, Label, Card, Image, Grid, Menu} from 'semantic-ui-react';
import {PushSpinner, SwishSpinner, GuardSpinner} from 'react-spinners-kit';

import avengers from '../data/avengerInfo';



// mini tiny small medium large big huge massive
const AvengerItem = (props) => {
    
    const totalAvengers = avengers.length;
    let currentAvenger = props.match.params.id;
    console.log('>>>>>>>> ', currentAvenger, totalAvengers);

    console.log('typeof totalAvengers', typeof(totalAvengers) );
    console.log('typeof currentAvenger', typeof(currentAvenger) );

    /*
    const avengerInc = (currentAvenger) => {
        let avengerId = currentAvenger;

        if(currentAvenger === totalAvengers)  {avengerId = '1'};
        console.log('Ave ID >> ', avengerId);
        return avengerId;

    }
    */



    const avenger = avengers.find(e => e.id === currentAvenger);
    // console.log('typeof avenger', typeof(avenger.id) );

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

    // <NavLink to={`/avengers/${parseInt(avenger.id, 10) - 1}`}> Previous Avenger </NavLink>
    // <NavLink to={`/avengers/${parseInt(avenger.id, 10) + 1}`}> Next Avenger </NavLink>


    return (
        <Container> 

            <Menu>
                <Menu.Item>
                <Button> 
                    <Icon name = 'hand point left' />  
                    <NavLink to={`/avengers/${    avengerDec(avenger.id)    }`}> Previous Avenger </NavLink>
                </Button>
                </Menu.Item>  

                <Menu.Item>
                    <Label color = 'pink'> {currentAvenger}</Label>      
                </Menu.Item>

                <Menu.Item>
                    <Button> 
                    <NavLink to={`/avengers/${    avengerInc(avenger.id)    }`}> Next Avenger </NavLink>
                    <NavLink to  = '/avengers' style  = {{margin: `10px`}}> Avengers List Page </NavLink>
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
                <Image style = {{border: `1px solid pink`}} 
                    src = {avenger.img}  alt = {avenger.name} height = '250px' />
            </Grid>
            

            <Container style = {{ border: '1px solid deeppink', display: 'flex', margin: '20px', justifyContent: 'space-around'}}>
                <Card style = {{ border: '1px solid blue', display: 'flex', justifyContent: 'space-around', margin: '10px'}} >
                    <Label>{avenger.name} </Label>
                    <Image src = {avenger.img} alt = {avenger.name} height = '100px'/>
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