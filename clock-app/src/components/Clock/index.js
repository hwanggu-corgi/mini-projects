import { useState } from 'react';
import styled from 'styled-components';

const color_primary = '#000000';
const color_secondary = '#303030';
const color_white = '#FFFFFF';

const borderColor = "#979797";
const hoveredColor = "#999999";

const refershIconColor = "#979797";

const H1 = styled.h1`
    font-size: 200px;
    line-height: 200px;
    font-weight: bold;
    letter-spacing: -5px;
    margin: 0 0 1rem 0;
`;

const H2 = styled.h2`
    font-size: 56px;
    line-height: 68px;
    letter-spacing: 5px;
    margin: 0 0 1rem 0;
`;

const H3 = styled.h3`
    font-size: 24px;
    font-weight: bold;
    line-height: 28px;
    letter-spacing: 4.8px;
    text-transform: uppercase;
    margin: 0 0 1rem 0;
`;

const H4 = styled.h4`
    font-size: 20px;
    font-weight: normal;
    line-height: 28px;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin: 0 0 1rem 0;
`;

const H5 = styled.h5`
    font-size: 18px;
    font-weight: bold;
    line-height: 28px;
    margin: 0 0 1rem 0;
`;

const H6 = styled.h6`
    font-size: 15px;
    font-weight: normal;
    line-height: 28px;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin: 0 0 1rem 0;
`;

const P = styled.p`
    font-size: 18px;
    line-height: 28px;
    margin: 0 0 1rem 0;
`;

const MainSection = styled.section`
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
        <Display/>
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
        line-height: 28px;
        letter-spacing: 5px;
        background-color: white;
        text-transform: uppercase;
        padding: 9px;
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
    const Article = styled.article`
        max-width: 573px;
        display: flex;
    `;

    const Blockquote = styled.blockquote`
        margin: 0 10.67px 0 0;
    `;

    return (
        <Article>
            <Blockquote>
                <P>The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.</P>
                <H5>Ada Lovelace</H5>
            </Blockquote>
            <section>
                <Refresh/>
            </section>
        </Article>
    );
}

function Display() {
    const Span = styled.span`
        font-size: 40px;
        font-weight: normal;
        line-height: 28px;
    `;

    const H1NoWrap = styled(H1)`
        white-space: nowrap;
    `;

    return(
        <article>
            <H4>
                <svg width="23" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M22.157 17.366a.802.802 0 00-.891-.248 8.463 8.463 0 01-2.866.482c-4.853 0-8.8-3.949-8.8-8.8a8.773 8.773 0 013.856-7.274.801.801 0 00-.334-1.454A7.766 7.766 0 0012 0C5.382 0 0 5.382 0 12s5.382 12 12 12c4.2 0 8.02-2.134 10.218-5.709a.805.805 0 00-.061-.925z" fill="#FFF" fill-rule="nonzero"/></svg>
                Good evening, it's currently
            </H4>
            <H1NoWrap>23:14 <Span>BST</Span></H1NoWrap>
            <H3>In London, UK</H3>
        </article>
    );
}

function Refresh() {
    const Button = styled.button`
        border: none;
        background-color: transparent;
        cursor: pointer;
        padding: 0;
    `;

    const Path = styled.path`
        fill: ${refershIconColor}
    `;

    return (
        <Button>
            <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg"><Path d="M7.188 10.667a.208.208 0 01.147.355l-2.344 2.206a5.826 5.826 0 009.578-2.488l2.387.746A8.322 8.322 0 013.17 14.94l-2.149 2.022a.208.208 0 01-.355-.148v-6.148h6.52zm7.617-7.63L16.978.958a.208.208 0 01.355.146v6.23h-6.498a.208.208 0 01-.147-.356L13 4.765A5.825 5.825 0 003.43 7.26l-2.386-.746a8.32 8.32 0 0113.76-3.477z" fill="#FFF" fill-rule="nonzero" opacity=".5"/></svg>
        </Button>
    );
}