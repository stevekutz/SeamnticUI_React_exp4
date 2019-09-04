import React, {useState, memo} from 'react';
import {NavLink} from 'react-router-dom';
import {Button, Container, Icon, Label, Card, Image, Grid, Menu, Message, Segment} from 'semantic-ui-react';


const AvengerHookCarousel = (props) => {
    const[currentAvenger, changeCurrentAvenger] = useState(0);

    const avengers  = props.avengerProps;

    const avengerInc = () => {


        if(currentAvenger === 8) {
            // this.setState({ currentAvenger:  8  })
            changeCurrentAvenger(currentAvenger => 0);
        } else {
            // cleaner
            // this.setState( prevState => ({currentAvenger: --prevState.currentAvenger}) )
            changeCurrentAvenger(currentAvenger => currentAvenger + 1);
            
        }
        // console.log(avengers, currentAvenger);
    }  



    const avengerDec = () => {

        let totalLength = props.avengerProps.length;

        if(currentAvenger === 0) {
            // this.setState({ currentAvenger:  8  })
            changeCurrentAvenger(currentAvenger => 8);
        } else {
            // cleaner
            // this.setState( prevState => ({currentAvenger: --prevState.currentAvenger}) )
            changeCurrentAvenger(currentAvenger => currentAvenger - 1);
            
        }
        console.log(totalLength, currentAvenger);
    }    


    return (
        <div style = {{border: '3px solid brown'}}>
            

            <Button onClick = {avengerDec}> previous </Button>
            <Button onClick = {avengerInc}> next </Button>

            <Card style = {{border: '1px solid deeppink', margin: `10px auto`, padding: `15px`}}>
                <Card.Header style = {{fontWeight: 'bolder'}}> {props.carouselHookProp}</Card.Header>
                <Card.Content>{avengers[currentAvenger].name}</Card.Content>
                <Card.Content>{avengers[currentAvenger].nickname}</Card.Content>
                <CurrentAvenger currentAvenger = {currentAvenger}/>
                <Image centered style = {{borderRadius: `50%`}} 
                                    src = {avengers[currentAvenger].thumbnail}  alt = {props.avengerProps[currentAvenger].name}  />
                <Label>Card Content used</Label>
                <Card.Content> {avengers[currentAvenger].description} </Card.Content>
                <Label>Card Description used</Label> 
                <Card.Description> {avengers[currentAvenger].description} </Card.Description>                    
            </Card>
        
        
        </div>
    );


};

const CurrentAvenger = memo(({currentAvenger}) => {
    // const avengers  = props.avengerProps;
    return (
        <Card>
            <Container>{currentAvenger}</Container>      
        </Card>
    )

});


export default AvengerHookCarousel;