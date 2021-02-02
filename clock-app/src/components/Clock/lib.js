import styled from 'styled-components';

export function ExpandButton() {
    let Button = styled.button`
        background-color: white;
        text-transform: uppercase;
        padding: 0.75em;
    `;
    return (
        <Button>
            More <span>^</span>
        </Button>
    );
  }
