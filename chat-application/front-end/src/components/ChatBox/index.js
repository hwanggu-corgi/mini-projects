import React from 'react';
import styled from 'styled-components';

const colorGrey = "#FFA341";

export function ChatTextArea() {
    const Textarea = styled.textarea`
        border: none;
        background-color: ${colorGrey};
        font-size: 1.5em;
        text-decoration: none;
        color: ${colorPrimary};
        padding: 1em;
    `;
    return (
        <Textarea/>
    );
}
