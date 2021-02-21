import React, { useState } from 'react';
import styled from 'styled-components';

const colorOrange = "#FFA341";

export function MobileNavigation() {
    const [toggled, setToggled] = useState(false);
    const Button = styled.button`
        background-color: transparent;
        border: none;
        padding: 0.5em;
        cursor: pointer;
    `;

    const Nav = styled.nav`
        padding: 1em;
        background-color: ${colorOrange};
    `;

    const Div = styled.div`
        background-color: white;
        width: 1.75em;
        height: 0.12em;
        margin-bottom: 0.4em;

        &:first-child {
            transform: ${toggled ? "rotate(-45deg) translate(-9px, 6px)" : "initial"};
        }

        &:nth-child(2) {
            opacity: ${toggled ? "0" : "1"};
        }

        &:last-child {
            margin: 0;
            transform: ${toggled ? "rotate(45deg) translate(-8px, -8px)" : "initial"};
        }

    `;

    return (
        <Nav>
            <Button>
                <Div></Div>
                <Div></Div>
                <Div></Div>
            </Button>
        </Nav>
    );
}
