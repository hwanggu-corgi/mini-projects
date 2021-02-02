import styled from 'styled-components';

let color_primary = '#000000';
let color_secondary = '#303030';
let color_white = '#FFFFFF';

let H1 = styled.h1`
    font-size: 200px;
    line-height: 200px;
    font-weight: bold;
    letter-spacing: -5px;
`;

let H2 = styled.h2`
    font-size: 56px;
    line-height: 68px;
    letter-spacing: 5px;
`;

let H3 = styled.h3`
    font-size: 24px;
    font-weight: bold;
    line-height: 28px;
    letter-spacing: 4.8px;
    text-transform: uppercase;
`;

let H4 = styled.h4`
    font-size: 20px;
    font-weight: normal;
    line-height: 28px;
    letter-spacing: 4px;
`;


function Clock() {
  return (
      <div>
            <H1>Lorem</H1>
            <H2>Lorem ipsum dolor sit</H2>
            <H3>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</H3>
            <H4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</H4>
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
