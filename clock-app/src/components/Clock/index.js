import styled from 'styled-components';

let color_primary = '#000000';
let color_secondary = '#303030';
let color_white = '#FFFFFF';

let H1 = styled.h1`
    font-size: 200px;
    line-height: 200px;
    font-weight: bold;
    letter-spacing: -5px;
    margin: 1rem 0;
`;

let H2 = styled.h2`
    font-size: 56px;
    line-height: 68px;
    letter-spacing: 5px;
    margin: 1rem 0;
`;

let H3 = styled.h3`
    font-size: 24px;
    font-weight: bold;
    line-height: 28px;
    letter-spacing: 4.8px;
    text-transform: uppercase;
    margin: 1rem 0;
`;

let H4 = styled.h4`
    font-size: 20px;
    font-weight: normal;
    line-height: 28px;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin: 1rem 0;
`;

let H5 = styled.h5`
    font-size: 18px;
    font-weight: bold;
    line-height: 28px;
    margin: 1rem 0;
`;

let H6 = styled.h6`
    font-size: 15px;
    font-weight: normal;
    line-height: 28px;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin: 1rem 0;
`;


function Clock() {
  return (
      <div>
            <H1>Lorem</H1>
            <H2>Lorem ipsum dolor sit</H2>
            <H3>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</H3>
            <H4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</H4>
            <H5>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</H5>
            <H6>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</H6>
            <section>


            , it's currently

            in

            More
            Less

            Current timezone
            Day of the year
            Day of the week
            Week number

            </section>
        </div>
  );
}

export default Clock;
