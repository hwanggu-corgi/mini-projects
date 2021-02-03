import { useState } from 'react';
import styled from 'styled-components';

let borderColor = "#979797";
let hoveredColor = "#999999";

export function ExpandButton() {
    const [toggled, setToggle] = useState(false);
    let Button = styled.button`
        cursor: pointer;
        width: 146px;
        line-height: 1.75em;
        letter-spacing: 0.3125em;
        background-color: white;
        text-transform: uppercase;
        padding: 0.5625em;
        border-style: solid;
        border-color: ${borderColor};
        border-radius: 50px 50px;
        display: flex;
        justify-content: flex-end;
        align-items:center;

        &:hover{
            transform: rotate(180deg);
            span {
                color: ${hoveredColor};
            }
            circle {
                fill: ${hoveredColor};
            }
        }
    `;

    let Span = styled.span`
        margin: 0 0.875em;
    `;

    return (
        <Button onClick={ _ => setToggle(!toggled)}>
            <Span>{toggled ? "Less" : "More"}</Span>
            <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#303030" cx="20" cy="20" r="20"/><path stroke="#FFF" stroke-width="2" d="M14 23l6-6 6 6"/></g></svg>
        </Button>
    );
  }
