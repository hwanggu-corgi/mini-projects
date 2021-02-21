import React from 'react';
import styled from 'styled-components';

const colorOrange = "#FFA341";

export function MobileNavigation() {
    const Nav = styled.nav`
        padding: 1em;
        background-color: ${colorOrange};
    `;

    const Div = styled.div`
        background-color: white;
        width: 2em;
        height: 0.2em;
        margin-bottom: 0.5em;

        &:last-child {
            margin: 0;
        }
    `;

    return (
        <Nav>
            <Div></Div>
            <Div></Div>
            <Div></Div>
        </Nav>
    );
}
