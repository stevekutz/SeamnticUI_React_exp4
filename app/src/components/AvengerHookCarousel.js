import React, {useState, memo} from 'react';
import {NavLink} from 'react-router-dom';
import {Button, Container, Icon, Label, Card, Image, Grid, Menu, Message, Segment} from 'semantic-ui-react';


const AvengerHookCarousel = (props) => {
    const[currentAvenger, changeCurrentAvenger] = useState(0);

    const avengerInc = () => {


        if(currentAvenger === 8) {
            // this.setState({ currentAvenger:  8  })
            changeCurrentAvenger(currentAvenger => 0);
        } else {
            // cleaner
            // this.setState( prevState => ({currentAvenger: --prevState.currentAvenger}) )
            changeCurrentAvenger(currentAvenger => currentAvenger + 1);
            
        }
        console.log(props.avengerProps, currentAvenger);
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
        <div>
            

            <Button onClick = {avengerDec}> previous </Button>
            <Button onClick = {avengerInc}> next </Button>

            <Card>
                <Card.Header> {props.carouselHookProp}</Card.Header>
                <CurrentAvenger currentAvenger = {currentAvenger}/>
            </Card>
        
        
        </div>
    );


};

const CurrentAvenger = memo(({currentAvenger}) => {
    return <Container>{currentAvenger}</Container>

});


export default AvengerHookCarousel;