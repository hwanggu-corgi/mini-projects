import React from 'react';
import styled from 'styled-components';

const colorGrey = "#EEEEEE";

export function ChatBox() {
    const Div = styled.div`
        background-color: ${colorGrey};
        padding: 1em;
        border-radius: 5em;
        display:flex;
    `;

    const Textarea = styled.textarea`
        border: none;
        resize: none;
        width: 100%;
        background-color: ${colorGrey};
        text-decoration: none;
        padding: 1em;
        overflow-y: scroll;

        &:focus {
            outline: none;
        }
    `;
    return (
        <Div>
            <Textarea/>
        </Div>
    );
}
