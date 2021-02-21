import React from 'react';
import styled from 'styled-components';

const colorOrange = "#FFA341";

export function ChatBox() {
    const Section = styled.section`
        margin: 0;
        background-color: ${colorOrange};
        padding: 1em;
        border-radius: 1.5em;
        max-width: 12em;
        font-size: 0.8em;
        white-space: pre-wrap;
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
            <Section>
                <p>This is a test</p>
                <p>This is a test 2</p>
            </Section>
        </article>
    );
}
