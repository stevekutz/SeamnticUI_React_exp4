import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Card, Image, Grid} from 'semantic-ui-react';

import avengers from '../data/avengerInfo';

const AvengersList = (props) => {
    return (
        <Container>
        <h2>{props.listProp}</h2>
            <Grid columns = '3' padded >
            {avengers.map(hero => (
                <Card style = {{cursor: 'pointer'}} >
                    <Image src = {hero.thumbnail} size  = 'tiny'/>
                    <Link to = {`/avengers/${hero.id}`}>{hero.name} </Link>
                        
                </Card>
            ))}

            </Grid>
        </Container>
    )
}

export default AvengersList;
