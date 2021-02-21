import React from 'react';
import styled from 'styled-components';

const colorGrey = "#EEEEEE";
const colorOrange = "#FFA341";

export function ChatBox() {
    const P = styled.p`
        margin: 0;
        background-color: ${colorOrange};
        padding: 1em;
        border-radius: 1.5em;
        max-width: 18.75em;
    `;

    return (
        <article>
            <P></P>
        </article>
    );
}
