import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Card, Image, Grid, Label, Group} from 'semantic-ui-react';

import avengers from '../data/avengerInfo';

// mini tiny small medium large big huge massive
const AvengersList = (props) => {
    return (
        <div>
        <h2>{props.listProp}</h2>
        

        {avengers.map(hero => (
                <Card.Group key = {hero.id} centered>
                    <Card.Content style = {{cursor: 'pointer'}}>
                                        
                            <Image src = {hero.thumbnail} size  = 'small' height = '150px'/>
                            <Label>
                                <Link to = {`/avengers/${hero.id}`}>{hero.name} </Link>
                            </Label>           
                   
                    </Card.Content>
                    
                </Card.Group>
                
                ))}
                
        
        </div>

    )
}

export default AvengersList;
