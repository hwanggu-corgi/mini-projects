import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const colorOrange = "#FFA341";

export function SubmitButton() {
    const Button = styled.button`
        border: none;
        background-color: white;
        font-size: 1.5em;
        text-decoration: none;
        color: ${colorOrange};
        padding: 0.5em;
        margin: 1em;
        cursor: pointer;
    `;
    return (
        <Button>
            <FontAwesomeIcon icon={faPaperPlane}/>
        </Button>
    );
}
