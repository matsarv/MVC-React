import React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';
import '../../node_modules/primereact/resources/primereact.css';
import '../../node_modules/primereact/resources/themes/luna-blue/theme.css';
//import '../../node_modules/primereact/resources/themes/nova-dark/theme.css';
//import '../../node_modules/primereact/resources/themes/nova-light/theme.css';
//import '../../node_modules/primereact/resources/themes/nova-colored/theme.css';
import '../../node_modules/primeicons/primeicons.css';

export default props => (
    <div>
        <NavMenu />
        <Container>
            {props.children}
        </Container>
    </div>
);
