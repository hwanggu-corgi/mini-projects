import { useState } from 'react';
import styled from 'styled-components';

const borderColor = "#979797";
const hoveredColor = "#999999";

export function ExpandButton() {
    const [toggled, setToggle] = useState(false);

    let Button = styled.button`
        display: flex;
        justify-content: space-between;
        align-items:center;

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

        &:hover{
            strong {
                color: ${hoveredColor};
            }
            circle {
                fill: ${hoveredColor};
            }
        }
    `;

    let Strong = styled.strong`
        margin: 0 0 0 1.2em;
    `;

    let Svg = styled.svg`
        transform: ${toggled ? "rotate(180deg)" : "none"}

    `;

    return (
        <Button onClick={ _ => setToggle(!toggled)}>
            <Strong>{toggled ? "Less" : "More"}</Strong>
            <Svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#303030" cx="20" cy="20" r="20"/><path stroke="#FFF" stroke-width="2" d="M14 23l6-6 6 6"/></g></Svg>
        </Button>
    );
  }
