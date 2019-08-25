import React from 'react';
import {Link} from 'react-router-dom';
import {Container} from 'semantic-ui-react';

import avengers from '../data/avengerInfo';

const AvengersList = (props) => {
    return (
        <Container>
            {avengers.map(item => (
                <div key = {item.id}>
                    {item.name}
                
                </div>
            ))}
        
        </Container>
    )
}

export default AvengersList;
