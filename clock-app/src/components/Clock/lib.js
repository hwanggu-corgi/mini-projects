import styled from 'styled-components';

export function ExpandButton() {
    let Button = styled.button`
        cursor: pointer;
        box-shadow: transparent;
        background-color: white;
        line-height: 1.75em;
        letter-spacing: 0.3125em;
        text-transform: uppercase;
        padding: 0.5625em;
        border-style: solid;
        border-color: #979797;
        border-radius: 50px 50px;
    `;
    return (
        <Button>
            <strong>More</strong><span>^</span>
        </Button>
    );
  }
