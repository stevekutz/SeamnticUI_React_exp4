import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Card, Image, Grid, Label, Group} from 'semantic-ui-react';

import avengers from '../data/avengerInfo';

// mini tiny small medium large big huge massive
const AvengersList = (props) => {
    return (
        <div>
        <h2>{props.listProp}</h2>
        

            <Card.Group centered itemsPerRow={5}
                style = {{ border: `1px solid blue`}}>
                {avengers.map(hero => (
                        <Card>
                        
                     {/*   <Card.Group style = {{ border: `1px solid purple`}}>    */}
                        <Card.Content key = {hero.id} >
                        <Link to = {`/avengers/${hero.id}`}>
                        
                        <Image src = {hero.thumbnail} height = '130px'/>
                        <Label>  {hero.name}      </Label>           
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
