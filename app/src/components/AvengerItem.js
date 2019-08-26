import React from 'react';
import {Button, Container, Icon} from 'semantic-ui-react';

import avengers from '../data/avengerInfo';

const AvengerItem = (props) => {
    const avenger = avengers.find(e => e.id === props.match.params.id);

    return (
        <Container> something here </Container>
    )
}

export default AvengerItem;