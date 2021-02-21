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
        max-width: 12em;
    `;

    const Header = styled.header`
        font-size: 0.7em;
        padding: 0.5em 1em;
    `;

    return (
        <article>
            <Header>
                <span>User 1</span>
            </Header>
            <P></P>
        </article>
    );
}
