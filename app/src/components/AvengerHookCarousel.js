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

            <Card style = {{border: '1px solid deeppink', margin: `2px auto`}}>
                <Card.Header> {props.carouselHookProp}</Card.Header>
                <CurrentAvenger currentAvenger = {currentAvenger}/>
                <Image centered style = {{borderRadius: `50%`}} 
                                    src = {avengers[currentAvenger].thumbnail}  alt = {props.avengerProps[currentAvenger].name} height = '500px' />
            </Card>
        
        
        </div>
    );


};

const CurrentAvenger = memo(({currentAvenger}, props) => {
    // const avengers  = props.avengerProps;
    return (
        <Card>
            <Container>{currentAvenger}</Container>      
        </Card>
    )

});


export default AvengerHookCarousel;