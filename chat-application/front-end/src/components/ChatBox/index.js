import React from 'react';
import styled from 'styled-components';

const colorGrey = "#EEEEEE";
const colorBlack = "black";

export function ChatTextArea() {
    const Textarea = styled.textarea`
        border: none;
        resize: none;
        background-color: ${colorGrey};
        text-decoration: none;
        color: ${colorBlack};
        padding: 1em;
        border-radius: 5em;
    `;
    return (
        <Textarea/>
    );
}
