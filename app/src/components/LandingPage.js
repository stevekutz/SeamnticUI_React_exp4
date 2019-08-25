import React from 'react';
import {PushSpinner} from 'react-spinners-kit';
import {Button, Container, Icon} from 'semantic-ui-react';

const LandingPage = () => {
    return (
        <div>
            <Container style = {{border: `1px solid blue`}}>
                <h3> Landing Page </h3>
                <Container>
                    <PushSpinner/> 
                </Container>    
                     
            
            </Container>

        </div>
    )
}

export default LandingPage;