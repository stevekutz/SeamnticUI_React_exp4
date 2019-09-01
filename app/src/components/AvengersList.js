import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Card, Image, Grid, Label, Group, Loader} from 'semantic-ui-react';

import avengers from '../data/avengerInfo';

// mini tiny small medium large big huge massive
const AvengersList = (props) => {
    return (
        <div>
        <Loader>loading something</Loader>
        <h2>{props.listProp}</h2>
        

            <Card.Group centered itemsPerRow={5}
                
                style = {{ border: `1px solid blue`, margin: `10px`}}>
                {avengers.map(hero => (
                        <Card>
                     {/* breaks layout with first item no aligning correctly */}   
                     {/*   <Card.Group style = {{ border: `1px solid purple`}}>    */}
                        <Card.Content key = {hero.id}>
                            <Link to = {`/avengers/${hero.id}`} >
                                <Container max-height = '150px'>
                                    <Image src = {hero.thumbnail} width = '100%' rounded/>
                                </Container>
                                <Label>  {hero.name} </Label>           
                            </Link>
                        </Card.Content>
                    {/*    </Card.Group>    */}
                        </Card>
                    
                    
                    ))}
            </Card.Group>
        
        </div>

    )
}

export default AvengersList;
