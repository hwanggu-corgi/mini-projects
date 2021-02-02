import styled from 'styled-components';

let color_primary = '#000000';
let color_secondary = '#303030';
let color_white = '#FFFFFF';

let H1 = styled.h1`
    font-size: 200px;
    line-height: 200px;
    font-weight: bold;
    line-spacing: 5px;
`;

let H2 = styled.h2`
    font-size: 56px;
    line-height: 68px;
    line-spacing: 5px;
`;

let H3 = styled.h3`
`;

function Clock() {
  return (
      <div>
            <H1>Lorem</H1>
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
