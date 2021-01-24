import styled from 'styled-components';

const Ul = styled.ul`
    padding-left: 20px;
`;

export function WorkExpItem(props) {
    return (
      <article>
        <header>
            <div>
                <h3>{props.title}</h3>
                <p>{props.location}</p>
            </div>
            <div>
              <p>{props.date}</p>
            </div>
        </header>
        <Ul>
          {props.details.map(detail => <li>{detail}</li>)}
        </Ul>
      </article>
    );
}