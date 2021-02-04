import { useState } from 'react';
import styled from 'styled-components';

let color_primary = '#000000';
let color_secondary = '#303030';
let color_white = '#FFFFFF';

const borderColor = "#979797";
const hoveredColor = "#999999";

let H1 = styled.h1`
    font-size: 200px;
    line-height: 200px;
    font-weight: bold;
    letter-spacing: -5px;
    margin: 0 0 1rem 0;
`;

let H2 = styled.h2`
    font-size: 56px;
    line-height: 68px;
    letter-spacing: 5px;
    margin: 0 0 1rem 0;
`;

let H3 = styled.h3`
    font-size: 24px;
    font-weight: bold;
    line-height: 28px;
    letter-spacing: 4.8px;
    text-transform: uppercase;
    margin: 0 0 1rem 0;
`;

let H4 = styled.h4`
    font-size: 20px;
    font-weight: normal;
    line-height: 28px;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin: 0 0 1rem 0;
`;

let H5 = styled.h5`
    font-size: 18px;
    font-weight: bold;
    line-height: 28px;
    margin: 0 0 1rem 0;
`;

let H6 = styled.h6`
    font-size: 15px;
    font-weight: normal;
    line-height: 28px;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin: 0 0 1rem 0;
`;

let P = styled.p`
    font-size: 18px;
    line-height: 28px;
    margin: 0 0 1rem 0;
`;

let MainSection = styled.section`
    width: 100vw;
    height: 100vh;
`;


export default function Clock() {
  return (
      <MainSection>
        <H1>Lorem</H1>
        <H2>Lorem ipsum dolor sit</H2>
        <H3>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</H3>
        <H4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</H4>
        <H5>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</H5>
        <H6>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</H6>
        <P>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</P>
        <P>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</P>
        <P>Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl. dui, eu pulvinar nunc sapien ornare nisl.</P>
        <ExpandButton/>
        {/* <Display/> */}
        <Quote/>
        {/* <Detail/> */}
    </MainSection>
  );
}

function ExpandButton() {
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

function Quote() {
    let Blockquote = styled.blockquote`

    `;

    return (
        <Article>
            <blockquote>
                <P>The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.</P>
                <H5>Ada Lovelace</H5>
            </blockquote>
        </Article>
    );
}