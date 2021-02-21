import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export function SubmitButton() {
    const Button = styled.button`
        border: none;
        background-color: white;
        border-radius: 50%;
        box-shadow: 3px 5px 8px grey;
        position: fixed;
        right: 0;
        bottom: 0;
        font-size: 1.5em;
        text-decoration: none;
        color: inherit;
        padding: 1em;
        margin: 1.25em;

        div {
        width: 1.25em;
        height: 1.25em;
        display: flex;
        justify-content: center;
        align-items: center;
        }
    `;
    return (
        <Button>
            <FontAwesomeIcon icon={faPaperPlane}/>
        </Button>
    );
}
