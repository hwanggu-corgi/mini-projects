import styled from 'styled-components';
import IconArrowUp from '../../assets/icons/icon-arrow-up.svg';

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
    `;

    let Strong = styled.strong`
        margin-right: 0.875em;
    `;

    return (
        <Button>
            <Strong>More</Strong><img src={IconArrowUp} alt="Up Arrow"/>
        </Button>
    );
  }
