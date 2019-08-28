import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Card, Image, Grid, Label} from 'semantic-ui-react';

import avengers from '../data/avengerInfo';

// mini tiny small medium large big huge massive
const AvengersList = (props) => {
    return (
        <Container>
        <h2>{props.listProp}</h2>
        <Grid style = {{border: `1px solid green`}}   columns = '4'>

        {avengers.map(hero => (
                <Card key = {hero.id} >
                    <Card.Content style = {{cursor: 'pointer'}}>
                
                        <Grid stretched>
                            <Image src = {hero.thumbnail}  height = '150px'/>
                            <Label>
                            <Link to = {`/avengers/${hero.id}`}>{hero.name} </Link>
                            </Label>
                        
                        </Grid>
                    
                    </Card.Content>
                    
                </Card>
                
                ))}
                
                </Grid>
        </Container>

    )
}

export default AvengersList;
