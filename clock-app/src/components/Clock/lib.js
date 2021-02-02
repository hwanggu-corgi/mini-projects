import styled from 'styled-components';

let hoveredColor = "#999999";

export function ExpandButton() {
    let Button = styled.button`
        cursor: pointer;
        background-color: white;
        line-height: 1.75em;
        letter-spacing: 0.3125em;
        text-transform: uppercase;
        padding: 0.5625em;
        border-style: solid;
        border-color: #979797;
        border-radius: 50px 50px;
        display: flex;
        align-items:center;
        &:hover{
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
        <Button>
            <Span>More</Span>
            <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#303030" cx="20" cy="20" r="20"/><path stroke="#FFF" stroke-width="2" d="M14 23l6-6 6 6"/></g></svg>
        </Button>
    );
  }
